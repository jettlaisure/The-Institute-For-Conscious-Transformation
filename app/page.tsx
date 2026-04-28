"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import PullQuote from "@/components/ui/PullQuote";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NewsletterSignup from "@/components/forms/NewsletterSignup";
import InterestListModal from "@/components/forms/InterestListModal";

const pillars = [
  {
    image: "/images/staircase-curve.png",
    alt: "A curved white staircase rising in a sunlit modern interior.",
    eyebrow: "THE INSTITUTE",
    title: "The architecture of transformation",
    body: "An integrative approach uniting developmental psychology, somatic intelligence, and contemplative wisdom.",
    href: "/about-the-institute",
  },
  {
    image: "/images/founder-svetlana-portrait.jpeg",
    alt: "Svetlana Bolotina, Founder, seated in her study with books behind her.",
    eyebrow: "THE FOUNDER",
    title: "Svetlana Bolotina",
    body: "Scholar-practitioner, Conscious Development Advisor, and PhD researcher exploring the architecture of identity.",
    href: "/about-the-founder",
  },
  {
    image: "/images/book-page-rays.png",
    alt: "An open book with golden light radiating from its pages.",
    eyebrow: "THE BOOK",
    title: "Ending with Awareness",
    body: "A guide to navigating endings, identity shifts, and the emergence of your next self. Forthcoming.",
    href: "/book",
  },
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
      <section className="relative w-full" style={{ height: "85vh", minHeight: "560px" }}>
        <Image
          src="/images/home-hero-light-water.jpeg"
          alt="A serene horizon where light meets water — symbolizing the threshold of conscious development."
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(31,46,61,0.18), rgba(31,46,61,0.04))",
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 text-center">
          <ScrollReveal>
            <p className="eyebrow mb-6" style={{ color: "#C9A86A" }}>
              INSTITUTE FOR CONSCIOUS TRANSFORMATION
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1
              className="display-1 text-white max-w-[800px] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Where consciousness meets development.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="body-lg text-white/90 max-w-[640px] mb-10">
              A grounded, integrative pathway through life&#39;s most pivotal
              transitions — bridging developmental psychology, somatic
              intelligence, and conscious evolution.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/about-the-institute">
                Explore the Institute
              </Button>
              <Button variant="ghost-white" href="/about-the-founder">
                Meet the Founder
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
          style={{ animationDuration: "2.5s" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="#C9A86A"
            strokeWidth="1.5"
          >
            <polyline points="4 7 10 13 16 7" />
          </svg>
        </div>
      </section>

      {/* ── Section 2: Introduction ───────────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <ScrollReveal className="md:col-span-5">
              <Eyebrow>OUR WORK</Eyebrow>
              <h2
                className="h2 text-slate-blue"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A new paradigm of human development.
              </h2>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-7" delay={100}>
              <p className="body-lg text-slate-80 mb-6">
                The Institute for Conscious Transformation exists to guide
                individuals and leaders into the deeper reaches of their human
                potential — cultivating psychological wellbeing, emotional
                regulation, somatic coherence, and a direct understanding of
                their true nature.
              </p>
              <p className="body text-slate-80 mb-8">
                In contemporary society, most people plateau at conventional
                levels of development, unaware that many further expansions of
                consciousness remain dormant yet fully accessible through
                intentional, sustained, and skillfully guided practice.
              </p>
              <Link
                href="/about-the-institute"
                className="body text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
              >
                Read about the Institute →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 3: Three pillars ──────────────────────────────────────── */}
      <section className="bg-blue-tint py-24">
        <div className="max-w-[1080px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.href} delay={i * 100}>
                <Card interactive className="flex flex-col h-full p-0 overflow-hidden">
                  <div className="relative w-full" style={{ aspectRatio: "3/2" }}>
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <Eyebrow>{pillar.eyebrow}</Eyebrow>
                    <h3
                      className="h3 text-slate-blue mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="body text-slate-80 mb-6 flex-1">{pillar.body}</p>
                    <Link
                      href={pillar.href}
                      className="body-sm text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
                    >
                      Learn more →
                    </Link>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Featured book teaser ──────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            <ScrollReveal className="md:col-span-5">
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/book-page-rays.png"
                  alt="An open book with golden light radiating from its pages."
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-7" delay={100}>
              <Eyebrow>FORTHCOMING BOOK</Eyebrow>
              <h2
                className="h1 text-slate-blue mb-4 italic"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ending with Awareness
              </h2>
              <p className="body-lg italic text-slate-80 mb-6">
                A book for anyone navigating endings, identity shifts, and the
                emergence of their next self.
              </p>
              <p className="body text-slate-80 mb-8">
                <em>Ending with Awareness</em> is the foundational book of the
                Institute for Conscious Transformation — the starting point for
                anyone moving through the emotional and psychological upheaval of
                a relationship ending. It reframes endings as initiations: not as
                loss, but as the threshold of identity evolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" onClick={() => setModalOpen(true)}>
                  Join the interest list
                </Button>
                <Button variant="secondary" href="/book">
                  Read more about the book
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 5: Pull quote ─────────────────────────────────────────── */}
      <section className="bg-blue-tint py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <ScrollReveal>
            <PullQuote
              eyebrow="THE HEART OF OUR WORK"
              quote="Human beings are capable of far more depth, clarity, and wholeness than they realize."
              attribution="— Svetlana Bolotina, Founder"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 6: Newsletter ─────────────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-[560px] mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h2
              className="h2 text-slate-blue mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Stay connected.
            </h2>
            <p className="body text-slate-80 mb-8">
              Receive reflections on conscious development, occasional updates on
              programs, and early access to <em>Ending with Awareness</em>.
            </p>
            <NewsletterSignup variant="hero" />
          </ScrollReveal>
        </div>
      </section>

      <InterestListModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        origin="home"
      />
    </>
  );
}
