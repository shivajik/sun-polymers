import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const adminEmail = process.env.EMAIL;
    const subject = company ? `Inquiry from ${company}` : 'Website Contact Form';

    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedSubject = escapeHtml(subject);
    const escapedMessage = escapeHtml(message);
    const escapedPhone = phone ? escapeHtml(phone) : null;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: adminEmail,
      subject: `New Contact Form Submission: ${escapedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
          <div style="background-color: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1e40af; margin: 0; font-size: 28px; font-weight: bold;">New Contact Form Submission</h1>
              <div style="width: 60px; height: 4px; background-color: #3b82f6; margin: 10px auto; border-radius: 2px;"></div>
            </div>
            
            <div style="color: #374151; line-height: 1.6; font-size: 16px;">
              <p style="margin-bottom: 20px;">You have received a new message from your Sun Polymers contact form:</p>
              
              <div style="background-color: #eff6ff; padding: 20px; border-radius: 6px; margin: 25px 0; border-left: 4px solid #3b82f6;">
                <p style="margin: 0 0 10px 0; color: #1e40af; font-weight: 500;">Contact Details:</p>
                <div style="color: #1e40af;">
                  <p style="margin: 5px 0;"><strong>Name:</strong> ${escapedName}</p>
                  <p style="margin: 5px 0;"><strong>Email:</strong> ${escapedEmail}</p>
                  ${escapedPhone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> ${escapedPhone}</p>` : ''}
                  <p style="margin: 5px 0;"><strong>Subject:</strong> ${escapedSubject}</p>
                </div>
              </div>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin: 25px 0;">
                <p style="margin: 0 0 10px 0; color: #374151; font-weight: 500;">Message:</p>
                <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${escapedMessage}</p>
              </div>
              
              <div style="background-color: #d1fae5; padding: 15px; border-radius: 6px; margin: 25px 0; border-left: 4px solid #10b981;">
                <p style="margin: 0; color: #065f46; font-size: 14px;">
                  <strong>Quick Action:</strong> Reply directly to this email or reach out to ${escapedEmail} to respond to this inquiry.
                </p>
              </div>
            </div>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This notification was sent from your Sun Polymers contact form.
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
