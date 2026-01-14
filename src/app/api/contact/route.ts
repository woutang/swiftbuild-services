import { NextResponse } from 'next/server';
import { z } from 'zod';

// HTML escape function to prevent XSS attacks
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char] ?? char);
}

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
      subject: `Nowe zapytanie od ${escapeHtml(data.name)}${data.company ? ` (${escapeHtml(data.company)})` : ''}`,
      html: `
        <h2>Nowe zapytanie ze strony</h2>
        <p><strong>Imię:</strong> ${escapeHtml(data.name)}</p>
        ${data.company ? `<p><strong>Firma:</strong> ${escapeHtml(data.company)}</p>` : ''}
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        ${data.phone ? `<p><strong>Telefon:</strong> ${escapeHtml(data.phone)}</p>` : ''}
        <p><strong>Wiadomość:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // Log submission only in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', {
        name: data.name,
        company: data.company || 'N/A',
        email: data.email,
        phone: data.phone || 'N/A',
        message: data.message.substring(0, 100) + '...',
        timestamp: new Date().toISOString(),
      });
    }

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
