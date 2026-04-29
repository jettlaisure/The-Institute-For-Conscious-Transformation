import type { Metadata } from "next";
import { Suspense } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Institute for Conscious Transformation",
  description:
    "Get in touch with the Institute for Conscious Transformation. Inquiries about programs, speaking, affiliates, and advisory work with Svetlana.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
      <section className="bg-cream pt-40 pb-16">
        <div className="max-w-[1080px] mx-auto px-4 md:px-8">
          <ScrollReveal>
            <Eyebrow centered>CONTACT</Eyebrow>
            <h1
              className="display-2 text-slate-blue text-center mt-2 mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We&#39;d love to hear from you.
            </h1>
            <p className="body-lg text-slate-80 text-center max-w-[640px] mx-auto">
              Whether you&#39;re exploring our programs, navigating a transition, or interested
              in collaboration, please get in touch.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Form + Info ────────────────────────────────────────── */}
      <section className="bg-cream pb-32">
        <div className="max-w-[1080px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-16 items-start">

            {/* Left: form */}
            <div className="md:col-span-7">
              <ScrollReveal>
                <Suspense fallback={<div className="h-96" />}>
                  <ContactForm />
                </Suspense>
              </ScrollReveal>
            </div>

            {/* Right: info */}
            <aside className="md:col-span-4 md:col-start-9 space-y-10">
              <ScrollReveal delay={100}>
                <div>
                  <p className="eyebrow mb-2">EMAIL</p>
                  <a
                    href="mailto:info@instituteconscious.org"
                    className="body text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
                  >
                    info@instituteconscious.org
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-2">RESPONSE TIME</p>
                  <p className="body text-slate-80">
                    We typically respond within 3–5 business days.
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-2">LOCATION</p>
                  <p className="body text-slate-80">
                    California, USA. Virtual sessions worldwide.
                  </p>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
