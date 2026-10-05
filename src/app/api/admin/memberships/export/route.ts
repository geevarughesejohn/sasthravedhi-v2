import { NextResponse } from 'next/server';
import { getAllMemberships, StoredMembership } from '@/lib/server/membershipStorage';

function escapeCsvField(val: string | undefined): string {
  if (val === undefined || val === null) return '""';
  let str = String(val);
  // Prevent CSV / Excel formula injection (commands starting with =, +, -, @, tab, or carriage return)
  if (/^[=+\-@\t\r]/.test(str)) {
    str = `'${str}`;
  }
  return `"${str.replace(/"/g, '""')}"`;
}

export async function GET(req: Request) {
  const adminKey = process.env.ADMIN_KEY?.trim();
  if (!adminKey) {
    return new NextResponse('Unauthorized: ADMIN_KEY is not configured on server', { status: 401 });
  }

  const url = new URL(req.url);
  const key = (url.searchParams.get('key') || req.headers.get('x-admin-key'))?.trim();

  if (!key || key !== adminKey) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const list = getAllMemberships();

  const headers = [
    'Application ID',
    'Date Submitted',
    'Full Name',
    'Phone',
    'WhatsApp Verified',
    'WhatsApp Code',
    'Email',
    'District of Activity',
    'Permanent District',
    'PIN Code',
    'Address',
    'Membership Plan',
    'Amount (INR)',
    'Student Institution',
    'Course/Grade',
    'Student ID',
    'Senior Citizen Age',
    'YuvaSasthraVedhi',
    'UPI Transaction ID (UTR)',
    'Status',
    'Notes',
  ];

  const rows = list.map((m: StoredMembership) => [
    escapeCsvField(m.id),
    escapeCsvField(new Date(m.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })),
    escapeCsvField(m.name),
    escapeCsvField(m.phone),
    escapeCsvField(m.whatsappVerified ? 'Yes' : 'No'),
    escapeCsvField(m.whatsappCode),
    escapeCsvField(m.email),
    escapeCsvField(m.district),
    escapeCsvField(m.homeDistrict || m.district),
    escapeCsvField(m.pincode),
    escapeCsvField(m.address),
    escapeCsvField(m.planTitle),
    escapeCsvField(m.amount),
    escapeCsvField(m.institutionName),
    escapeCsvField(m.courseGrade),
    escapeCsvField(m.studentId),
    escapeCsvField(m.seniorAge),
    escapeCsvField(m.yuvaVedhi ? 'Yes' : 'No'),
    escapeCsvField(m.transactionId),
    escapeCsvField(m.status),
    escapeCsvField(m.notes),
  ].join(','));

  const csvContent = [headers.join(','), ...rows].join('\r\n');

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="sasthravedhi-memberships-${new Date().toISOString().split('T')[0]}.csv"`,
    },
  });
}

