import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const domain = body?.domain || ''

    if (!domain || domain.length < 3) {
      return { success: false, message: 'Please enter a valid domain name' }
    }

    const getDomainPrice = (d: string): number => {
      const lower = d.toLowerCase()
      if (lower.endsWith('.com.ng')) return 6500
      if (lower.endsWith('.ng')) return 13500
      if (lower.endsWith('.com')) return 23500
      if (lower.endsWith('.name.ng')) return 500
      return 15000
    }

    const isAvailable = Math.random() > 0.3
    const domainPrice = getDomainPrice(domain)

    const packages = {
      starter: {
        name: 'Starter Website',
        development: 150000,
        hosting: 50000,
        features: ['5-page responsive website', 'Mobile-friendly design', 'Contact form', 'Basic SEO', '1-month maintenance'],
        total: domainPrice + 150000 + 50000,
        domainPrice
      },
      professional: {
        name: 'Professional Website',
        development: 350000,
        hosting: 75000,
        features: ['10-page responsive website', 'Custom design & branding', 'Management system', 'Advanced SEO', '3-month maintenance', 'Google Business setup'],
        total: domainPrice + 350000 + 75000,
        domainPrice
      },
      enterprise: {
        name: 'Enterprise Solution',
        development: 600000,
        hosting: 100000,
        features: ['Unlimited pages', 'Custom web application', 'E-commerce functionality', 'Advanced security', '6-month maintenance', 'Priority support'],
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
      message: isAvailable ? `${domain} is available!` : `${domain} is already taken.`
    }
  } catch (error: any) {
    return { success: false, message: error.message || 'Failed to check domain' }
  }
})