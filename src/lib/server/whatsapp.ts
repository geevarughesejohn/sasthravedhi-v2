export async function sendWhatsAppOtp(
  phone: string,
  code: string
): Promise<{ success: boolean; simulated?: boolean; error?: string }> {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const targetNumber = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
  const message = `Your Sasthra Vedhi membership verification code is: *${code}*.\n\nValid for 5 minutes. Please do not share this code.`;

  // 1. Meta WhatsApp Cloud API (Official)
  const metaToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const metaPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (metaToken && metaPhoneId) {
    try {
      const res = await fetch(`https://graph.facebook.com/v19.0/${metaPhoneId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${metaToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: targetNumber,
          type: 'text',
          text: { body: message },
        }),
      });

      if (res.ok) {
        return { success: true };
      }
      const err = await res.json();
      console.error('Meta WhatsApp API error response:', err);
    } catch (err) {
      console.error('Meta WhatsApp API network error:', err);
    }
  }

  // 2. Generic WhatsApp Gateway / Webhook (e.g. UltraMsg, GreenAPI, Wassenger)
  const gatewayUrl = process.env.WHATSAPP_GATEWAY_URL;
  const gatewayToken = process.env.WHATSAPP_GATEWAY_TOKEN;

  if (gatewayUrl) {
    try {
      const res = await fetch(gatewayUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(gatewayToken ? { 'Authorization': `Bearer ${gatewayToken}` } : {}),
        },
        body: JSON.stringify({
          to: targetNumber,
          phone: targetNumber,
          body: message,
          message: message,
        }),
      });

      if (res.ok) {
        return { success: true };
      }
    } catch (err) {
      console.error('WhatsApp Gateway error:', err);
    }
  }

  // 3. Simulated / Development fallback
  console.log(`\n========================================\n[WHATSAPP OTP DISPATCH]\nRecipient: +${targetNumber}\nCode: ${code}\nMessage: ${message}\n========================================\n`);

  return { success: true, simulated: true };
}

