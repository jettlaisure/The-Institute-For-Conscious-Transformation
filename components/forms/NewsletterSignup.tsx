"use client";

import { useState } from "react";

type NewsletterVariant = "hero" | "footer";

interface NewsletterSignupProps {
  variant?: NewsletterVariant;
}

export default function NewsletterSignup({ variant = "hero" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const formId = process.env.NEXT_PUBLIC_CONVERTKIT_NEWSLETTER_FORM_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");

    if (!formId) {
      // Graceful fallback
      window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@instituteconscious.org"}?subject=Newsletter signup`;
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: "", email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    const successClass = variant === "footer"
      ? "text-cream/80 body-sm italic"
      : "text-slate-80 body italic";
    return <p className={successClass}>Thank you. We&#39;ll be in touch.</p>;
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot */}
        <input type="text" name="_trap" className="hidden" tabIndex={-1} aria-hidden="true" />
        <div className="flex gap-0 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            aria-label="Email address"
            required
            className="
              flex-1 bg-white/10 border border-white/20 text-cream placeholder:text-cream/40
              font-body text-base px-4 py-3 focus:outline-none focus:border-gold
              transition-colors duration-[250ms]
            "
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="
              border border-gold text-cream font-body font-medium text-sm tracking-wide
              px-6 py-3 transition-colors duration-[250ms] hover:bg-gold hover:text-slate-blue
              disabled:opacity-50 whitespace-nowrap
            "
          >
            {status === "loading" ? "Sending…" : "Subscribe"}
          </button>
        </div>
        {errorMsg && (
          <p className="body-sm italic text-error mt-2 text-center">{errorMsg}</p>
        )}
        {status === "error" && (
          <p className="body-sm italic text-error mt-2 text-center">
            Something went wrong. Please email us at{" "}
            <a href="mailto:info@instituteconscious.org" className="underline">
              info@instituteconscious.org
            </a>
            .
          </p>
        )}
      </form>
    );
  }

  // hero variant
  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md mx-auto">
      {/* Honeypot */}
      <input type="text" name="_trap" className="hidden" tabIndex={-1} aria-hidden="true" />
      <div className="flex gap-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          required
          className="
            flex-1 bg-white border border-slate-30 text-slate-blue placeholder:text-slate-60
            font-body text-base px-4 py-4 focus:outline-none focus:border-slate-blue
            transition-colors duration-[250ms]
          "
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="
            bg-slate-blue text-cream font-body font-medium text-base tracking-wide
            px-8 py-4 transition-colors duration-[250ms] hover:bg-slate-blue-2
            disabled:opacity-50 whitespace-nowrap relative group
          "
        >
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-[250ms] group-hover:w-full" />
          {status === "loading" ? "Sending…" : "Subscribe"}
        </button>
      </div>
      {errorMsg && (
        <p className="body-sm italic text-error mt-2">{errorMsg}</p>
      )}
      {status === "error" && (
        <p className="body-sm italic text-error mt-2">
          Something went wrong. Please email us at{" "}
          <a href="mailto:info@instituteconscious.org" className="underline">
            info@instituteconscious.org
          </a>
          .
        </p>
      )}
    </form>
  );
}
