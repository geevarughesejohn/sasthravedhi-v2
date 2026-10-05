import fs from 'fs';
import path from 'path';

export interface StoredMembership {
  id: string;
  submittedAt: string;
  name: string;
  phone: string;
  email: string;
  district: string;
  homeDistrict?: string;
  pincode?: string;
  address: string;
  membershipType: string;
  planTitle: string;
  amount: string;
  institutionName?: string;
  courseGrade?: string;
  studentId?: string;
  seniorAge?: string;
  yuvaVedhi?: string;
  whatsappVerified?: string;
  whatsappCode?: string;
  transactionId: string;
  status: 'pending' | 'verified' | 'rejected';
  notes?: string;
}

export function getStorageFilePath(): string {
  // In production on GoDaddy Node.js Hosting, /private is persistent across redeploys
  if (fs.existsSync('/private')) {
    return '/private/memberships.json';
  }
  // Fallback in development or local systems
  const localDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(localDir)) {
    try {
      fs.mkdirSync(localDir, { recursive: true });
    } catch (err) {
      console.error('Failed to create local data directory:', err);
    }
  }
  return path.join(localDir, 'memberships.json');
}

export function getAllMemberships(): StoredMembership[] {
  try {
    const filePath = getStorageFilePath();
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const data = fs.readFileSync(filePath, 'utf8');
    if (!data.trim()) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error reading memberships storage:', error);
    return [];
  }
}

function writeStorageFile(filePath: string, data: StoredMembership[]): boolean {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const tempPath = `${filePath}.tmp.${Date.now()}.${Math.floor(Math.random() * 1000)}`;
  try {
    fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tempPath, filePath);
    return true;
  } catch (err) {
    console.error('Failed to atomically write membership storage:', err);
    try {
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    } catch {
      // ignore cleanup error
    }
    return false;
  }
}

export function saveMembership(
  record: Omit<StoredMembership, 'id' | 'submittedAt' | 'status'> & Partial<StoredMembership>
): StoredMembership {
  const list = getAllMemberships();
  const newEntry: StoredMembership = {
    id: record.id || `MEM-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    submittedAt: record.submittedAt || new Date().toISOString(),
    name: record.name || '',
    phone: record.phone || '',
    email: record.email || '',
    district: record.district || '',
    homeDistrict: record.homeDistrict || record.district || '',
    pincode: record.pincode || '',
    address: record.address || '',
    membershipType: record.membershipType || '',
    planTitle: record.planTitle || '',
    amount: record.amount || '',
    institutionName: record.institutionName || '',
    courseGrade: record.courseGrade || '',
    studentId: record.studentId || '',
    seniorAge: record.seniorAge || '',
    yuvaVedhi: record.yuvaVedhi || '',
    whatsappVerified: record.whatsappVerified || '',
    whatsappCode: record.whatsappCode || '',
    transactionId: record.transactionId || '',
    status: record.status || 'pending',
    notes: record.notes || '',
  };

  list.unshift(newEntry);

  const filePath = getStorageFilePath();
  writeStorageFile(filePath, list);
  return newEntry;
}

export function updateMembershipStatus(
  id: string,
  status: 'pending' | 'verified' | 'rejected',
  notes?: string
): boolean {
  const list = getAllMemberships();
  const item = list.find((m) => m.id === id);
  if (!item) return false;

  item.status = status;
  if (notes !== undefined) {
    item.notes = notes;
  }

  const filePath = getStorageFilePath();
  return writeStorageFile(filePath, list);
}

