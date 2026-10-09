import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

// Simple in-memory rate limiting (IP-based could be added later, this limits global concurrent requests as a basic safeguard)
let requestCount = 0;
const MAX_REQUESTS_PER_MINUTE = 20;

setInterval(() => {
  requestCount = 0;
}, 60000);

export async function POST(request: Request) {
  if (requestCount >= MAX_REQUESTS_PER_MINUTE) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  requestCount++;

  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name && !body.fullName) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!body.email || !body.email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    if (!body.message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }
    if (body.honeypot) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    const emailData = {
      name: body.fullName || body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      service: body.service,
      message: body.message,
      source: body.source || 'website_form',
    };

    await sendEmail(emailData);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
