import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Community, Affiliates & Resources — Institute for Conscious Transformation",
  description: "A curated ecosystem of aligned practitioners, teachings, and developmental tools.",
};

export default function CommunityPage() {
  return (
    <>
      {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
      <section
        className="relative w-full flex items-center justify-center text-center"
        style={{ height: "60vh", minHeight: "400px" }}
      >
        <Image
          src="/images/network-nodes-watercolor.png"
          alt="A watercolor network of blue and gold nodes connected by fine lines."
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(250,247,242,0.08)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 px-4 md:px-8 pt-20 max-w-[800px] mx-auto">
          <ScrollReveal>
            <Eyebrow style={{ color: "#C9A86A" } as React.CSSProperties}>COMMUNITY</Eyebrow>
            <h1
              className="display-2 text-slate-blue mt-2 mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A community for conscious evolution.
            </h1>
            <p className="body-lg text-slate-80 max-w-[720px] mx-auto mb-3">
              A global field of individuals, practitioners, and scholars committed to deep
              development, relational coherence, and meaningful transformation.
            </p>
            <p className="body italic text-slate-60 max-w-[600px] mx-auto">
              Where growth becomes shared, embodied, and amplified.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Introduction ───────────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-[720px] mx-auto px-4 md:px-8">
          <ScrollReveal>
            <p className="body-lg text-slate-80">
              The Institute for Conscious Transformation collaborates with a select group of
              practitioners, scholars, and organizations whose work aligns with our
              developmental, somatic, and integrative approach to human evolution. This page
              serves as a living library — a place to explore offerings, teachings, and
              resources that complement and deepen the Institute&#39;s work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 3: Affiliates ─────────────────────────────────────────── */}
      <section className="bg-cream py-8 pb-24" id="affiliates">
        <div className="max-w-[1080px] mx-auto px-4 md:px-8">
          <ScrollReveal>
            <Eyebrow centered>AFFILIATES &amp; PARTNER OFFERINGS</Eyebrow>
            <h2
              className="h2 text-slate-blue text-center mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Practitioners and organizations aligned with conscious development.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Card className="max-w-[720px] mx-auto">
              <h3
                className="h3 text-slate-blue mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Converging Zone
              </h3>
              <p className="body text-slate-80 mb-6">
                At Converging Zone, we believe that personal and professional growth is an
                ongoing journey — one that requires clarity, strategy, and the right guidance.
                Whether you&#39;re an individual seeking transformation, a leader looking to
                inspire, or an organization striving for excellence, we&#39;re here to support
                you every step of the way.
              </p>
              {/* TODO: Replace # with real Converging Zone URL when available (PRD Appendix B) */}
              <Link
                href="#"
                className="body-sm text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
              >
                Visit Converging Zone →
              </Link>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 4: Webinars, Retreats & Events ───────────────────────── */}
      <section className="bg-blue-tint py-24">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <Eyebrow centered>WEBINARS, RETREATS &amp; EVENTS</Eyebrow>
            <h3
              className="h3 text-slate-blue mt-2 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Live experiences for deeper practice and community learning.
            </h3>
            <p className="body-lg italic text-slate-60 mb-6">Coming soon.</p>
            <Link
              href="/contact?topic=programs"
              className="body-sm text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
            >
              Be notified when events are announced →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 5: Books, Articles & Publications ────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-[1080px] mx-auto px-4 md:px-8">
          <ScrollReveal>
            <Eyebrow centered>BOOKS, ARTICLES &amp; PUBLICATIONS</Eyebrow>
            <h2
              className="h2 text-slate-blue text-center mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Developmental, psychological, somatic, and integrative works we recommend.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="max-w-[960px] mx-auto grid md:grid-cols-12 gap-10 items-start">
              {/* Book cover */}
              <div className="md:col-span-4">
                <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/intentional-evolution-book-cover.png"
                    alt="Book cover: Intentional Evolution by John Shindler and Robert Ricciardelli."
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="md:col-span-8">
                <p className="eyebrow mb-4">RECOMMENDED READING</p>
                <h3
                  className="h3 text-slate-blue mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <em>
                    Intentional Evolution: Awaken Your Inner Leader Consciousness and
                    Actualize Your Limitless Potential
                  </em>
                </h3>
                <p className="body-sm italic text-slate-60 mb-6">
                  John Shindler, PhD and Robert Ricciardelli
                </p>
                <p className="body text-slate-80 mb-8">
                  This book is for everyone — especially those ready for growth and inner
                  harmony. It speaks to individuals who feel called to evolve, to move
                  forward, and to become more of who they were meant to be. It guides readers
                  through liberating shifts in consciousness, helping them unpack and activate
                  their inner potential, quiet mental noise, and clarify life purpose.
                </p>
                <Link
                  href="https://www.amazon.com/dp/9798294608217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-sm text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
                >
                  View on Amazon →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 6: Additional Resources ──────────────────────────────── */}
      <section className="bg-blue-tint py-24">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <Eyebrow centered>ADDITIONAL RESOURCES</Eyebrow>
            <h3
              className="h3 text-slate-blue mt-2 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tools, frameworks, and practices to support your developmental journey.
            </h3>
            <p className="body-lg italic text-slate-60">Coming soon.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 7: Contact & Inquiries ───────────────────────────────── */}
      <section className="bg-cream py-24" id="contact">
        <div className="max-w-[720px] mx-auto px-4 md:px-8">
          <ScrollReveal>
            <Eyebrow centered>CONTACT &amp; INQUIRIES</Eyebrow>
            <h2
              className="h2 text-slate-blue text-center mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get in touch.
            </h2>
            <p className="body text-slate-80 text-center mb-10 max-w-[580px] mx-auto">
              For questions about our offerings — or for affiliate, marketing, and
              collaborative inquiries — please reach out using the form below.
            </p>
          </ScrollReveal>
          {/* Inline contact form — routes to /contact for simplicity, or embed */}
          <ScrollReveal delay={100}>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-slate-blue text-cream font-body font-medium text-base tracking-wide px-8 py-4 transition-colors duration-[250ms] hover:bg-slate-blue-2 relative group"
              >
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-[250ms] group-hover:w-full" />
                Go to contact form
              </Link>
              <p className="body-sm text-slate-60 mt-6">
                {/* TODO: Replace with confirmed email before launch (PRD Appendix B) */}
                info@instituteconscious.org
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
