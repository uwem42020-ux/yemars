import { defineEventHandler, readBody, createError } from 'h3'
import { Resend } from 'resend'
import { LeadSchema } from '../utils/validation'
import { checkRateLimit } from '../utils/rateLimit'

export default defineEventHandler(async (event) => {
  try {
    // Check rate limit
    const rateLimit = checkRateLimit(event)
    if (rateLimit.limited) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Too Many Requests',
        message: rateLimit.message
      })
    }

    // Get runtime config
    const config = useRuntimeConfig()
    
    // Initialize Resend
    const resend = new Resend(config.resendApiKey as string)

    // Read and validate body
    const body = await readBody(event)
    const validation = LeadSchema.safeParse(body)
    
    // Check if validation failed with proper type guard
    if (!validation.success) {
      // Safely access error message with optional chaining
      const errorMessage = validation.error.errors[0]?.message || 'Invalid form data'
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: errorMessage
      })
    }

    // TypeScript now knows validation.data exists
    const { name, email, phone, domain, package: selectedPackage, notes } = validation.data

    // Calculate totals
    const packagePrices = {
      starter: { dev: 150000, hosting: 50000 },
      professional: { dev: 350000, hosting: 75000 },
      enterprise: { dev: 600000, hosting: 100000 }
    }
    
    const pkg = packagePrices[selectedPackage.type]
    const domainPrice = selectedPackage.domainPrice
    const total = domainPrice + pkg.dev + pkg.hosting

    // Format currency
    const formatNaira = (amount: number): string => {
      return `₦${amount.toLocaleString('en-NG')}`
    }

    // Generate lead ID for tracking
    const leadId = `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`.toUpperCase()

    // Email template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead: ${domain}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background-color: #f4f6f9;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          .header {
            background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
            color: white;
            padding: 32px 24px;
            text-align: center;
          }
          .header h1 {
            font-size: 28px;
            margin-bottom: 8px;
            font-weight: 700;
          }
          .header .lead-id {
            background: rgba(255, 255, 255, 0.2);
            display: inline-block;
            padding: 6px 16px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 600;
            margin-top: 12px;
          }
          .content {
            padding: 32px 24px;
          }
          .section {
            margin-bottom: 32px;
          }
          .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #0A1F44;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #eef2f6;
          }
          .info-grid {
            background: #f8faff;
            border-radius: 12px;
            padding: 20px;
          }
          .info-row {
            display: flex;
            margin-bottom: 12px;
          }
          .info-label {
            width: 100px;
            font-weight: 600;
            color: #4a5568;
          }
          .info-value {
            flex: 1;
            color: #1a1a1a;
          }
          .package-card {
            background: linear-gradient(135deg, #f8faff, #ffffff);
            border: 1px solid #eef2f6;
            border-radius: 12px;
            padding: 24px;
          }
          .package-name {
            font-size: 20px;
            font-weight: 700;
            color: #0055FF;
            margin-bottom: 16px;
          }
          .price-breakdown {
            margin-top: 16px;
          }
          .price-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px dashed #eef2f6;
          }
          .price-total {
            display: flex;
            justify-content: space-between;
            padding: 16px 0 0;
            margin-top: 8px;
            border-top: 2px solid #0055FF;
            font-weight: 700;
            font-size: 18px;
            color: #0055FF;
          }
          .total-amount {
            font-size: 24px;
          }
          .notes-box {
            background: #fef8e7;
            border-left: 4px solid #fbbf24;
            padding: 16px;
            border-radius: 8px;
            margin-top: 16px;
          }
          .button {
            display: inline-block;
            background: linear-gradient(45deg, #0055FF, #6A0DAD);
            color: white;
            text-decoration: none;
            padding: 14px 28px;
            border-radius: 8px;
            font-weight: 600;
            margin-top: 16px;
          }
          .footer {
            background: #f8faff;
            padding: 24px;
            text-align: center;
            color: #718096;
            font-size: 14px;
          }
          .badge {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 4px 12px;
            border-radius: 30px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 8px;
          }
          @media (max-width: 600px) {
            .container { margin: 10px; }
            .content { padding: 20px; }
            .info-row { flex-direction: column; }
            .info-label { width: 100%; margin-bottom: 4px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Website Project Lead</h1>
            <p>${domain}</p>
            <div class="lead-id">${leadId}</div>
          </div>
          
          <div class="content">
            <!-- Customer Information -->
            <div class="section">
              <h2 class="section-title">👤 Customer Information</h2>
              <div class="info-grid">
                <div class="info-row">
                  <span class="info-label">Full Name:</span>
                  <span class="info-value"><strong>${name}</strong></span>
                </div>
                <div class="info-row">
                  <span class="info-label">Email:</span>
                  <span class="info-value"><a href="mailto:${email}" style="color: #0055FF;">${email}</a></span>
                </div>
                <div class="info-row">
                  <span class="info-label">Phone:</span>
                  <span class="info-value"><a href="tel:${phone}" style="color: #0055FF;">${phone}</a></span>
                </div>
                <div class="info-row">
                  <span class="info-label">Lead Time:</span>
                  <span class="info-value">${new Date().toLocaleString('en-NG', { 
                    timeZone: 'Africa/Lagos',
                    dateStyle: 'full',
                    timeStyle: 'long'
                  })} (WAT)</span>
                </div>
              </div>
            </div>

            <!-- Domain Details -->
            <div class="section">
              <h2 class="section-title">🌐 Domain Details</h2>
              <div class="info-grid">
                <div class="info-row">
                  <span class="info-label">Domain:</span>
                  <span class="info-value"><strong style="font-size: 18px;">${domain}</strong></span>
                </div>
                <div class="info-row">
                  <span class="info-label">Price:</span>
                  <span class="info-value">${formatNaira(domainPrice)} <span class="badge">Available</span></span>
                </div>
              </div>
            </div>

            <!-- Package Details -->
            <div class="section">
              <h2 class="section-title">📦 Selected Package: ${selectedPackage.name}</h2>
              <div class="package-card">
                <div class="package-name">${selectedPackage.name}</div>
                <div class="price-breakdown">
                  <div class="price-item">
                    <span>Domain Registration</span>
                    <span>${formatNaira(domainPrice)}</span>
                  </div>
                  <div class="price-item">
                    <span>Website Development</span>
                    <span>${formatNaira(pkg.dev)}</span>
                  </div>
                  <div class="price-item">
                    <span>Hosting (Year 1)</span>
                    <span>${formatNaira(pkg.hosting)}</span>
                  </div>
                  <div class="price-total">
                    <span>Total Investment</span>
                    <span class="total-amount">${formatNaira(total)}</span>
                  </div>
                </div>
              </div>
            </div>

            ${notes ? `
            <!-- Additional Notes -->
            <div class="section">
              <h2 class="section-title">📝 Additional Notes</h2>
              <div class="notes-box">
                ${notes.replace(/\n/g, '<br>')}
              </div>
            </div>
            ` : ''}

            <!-- Action Buttons -->
            <div style="text-align: center; margin-top: 32px;">
              <a href="mailto:${email}?subject=Re: Your Website Project for ${domain}&body=Hi ${name}%2C%0D%0A%0D%0AThank you for your interest in Yemars Technology. I'd love to discuss your website project for ${domain}.%0D%0A%0D%0AWhen would be a good time for a quick call%3F%0D%0A%0D%0ABest regards%2C%0D%0AThe Yemars Team" class="button">
                Reply to Customer
              </a>
            </div>
          </div>

          <div class="footer">
            <p style="margin-bottom: 8px;">© ${new Date().getFullYear()} Yemars Technology Nigeria</p>
            <p style="font-size: 12px;">Lead ID: ${leadId} | Generated from website</p>
            <p style="font-size: 12px; margin-top: 16px;">
              <span style="color: #10b981;">✓</span> This lead has been recorded and needs follow-up within 24 hours.
            </p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: config.fromEmail as string,
      to: [config.toEmail as string],
      subject: `🔥 New Website Lead: ${domain} - ${selectedPackage.name} (${leadId})`,
      html: emailHtml,
      headers: {
        'X-Entity-Ref-ID': leadId,
        'X-Lead-Source': 'Website Domain Search'
      },
      tags: [
        { name: 'lead-type', value: 'website-project' },
        { name: 'package', value: selectedPackage.type },
        { name: 'domain', value: domain }
      ]
    })

    if (error) {
      console.error('Resend error:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'Failed to send notification. Please try again.'
      })
    }

    // Log for monitoring
    console.log(`✅ Lead captured: ${leadId} - ${name} - ${domain}`)

    return {
      success: true,
      leadId,
      message: 'Thank you! We will contact you within 24 hours to discuss your website project.',
      timestamp: new Date().toISOString()
    }

  } catch (error: any) {
    console.error('Lead capture error:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Failed to process your request. Please try again.'
    })
  }
})