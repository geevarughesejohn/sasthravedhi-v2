import { NextResponse } from 'next/server';
import { saveMembership, getAllMemberships } from '@/lib/server/membershipStorage';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const existingList = getAllMemberships();
    const cleanPhone = (data.phone || '').replace(/[^0-9]/g, '');
    const cleanEmail = (data.email || '').trim().toLowerCase();
    const cleanTxId = (data.transactionId || '').trim();

    // Prevent duplicate registration if already active (status is not rejected)
    for (const item of existingList) {
      if (item.status === 'rejected') continue; // Allow re-registration if previous application was rejected

      const itemPhone = (item.phone || '').replace(/[^0-9]/g, '');
      const itemEmail = (item.email || '').trim().toLowerCase();
      const itemTxId = (item.transactionId || '').trim();

      // 1. Check duplicate phone number
      if (cleanPhone && itemPhone && (itemPhone === cleanPhone || (cleanPhone.length >= 10 && itemPhone.endsWith(cleanPhone.slice(-10))))) {
        return NextResponse.json(
          {
            success: false,
            error: `This mobile number (+91 ${cleanPhone.slice(-10)}) is already registered with an active membership (${item.planTitle || 'Active Membership'}). Duplicate registrations with the same phone number are not allowed.`,
          },
          { status: 400 }
        );
      }

      // 2. Check duplicate email address
      if (cleanEmail && itemEmail && itemEmail === cleanEmail) {
        return NextResponse.json(
          {
            success: false,
            error: `This email address (${cleanEmail}) is already registered with an active membership. Duplicate registrations with the same email are not allowed.`,
          },
          { status: 400 }
        );
      }

      // 3. Check duplicate UPI Transaction ID (UTR)
      if (cleanTxId && itemTxId && itemTxId.toLowerCase() === cleanTxId.toLowerCase()) {
        return NextResponse.json(
          {
            success: false,
            error: `This UPI Transaction ID (UTR: ${cleanTxId}) has already been submitted for another membership application.`,
          },
          { status: 400 }
        );
      }
    }

    // 1. Persist to server storage (GoDaddy persistent /private or local data)
    const saved = saveMembership(data);

    // 2. Optionally forward to Google Apps Script if configured
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (scriptErr) {
        console.error('Optional Google Apps Script sync warning:', scriptErr);
      }
    }

    return NextResponse.json({ success: true, id: saved.id });
  } catch (error) {
    console.error('Error in /api/membership POST:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}

