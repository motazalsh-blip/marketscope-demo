"use client";

import { useState, type FormEvent } from "react";

/**
 * Demo contact form. Validates on the client and shows a confirmation.
 * No data is sent anywhere — connect it to an email service or API route
 * (e.g. Resend, Formspree) when moving to production.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    setStatus("submitting");
    setTimeout(() => setStatus("done"), 600);
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="text-lg font-semibold text-navy-900">Thanks — message received (demo).</p>
        <p className="mt-2 text-sm text-slate-600">
          This is a portfolio demo, so nothing was actually sent. In production this form would post to an email or CRM
          service.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-secondary mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy-900">Full name</label>
        <input id="name" name="name" required autoComplete="name" className="input mt-1.5" placeholder="Jane Doe" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-navy-900">Work email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className="input mt-1.5" placeholder="jane@company.com" />
      </div>
      <div>
        <label htmlFor="company" className="text-sm font-medium text-navy-900">Company</label>
        <input id="company" name="company" autoComplete="organization" className="input mt-1.5" placeholder="Acme Inc." />
      </div>
      <div>
        <label htmlFor="topic" className="text-sm font-medium text-navy-900">Topic</label>
        <select id="topic" name="topic" className="input mt-1.5" defaultValue="demo">
          <option value="demo">Product demo</option>
          <option value="partnership">Partnership</option>
          <option value="editorial">Editorial / blog</option>
          <option value="advertising">Advertising</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-navy-900">Message</label>
        <textarea id="message" name="message" required rows={5} minLength={10} className="input mt-1.5" placeholder="How can we help?" />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">Demo form — submissions are not stored or sent.</p>
        <button type="submit" disabled={status === "submitting"} className="btn-primary px-6">
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
