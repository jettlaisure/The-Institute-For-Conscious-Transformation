"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

const TOPICS = [
  { value: "", label: "Select a topic" },
  { value: "general", label: "General inquiry" },
  { value: "programs", label: "Programs" },
  { value: "pilot-study", label: "Pilot Study" },
  { value: "practices", label: "Practices" },
  { value: "speaking", label: "Speaking & Media" },
  { value: "affiliate", label: "Affiliate / Partnership" },
  { value: "press", label: "Press" },
  { value: "advisory", label: "Advisory work with Svetlana" },
];

const TOPIC_MAP: Record<string, string> = {
  general: "General inquiry",
  programs: "Programs",
  "pilot-study": "Pilot Study",
  practices: "Practices",
  speaking: "Speaking & Media",
  affiliate: "Affiliate / Partnership",
  press: "Press",
  advisory: "Advisory work with Svetlana",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const topicParam = searchParams.get("topic") ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPIC_MAP[topicParam] ? topicParam : "");
  const [message, setMessage] = useState("");
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Please enter a valid email address.";
    if (!message.trim()) e.message = "Please include a message.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (trap) return; // honeypot
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId) {
      const body = encodeURIComponent(`Name: ${name}\nTopic: ${TOPIC_MAP[topic] || "General inquiry"}\n\n${message}`);
      window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@instituteconscious.org"}?subject=Inquiry from ${name}&body=${body}`;
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          topic: TOPIC_MAP[topic] || "General inquiry",
          message,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = `
    w-full bg-white border text-slate-blue placeholder:text-slate-60
    font-body text-base px-4 py-3 focus:outline-none
    transition-colors duration-[250ms]
  `;

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} className="focus:outline-none space-y-4">
        <h2 className="h2 text-slate-blue" style={{ fontFamily: "var(--font-display)" }}>
          Thank you.
        </h2>
        <p className="body text-slate-80">
          Your message has been received. We&#39;ll be in touch soon.
        </p>
        <a
          href="/"
          className="body-sm text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
        >
          Return home →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="_trap"
        value={trap}
        onChange={(e) => setTrap(e.target.value)}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Name */}
      <div>
        <label htmlFor="cf-name" className="eyebrow block mb-2">
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          placeholder="Your full name"
          className={`${inputClass} ${errors.name ? "border-error" : "border-slate-30 focus:border-slate-blue"}`}
        />
        {errors.name && <p className="body-sm italic text-error mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className="eyebrow block mb-2">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="Your email address"
          className={`${inputClass} ${errors.email ? "border-error" : "border-slate-30 focus:border-slate-blue"}`}
        />
        {errors.email && <p className="body-sm italic text-error mt-1">{errors.email}</p>}
      </div>

      {/* Topic */}
      <div>
        <label htmlFor="cf-topic" className="eyebrow block mb-2">
          Topic
        </label>
        <select
          id="cf-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={`${inputClass} border-slate-30 focus:border-slate-blue appearance-none bg-white`}
        >
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value} disabled={t.value === ""}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="eyebrow block mb-2">
          Message
        </label>
        <textarea
          id="cf-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          placeholder="How can we help?"
          className={`${inputClass} resize-y ${errors.message ? "border-error" : "border-slate-30 focus:border-slate-blue"}`}
        />
        {errors.message && <p className="body-sm italic text-error mt-1">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="body-sm italic text-error">
          Something went wrong. Please email us at{" "}
          <a href="mailto:info@instituteconscious.org" className="underline">
            info@instituteconscious.org
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="
          inline-block bg-slate-blue text-cream font-body font-medium text-base tracking-wide
          px-8 py-4 transition-colors duration-[250ms] hover:bg-slate-blue-2
          disabled:opacity-50 relative group
        "
      >
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-[250ms] group-hover:w-full" />
        {status === "loading" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
