import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, subject, message } = data;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    console.log('[CONTACT_INQUIRY]', {
      receivedAt: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || 'N/A',
      subject: subject?.trim() || 'General Inquiry',
      messagePreview: message.trim().slice(0, 100),
    });

    // Optionally forward to Google Apps Script if configured
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'contact',
            name: name.trim(),
            email: email.trim(),
            phone: phone?.trim() || '',
            subject: subject?.trim() || '',
            message: message.trim(),
            date: new Date().toISOString(),
          }),
        });
      } catch (scriptErr) {
        console.error('Optional Google Apps Script sync warning for contact form:', scriptErr);
      }
    }

    return NextResponse.json({ success: true, message: 'Message received successfully.' });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process contact message.' },
      { status: 500 }
    );
  }
}
