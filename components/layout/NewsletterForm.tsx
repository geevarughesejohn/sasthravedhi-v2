"use client";

import { useActionState } from "react";
import { subscribeNewsletter } from "@/lib/actions/newsletter";

type NewsletterFormProps = {
  placeholder: string;
  buttonLabel: string;
  title: string;
};

export function NewsletterForm({
  placeholder,
  buttonLabel,
  title,
}: NewsletterFormProps) {
  const [state, action, pending] = useActionState(subscribeNewsletter, {
    ok: false,
    message: "",
  });

  return (
    <div>
      <form action={action} className="flex max-w-md flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          {placeholder}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder={placeholder}
          className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-sky-100/50"
          disabled={pending}
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover disabled:opacity-60"
        >
          {pending ? "…" : buttonLabel}
        </button>
      </form>
      <p className="mt-2 text-xs text-sky-100/50">{title}</p>
      {state.message && (
        <p
          className={`mt-2 text-xs ${state.ok ? "text-sky-100" : "text-orange-200"}`}
          role="status"
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
