import { NextResponse } from 'next/server';
import { getAllMemberships, updateMembershipStatus } from '@/lib/server/membershipStorage';

function isAuthorized(req: Request): boolean {
  const adminKey = process.env.ADMIN_KEY?.trim();
  if (!adminKey) {
    console.error('ADMIN_KEY environment variable is not configured.');
    return false;
  }
  const authHeader = req.headers.get('x-admin-key')?.trim();
  const url = new URL(req.url);
  const queryKey = url.searchParams.get('key')?.trim();
  return (authHeader === adminKey) || (queryKey === adminKey);
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const list = getAllMemberships();
  return NextResponse.json({ success: true, memberships: list });
}

export async function PATCH(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, status, notes } = body;

    if (!id || !['pending', 'verified', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    const ok = updateMembershipStatus(id, status, notes);
    if (!ok) {
      return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to update membership record:', error);
    return NextResponse.json({ error: 'Failed to update record' }, { status: 500 });
  }
}

