"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import NewsletterSignup from "@/components/forms/NewsletterSignup";
import InterestListModal from "@/components/forms/InterestListModal";

export default function BookPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
      <section
        className="relative w-full flex items-center justify-center text-center"
        style={{ height: "80vh", minHeight: "560px" }}
      >
        <Image
          src="/images/book-page-rays.png"
          alt="An open book with golden light radiating from its pages."
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(31,46,61,0.25)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 px-4 md:px-8 pt-20">
          <ScrollReveal>
            <Eyebrow style={{ color: "#C9A86A" } as React.CSSProperties}>
              FORTHCOMING BOOK
            </Eyebrow>
            <h1
              className="display-1 text-white max-w-[720px] mx-auto mt-2 mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ending with <em>Awareness</em>
            </h1>
            <p className="body-lg text-white/90 max-w-[640px] mx-auto mb-10">
              A book for anyone navigating endings, identity shifts, and the emergence of
              their next self.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button variant="ghost-white" onClick={() => setModalOpen(true)}>
                Get updates
              </Button>
              <Button variant="ghost-white" href="/contact?topic=speaking">
                Speaking &amp; collaboration
              </Button>
              <Button variant="ghost-white" href="/contact?topic=affiliate">
                Affiliate partnerships
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Introduction ───────────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="reading-col px-4 md:px-8">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="body-lg text-slate-80">
                <em>Ending with Awareness</em> is the first book in the Institute for
                Conscious Transformation&#39;s foundational series — the starting point for
                anyone moving through the emotional and psychological upheaval of a
                relationship ending.
              </p>
              <p className="body text-slate-80">
                This book reframes endings as initiations — not as loss, but as the threshold
                of identity evolution. It reveals why rupture feels like collapse, how
                developmental stages shape the way you love, and how self-knowledge becomes
                the doorway to emotional integrity, relational clarity, and conscious future
                love.
              </p>
              <p className="body text-slate-80">
                It&#39;s not a book about &#34;getting over it.&#34; It&#39;s a book about
                becoming the person you were always meant to be.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 3: What you'll learn ─────────────────────────────────── */}
      <section className="bg-blue-tint py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Image left */}
            <ScrollReveal className="md:col-span-5">
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/letter-rays.jpeg"
                  alt="A blue envelope opening with golden light radiating from within."
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Content right */}
            <ScrollReveal className="md:col-span-7" delay={100}>
              <Eyebrow>WHAT YOU&#39;LL LEARN</Eyebrow>
              <h2
                className="h2 text-slate-blue mt-2 mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Inside the book.
              </h2>
              <ul className="bullet-list mb-8">
                {[
                  "Why endings destabilize your sense of self — and how to find coherence again",
                  "How identity reorganizes across developmental stages",
                  "How your nervous system shapes your reactions to loss",
                  "Why certain patterns repeat — and how to break them consciously",
                  "How to navigate endings with clarity instead of collapse",
                  "How to prepare for future love from a more evolved self",
                ].map((item) => (
                  <li key={item} className="body-lg text-slate-80 mb-3">{item}</li>
                ))}
              </ul>
              <p className="body italic text-slate-80">
                A blend of developmental psychology, somatic awareness, and mindfulness
                practices helps you understand yourself at the deepest level — not as a set
                of patterns to fix, but as a consciousness unfolding.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 4: Who it's for ───────────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="reading-col px-4 md:px-8">
          <ScrollReveal>
            <Eyebrow centered>WHO IT&#39;S FOR</Eyebrow>
            <h2
              className="h2 text-slate-blue text-center mb-10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A book for anyone at a relational threshold.
            </h2>
            <div className="space-y-6">
              <p className="body text-slate-80">
                This book is for anyone standing at a relational threshold — ending a
                relationship, healing from one, or trying to understand why certain patterns
                keep repeating. It&#39;s written for both women and men, and for anyone who
                wants to grow through transition rather than be defined by it.
              </p>
              <p className="body text-slate-80">
                It is also a resource for coaches, therapists, and practitioners supporting
                clients through relational transformation — offering a developmental lens
                that integrates psychology, somatic intelligence, and awareness-based
                practice.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 5: Publication status & interest list ─────────────────── */}
      <section className="bg-blue-tint py-24">
        <div className="max-w-[600px] mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <Eyebrow centered>PUBLICATION STATUS</Eyebrow>
            <h2
              className="h2 text-slate-blue mt-2 mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <em>Ending with Awareness</em> is in publication.
            </h2>
            <p className="body-lg text-slate-80 mb-10">
              If you&#39;d like updates, early access opportunities, or to explore speaking
              engagements or affiliate partnerships, we&#39;d love to connect.
            </p>
            <NewsletterSignup variant="hero" />
            <div className="flex flex-wrap justify-center gap-3 mt-8 items-center">
              <Link
                href="/contact?topic=speaking"
                className="body-sm text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
              >
                Request speaking info
              </Link>
              <span className="text-gold" aria-hidden="true">·</span>
              <Link
                href="/contact?topic=affiliate"
                className="body-sm text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
              >
                Affiliate inquiry
              </Link>
              <span className="text-gold" aria-hidden="true">·</span>
              <Link
                href="/contact"
                className="body-sm text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
              >
                General inquiries
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 6: Atmospheric closing image ─────────────────────────── */}
      <div className="w-full overflow-hidden" style={{ height: "380px" }}>
        <Image
          src="/images/golden-particles-waves.jpeg"
          alt="Golden particles flowing in waves over a blue surface."
          width={1920}
          height={380}
          className="w-full h-full object-cover"
        />
      </div>

      <InterestListModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        origin="book"
      />
    </>
  );
}
