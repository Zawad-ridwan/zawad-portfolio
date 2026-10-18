"use client";

import { useState, type FormEvent } from "react";
import { links } from "@/lib/data";
import { btnSolid, iconLink } from "@/lib/styles";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import Section from "./Section";

const fieldStyle =
  "w-full rounded-lg border border-line bg-page px-3.5 py-3 text-base text-fg transition focus:border-accent focus:ring-3 focus:ring-accent/20 focus:outline-none";
const labelStyle = "grid gap-2 font-head text-[0.85rem] font-semibold text-muted";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard blocked: the address is still selectable on the page
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" title="Get in touch">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="mb-6 max-w-[42ch] text-muted">
            Hiring, collaborating, or want to talk about a project? Send me a message and I&apos;ll
            get back to you.
          </p>
          <div className="flex flex-wrap items-center gap-2.5 rounded-[10px] border border-line bg-surface px-4 py-3.5">
            <MailIcon />
            <code className="select-all break-all text-[0.95rem]">{links.email}</code>
            <button
              type="button"
              onClick={copyEmail}
              className="ml-auto rounded-md border border-line px-3 pb-1.5 pt-2 font-head text-[0.85rem] font-semibold leading-none transition-colors hover:border-accent hover:text-accent"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="-ml-2 mt-4.5 flex gap-1.5">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
              <GitHubIcon />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative grid gap-4.5 rounded-xl border border-line bg-surface p-5 sm:p-7"
        >
          {/* Honeypot: hidden from people, filled in by spam bots. */}
          <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Company
              <input name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="grid gap-4.5 sm:grid-cols-2">
            <label htmlFor="name" className={labelStyle}>
              Name
              <input id="name" name="name" required maxLength={100} autoComplete="name" className={fieldStyle} />
            </label>
            <label htmlFor="email" className={labelStyle}>
              Email
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                className={fieldStyle}
              />
            </label>
          </div>
          <label htmlFor="message" className={labelStyle}>
            Message
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={5000}
              className={`${fieldStyle} min-h-32 resize-y`}
            />
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === "sending"} className={btnSolid}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p aria-live="polite" className="text-[0.9rem]">
              {status === "sent" && <span className="text-ok">Message sent. Thanks for reaching out!</span>}
              {status === "error" && (
                <span className="text-muted">
                  That didn&apos;t go through. Email me at{" "}
                  <a href={`mailto:${links.email}`} className="text-accent underline">
                    {links.email}
                  </a>
                  .
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
