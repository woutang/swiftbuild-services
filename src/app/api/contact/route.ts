import { NextResponse } from 'next/server';
import { z } from 'zod';

// HTML escape function to prevent XSS attacks in email body
// Used when Resend is enabled - see commented code below
function _escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char] ?? char);
}

// Sanitize subject line (remove newlines, don't HTML encode)
// Used when Resend is enabled - see commented code below
function _sanitizeSubject(text: string): string {
  return text.replace(/[\r\n]/g, ' ').trim();
}

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

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
      subject: `Nowe zapytanie od ${sanitizeSubject(data.name)}${data.company ? ` (${sanitizeSubject(data.company)})` : ''}`,
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
