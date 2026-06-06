"use server";

type NewsletterState = {
  ok: boolean;
  message: string;
};

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  // Newsletter provider integration goes here during launch.
  return {
    ok: true,
    message: "Thank you. We will notify you when the newsletter is available.",
  };
}

export type ContactState = {
  ok: boolean;
  message: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  // Email delivery / CRM integration goes here during launch.
  return {
    ok: true,
    message: "Thank you for your message. We will respond as soon as possible.",
  };
}
