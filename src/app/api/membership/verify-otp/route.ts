import { NextResponse } from 'next/server';
import { verifyOtp } from '@/lib/server/otpStore';

export async function POST(req: Request) {
  try {
    const { phone, code } = await req.json();
    const cleanPhone = (phone || '').replace(/[^0-9]/g, '');

    if (!cleanPhone || !code) {
      return NextResponse.json(
        { error: 'Phone number and verification code are required' },
        { status: 400 }
      );
    }

    const result = verifyOtp(cleanPhone, code);

    if (result.valid) {
      return NextResponse.json({ success: true, verified: true });
    } else {
      return NextResponse.json(
        { success: false, error: result.reason || 'Invalid verification code' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      { error: 'Failed to verify code' },
      { status: 500 }
    );
  }
}

