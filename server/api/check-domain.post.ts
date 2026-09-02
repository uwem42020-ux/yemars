export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const domain = (body?.domain || '').toString().toLowerCase().trim()

  if (!domain || domain.length < 3) {
    return { success: false, message: 'Please enter a valid domain name' }
  }

  const getDomainPrice = (d: string): number => {
    if (d.endsWith('.com.ng')) return 6500
    if (d.endsWith('.ng')) return 13500
    if (d.endsWith('.com')) return 23500
    if (d.endsWith('.name.ng')) return 500
    return 15000
  }

  const domainPrice = getDomainPrice(domain)

  let isAvailable = false
  let checkError = null
  let checkedSuccessfully = false

  // Method 1: Domainr API (most reliable)
  const checkDomainr = async (): Promise<boolean> => {
    try {
      const response = await fetch(`https://api.domainr.com/v2/status?domain=${domain}`, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        signal: AbortSignal.timeout(5000)
      })

      if (response.ok) {
        const data = await response.json()
        
        if (data.status && data.status.length > 0) {
          const status = data.status[0].status
          
          if (status === 'inactive') {
            isAvailable = true
            checkedSuccessfully = true
            return true
          } else if (status === 'active') {
            isAvailable = false
            checkedSuccessfully = true
            return true
          } else if (status === 'pending') {
            // Might be available
            isAvailable = true
            checkedSuccessfully = true
            return true
          }
        }
      }
      return false
    } catch (error) {
      console.error('Domainr check error:', error)
      return false
    }
  }

  // Method 2: DNS lookup fallback
  const checkDns = async (): Promise<boolean> => {
    try {
      const response = await fetch(`https://dns.google/resolve?name=${domain}&type=A`, {
        signal: AbortSignal.timeout(3000)
      })

      if (response.ok) {
        const data = await response.json()
        
        if (data.Answer && data.Answer.length > 0) {
          // DNS record exists = registered
          isAvailable = false
          checkedSuccessfully = true
          return true
        } else if (data.Status === 0) {
          // No DNS record = might be available
          isAvailable = true
          checkedSuccessfully = true
          return true
        }
      }
      return false
    } catch (error) {
      console.error('DNS check error:', error)
      return false
    }
  }

  // Method 3: Known domains fallback (for localhost testing)
  const checkKnownDomains = (): boolean => {
    const knownRegisteredDomains = [
      'google.com', 'facebook.com', 'youtube.com', 'amazon.com', 
      'wikipedia.org', 'twitter.com', 'instagram.com', 'linkedin.com',
      'microsoft.com', 'apple.com', 'netflix.com', 'github.com',
      'stackoverflow.com', 'reddit.com', 'whatsapp.com', 'yahoo.com',
      'bing.com', 'paypal.com', 'ebay.com', 'walmart.com'
    ]
    
    if (knownRegisteredDomains.includes(domain)) {
      isAvailable = false
      checkedSuccessfully = true
      return true
    }
    return false
  }

  // Method 4: RDAP fallback (works from production)
  const checkRdap = async (): Promise<boolean> => {
    try {
      const response = await fetch(`https://rdap.org/domain/${domain}`, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        signal: AbortSignal.timeout(5000)
      })

      if (response.status === 404) {
        isAvailable = true
        checkedSuccessfully = true
        return true
      } else if (response.status === 200) {
        isAvailable = false
        checkedSuccessfully = true
        return true
      }
      return false
    } catch (error) {
      console.error('RDAP check error:', error)
      return false
    }
  }

  // Try methods in order
  await checkDomainr()
  
  if (!checkedSuccessfully) {
    await checkDns()
  }
  
  if (!checkedSuccessfully) {
    checkKnownDomains()
  }
  
  if (!checkedSuccessfully) {
    await checkRdap()
  }

  // If all methods fail, provide a helpful message
  if (!checkedSuccessfully) {
    checkError = 'Unable to verify domain at this time. Please try again in a few minutes or contact us directly for accurate availability.'
    
    // For demo/testing purposes, make an educated guess
    // Most random .com domains are actually registered
    if (domain.endsWith('.com') || domain.endsWith('.net') || domain.endsWith('.org')) {
      isAvailable = false
      checkError = 'This domain is likely already registered. Please try a different name.'
    }
  }

  const packages = {
    starter: {
      name: 'Starter Website',
      development: 150000,
      hosting: 50000,
      features: [
        '5-page responsive website',
        'Mobile-friendly design',
        'Contact form',
        'Basic SEO',
        '1-month maintenance'
      ],
      total: domainPrice + 150000 + 50000,
      domainPrice
    },
    professional: {
      name: 'Professional Website',
      development: 350000,
      hosting: 75000,
      features: [
        '10-page responsive website',
        'Custom design & branding',
        'Management system',
        'Advanced SEO',
        '3-month maintenance',
        'Google Business setup'
      ],
      total: domainPrice + 350000 + 75000,
      domainPrice
    },
    enterprise: {
      name: 'Enterprise Solution',
      development: 600000,
      hosting: 100000,
      features: [
        'Unlimited pages',
        'Custom web application',
        'E-commerce functionality',
        'Advanced security',
        '6-month maintenance',
        'Priority support'
      ],
      total: domainPrice + 600000 + 100000,
      domainPrice
    }
  }

  return {
    success: true,
    available: isAvailable,
    domain,
    domainPrice,
    packages,
    message: checkError || (isAvailable ? `${domain} appears to be available!` : `${domain} is already registered.`)
  }
})
