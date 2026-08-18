import { defineEventHandler, readBody } from 'h3'
import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { to, subject, message, recipientName } = body

    if (!to || !to.includes('@')) {
      return { success: false, message: 'Please provide a valid email address' }
    }

    const config = useRuntimeConfig()
    const apiKey = config.resendApiKey || process.env.RESEND_API_KEY

    if (!apiKey) {
      return { success: false, message: 'Email service not configured. Please contact support.' }
    }

    // Read PDF from public folder
    const pdfPath = path.join(process.cwd(), 'public', 'PROPOSAL FOR THE DEVELOPMENT OF LEGALLYSWIFT PLATFORM.pdf')
    
    if (!fs.existsSync(pdfPath)) {
      return { success: false, message: 'PDF file not found in public folder' }
    }

    const pdfBuffer = fs.readFileSync(pdfPath)
    const pdfBase64 = pdfBuffer.toString('base64')

    // Plain text version (anti-spam)
    const textContent = `
Dear ${recipientName || 'Valued Partner'},

Thank you for your interest in Yemars Technology.

We have prepared a comprehensive proposal for the development of the LegallySwift platform.

WHAT'S INSIDE:
- Detailed Project Proposal
- Technical Specifications
- Timeline & Milestones
- Investment Breakdown

Please find the attached PDF document with full details.

If you have any questions, please contact us at info@yemars.ng or visit our website at https://yemars.ng

Best regards,
Yemars Technology
Abuja, Nigeria
www.yemars.ng
    `.trim()

    // Professional HTML email (less spammy)
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Yemars Technology Proposal</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
          <tr>
            <td align="center" style="padding: 20px;">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background-color: #0A1F44; padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">YEMARS TECHNOLOGY</h1>
                    <p style="color: #cccccc; margin: 8px 0 0; font-size: 14px;">Digital Solutions for Modern Businesses</p>
                  </td>
                </tr>
                <!-- Content -->
                <tr>
                  <td style="padding: 30px;">
                    <p style="color: #333333; font-size: 15px; margin: 0 0 15px;">Dear ${recipientName || 'Valued Partner'},</p>
                    <p style="color: #555555; font-size: 14px; line-height: 1.6; margin: 0 0 20px;">
                      Thank you for your interest in Yemars Technology. We have prepared a detailed proposal for the development of the LegallySwift platform.
                    </p>
                    <div style="background-color: #f8f9fa; border-left: 4px solid #0055FF; padding: 15px; margin: 20px 0;">
                      <strong style="color: #0A1F44;">What's Inside:</strong><br>
                      <span style="color: #555555; font-size: 13px;">• Detailed Project Proposal<br>• Technical Specifications<br>• Timeline & Milestones<br>• Investment Breakdown</span>
                    </div>
                    <p style="color: #555555; font-size: 14px; line-height: 1.6; margin: 0 0 20px;">
                      The full proposal is attached as a PDF document for your review.
                    </p>
                    <p style="color: #555555; font-size: 14px; line-height: 1.6; margin: 0 0 20px;">
                      If you have any questions, please reply to this email or contact us at <a href="mailto:info@yemars.ng" style="color: #0055FF;">info@yemars.ng</a>.
                    </p>
                    <p style="color: #555555; font-size: 14px; margin: 0;">Best regards,</p>
                    <p style="color: #0A1F44; font-size: 14px; font-weight: 600; margin: 5px 0 0;">Yemars Technology Team</p>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
                    <p style="color: #888888; font-size: 12px; margin: 0 0 5px;">
                      Yemars Technology | Abuja, Nigeria
                    </p>
                    <p style="color: #888888; font-size: 12px; margin: 0 0 5px;">
                      <a href="https://yemars.ng" style="color: #0055FF;">www.yemars.ng</a> | 
                      <a href="mailto:info@yemars.ng" style="color: #0055FF;">info@yemars.ng</a>
                    </p>
                    <p style="color: #aaaaaa; font-size: 11px; margin: 10px 0 0;">
                      You received this email because you requested information from our website.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // Dynamically import Resend
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
      from: 'Yemars Technology <info@yemars.ng>',
      to: [to],
      replyTo: 'info@yemars.ng',
      subject: subject || 'Your Requested Proposal from Yemars Technology',
      html: htmlContent,
      text: textContent,
      attachments: [
        {
          filename: 'LegallySwift-Platform-Proposal.pdf',
          content: pdfBase64,
        },
      ],
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Yemars Technology Mailer',
        'List-Unsubscribe': '<mailto:info@yemars.ng?subject=unsubscribe>'
      }
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, message: error.message }
    }

    console.log('Email sent successfully to:', to)
    return { success: true, message: 'Email sent successfully!' }

  } catch (error: any) {
    console.error('Email error:', error)
    return { success: false, message: error.message || 'Failed to send email' }
  }
})