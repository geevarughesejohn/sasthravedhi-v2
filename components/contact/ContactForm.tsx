"use client";

import { useActionState } from "react";
import { submitContact } from "@/lib/actions/newsletter";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, {
    ok: false,
    message: "",
  });

  return (
    <form action={action} className="rounded-xl border border-border bg-surface p-6 shadow-sm">
      <h2 className="font-display text-xl font-semibold text-foreground">
        Send a message
      </h2>
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm"
            autoComplete="name"
            disabled={pending}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm"
            autoComplete="email"
            disabled={pending}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm"
            disabled={pending}
          >
            <option>General enquiry</option>
            <option>Membership</option>
            <option>Yuva Sasthra Vedhi</option>
            <option>Publications</option>
            <option>Programs</option>
            <option>Media</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm"
            disabled={pending}
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
        {state.message && (
          <p
            className={`text-sm ${state.ok ? "text-primary" : "text-accent"}`}
            role="status"
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
