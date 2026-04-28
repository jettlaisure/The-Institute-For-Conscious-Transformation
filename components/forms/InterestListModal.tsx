"use client";

import { useState, useEffect, useRef } from "react";

type ModalOrigin = "home" | "book" | "programs";

interface InterestListModalProps {
  isOpen: boolean;
  onClose: () => void;
  origin?: ModalOrigin;
}

export default function InterestListModal({
  isOpen,
  onClose,
  origin = "home",
}: InterestListModalProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ firstName?: string; email?: string }>({});
  const closeRef = useRef<HTMLButtonElement>(null);

  const bookFormId = process.env.NEXT_PUBLIC_CONVERTKIT_BOOK_INTEREST_FORM_ID;
  const foundationsFormId = process.env.NEXT_PUBLIC_CONVERTKIT_FOUNDATIONS_FORM_ID;
  const formId = origin === "programs" ? foundationsFormId : bookFormId;

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const validate = () => {
    const errs: { firstName?: string; email?: string } = {};
    if (!firstName.trim()) errs.firstName = "First name is required.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");

    if (!formId) {
      window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@instituteconscious.org"}?subject=Interest list signup`;
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: "", first_name: firstName, email, tags: [origin] }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-blue/60"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative bg-cream max-w-[480px] w-full p-12">
        {/* Close */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-slate-blue p-2 hover:text-gold transition-colors duration-[250ms]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center py-4">
            <p className="body-lg italic text-slate-80">You&#39;re on the list. Thank you.</p>
          </div>
        ) : (
          <>
            <p className="eyebrow text-center mb-4">INTEREST LIST</p>
            <h3
              id="modal-title"
              className="h3 text-slate-blue text-center mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Be the first to know.
            </h3>
            <p className="body text-slate-80 text-center mb-8">
              Get notified when <em>Ending with Awareness</em> and the Foundations
              Program become available.
            </p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Honeypot */}
              <input type="text" name="_trap" className="hidden" tabIndex={-1} aria-hidden="true" />

              <div>
                <label className="eyebrow block mb-2" htmlFor="modal-firstname">
                  FIRST NAME
                </label>
                <input
                  id="modal-firstname"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`w-full bg-white font-body text-base text-slate-blue px-4 py-4 border transition-colors duration-[250ms] focus:outline-none focus:border-slate-blue ${errors.firstName ? "border-error" : "border-slate-30"}`}
                />
                {errors.firstName && (
                  <p className="body-sm italic text-error mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="eyebrow block mb-2" htmlFor="modal-email">
                  EMAIL
                </label>
                <input
                  id="modal-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-white font-body text-base text-slate-blue px-4 py-4 border transition-colors duration-[250ms] focus:outline-none focus:border-slate-blue ${errors.email ? "border-error" : "border-slate-30"}`}
                />
                {errors.email && (
                  <p className="body-sm italic text-error mt-1">{errors.email}</p>
                )}
              </div>

              {status === "error" && (
                <p className="body-sm italic text-error">
                  Something went wrong. Please email{" "}
                  <a href="mailto:info@instituteconscious.org" className="underline">
                    info@instituteconscious.org
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-slate-blue text-cream font-body font-medium text-base tracking-wide py-4 transition-colors duration-[250ms] hover:bg-slate-blue-2 disabled:opacity-50 relative group"
              >
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-[250ms] group-hover:w-full" />
                {status === "loading" ? "Sending…" : "Join the list"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
