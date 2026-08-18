import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, phone, domain, package: selectedPackage, notes } = body || {}

    // Simple validation
    if (!name || name.length < 2) {
      return { success: false, message: 'Name is required' }
    }
    if (!email || !email.includes('@')) {
      return { success: false, message: 'Valid email is required' }
    }

    const config = useRuntimeConfig()
    const apiKey = config.resendApiKey || process.env.RESEND_API_KEY

    console.log('New lead:', { name, email, phone, domain, selectedPackage, notes })

    if (!apiKey) {
      return { success: true, message: 'Lead captured!' }
    }

    try {
      const { Resend } = await import('resend')
      const resend = new Resend(apiKey)

      const leadId = `LEAD-${Date.now()}`

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a; }
            .container { max-width: 600px; margin: 20px auto; background: #fff; border-radius: 10px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #0A1F44, #0055FF, #6A0DAD); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .info-row { display: flex; margin-bottom: 10px; }
            .info-label { width: 100px; font-weight: bold; color: #4a5568; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Website Lead</h1>
              <p>${domain || 'No domain'}</p>
              <p style="font-size: 12px;">${leadId}</p>
            </div>
            <div class="content">
              <div class="info-row"><span class="info-label">Name:</span><span>${name}</span></div>
              <div class="info-row"><span class="info-label">Email:</span><span>${email}</span></div>
              <div class="info-row"><span class="info-label">Phone:</span><span>${phone || 'N/A'}</span></div>
              <div class="info-row"><span class="info-label">Domain:</span><span>${domain || 'N/A'}</span></div>
              <div class="info-row"><span class="info-label">Package:</span><span>${selectedPackage?.name || 'N/A'}</span></div>
              ${notes ? `<div class="info-row"><span class="info-label">Notes:</span><span>${notes}</span></div>` : ''}
            </div>
          </div>
        </body>
        </html>
      `

      const { error } = await resend.emails.send({
        from: config.fromEmail || 'Yemars Technology <info@yemars.ng>',
        to: [config.toEmail || 'uwem42020@gmail.com'],
        subject: `New Lead: ${domain || 'Website'} - ${selectedPackage?.name || 'General'}`,
        html: htmlContent
      })

      if (error) {
        console.error('Email error:', error)
      }

      return { success: true, leadId, message: 'Thank you! We will contact you soon.' }
    } catch (emailError) {
      console.error('Email send error:', emailError)
      return { success: true, message: 'Lead captured!' }
    }

  } catch (error: any) {
    console.error('Lead capture error:', error)
    return { success: false, message: error.message || 'Failed to process request' }
  }
})