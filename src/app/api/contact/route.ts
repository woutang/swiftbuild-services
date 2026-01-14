import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // TODO: Enable Resend when API key is configured
    // Uncomment and add RESEND_API_KEY to environment variables
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'SwiftBuild <noreply@swiftbuild.services>',
      to: ['kontakt@swiftbuild.services'],
      replyTo: data.email,
      subject: `Nowe zapytanie od ${data.name}${data.company ? ` (${data.company})` : ''}`,
      html: `
        <h2>Nowe zapytanie ze strony</h2>
        <p><strong>Imię:</strong> ${data.name}</p>
        ${data.company ? `<p><strong>Firma:</strong> ${data.company}</p>` : ''}
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ''}
        <p><strong>Wiadomość:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // Mock: Log the submission (remove in production)
    console.log('Contact form submission:', {
      name: data.name,
      company: data.company || 'N/A',
      email: data.email,
      phone: data.phone || 'N/A',
      message: data.message.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
