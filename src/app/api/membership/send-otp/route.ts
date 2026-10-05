import { NextResponse } from 'next/server';
import { createOtp } from '@/lib/server/otpStore';
import { sendWhatsAppOtp } from '@/lib/server/whatsapp';

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();
    const cleanPhone = (phone || '').replace(/[^0-9]/g, '');

    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json(
        { error: 'Please provide a valid 10-digit mobile number' },
        { status: 400 }
      );
    }

    const { code } = createOtp(cleanPhone);
    const result = await sendWhatsAppOtp(cleanPhone, code);

    const isDev = process.env.NODE_ENV !== 'production';

    return NextResponse.json({
      success: true,
      message: 'Verification code sent to WhatsApp',
      simulated: result.simulated,
      // Provide devCode strictly in local development when simulated
      ...(isDev && result.simulated ? { devCode: code } : {}),
    });
  } catch (error) {
    console.error('Error sending WhatsApp OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send WhatsApp verification code' },
      { status: 500 }
    );
  }
}

