interface OtpEntry {
  code: string;
  expiresAt: number;
  attempts: number;
  verified: boolean;
}

// Global in-memory cache for OTPs
const otpMap = new Map<string, OtpEntry>();

export function createOtp(phone: string): { code: string; isNew: boolean } {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const existing = otpMap.get(cleanPhone);
  const now = Date.now();

  // If active OTP exists and requested less than 30s ago, reuse it
  if (existing && existing.expiresAt - now > 4.5 * 60 * 1000) {
    return { code: existing.code, isNew: false };
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  otpMap.set(cleanPhone, {
    code,
    expiresAt: now + 5 * 60 * 1000, // 5 minutes validity
    attempts: 0,
    verified: false,
  });

  return { code, isNew: true };
}

export function verifyOtp(
  phone: string,
  inputCode: string
): { valid: boolean; reason?: string } {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const entry = otpMap.get(cleanPhone);

  if (!entry) {
    return { valid: false, reason: 'No OTP requested for this number or it has expired.' };
  }

  if (Date.now() > entry.expiresAt) {
    otpMap.delete(cleanPhone);
    return { valid: false, reason: 'OTP has expired. Please request a new one.' };
  }

  if (entry.attempts >= 5) {
    otpMap.delete(cleanPhone);
    return { valid: false, reason: 'Too many incorrect attempts. Please request a new OTP.' };
  }

  if (entry.code !== inputCode.trim()) {
    entry.attempts += 1;
    return { valid: false, reason: 'Incorrect code. Please check your WhatsApp and try again.' };
  }

  entry.verified = true;
  return { valid: true };
}

export function isPhoneVerified(phone: string): boolean {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const entry = otpMap.get(cleanPhone);
  return Boolean(entry && entry.verified);
}

