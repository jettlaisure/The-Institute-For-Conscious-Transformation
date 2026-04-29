"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import InterestListModal from "@/components/forms/InterestListModal";

export default function ProgramsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
      <section
        className="relative w-full flex items-center justify-center text-center"
        style={{ height: "70vh", minHeight: "480px" }}
      >
        <Image
          src="/images/spiral-staircase-vatican.jpeg"
          alt="A descending bronze and stone spiral staircase."
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
              PROGRAMS &amp; OFFERINGS
            </Eyebrow>
            <h1
              className="display-2 text-white max-w-[760px] mt-2 mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Programs for conscious development and identity evolution.
            </h1>
            <p className="body-lg text-white/90 max-w-[720px] mx-auto mb-4">
              Guided pathways that integrate psychology, somatic intelligence, and
              awareness-based practice to support deep, lasting transformation.
            </p>
            <p className="body italic text-white/80 max-w-[680px] mx-auto">
              Each program is designed as a developmental journey — structured, experiential,
              and grounded in the architecture of human growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Introduction ───────────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="reading-col px-4 md:px-8">
          <ScrollReveal>
            <p className="body-lg text-slate-80">
              The Institute for Conscious Transformation supports individuals moving through
              profound psychological, emotional, and somatic shifts following relationship
              endings and other life-altering transitions. Our offerings provide a grounded,
              developmentally informed pathway for understanding patterns, regulating the
              nervous system, integrating shadow and protective parts, and embodying a more
              coherent, self-authored, and eventually self-transforming identity. Each program
              is part of a larger developmental ecosystem that helps individuals move from
              fragmentation into clarity, coherence, and inner wholeness.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 3: Identity Repatterning Pilot Study ─────────────────── */}
      <section className="bg-blue-tint py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Content left */}
            <ScrollReveal className="md:col-span-7">
              <Eyebrow style={{ color: "#C9A86A" } as React.CSSProperties}>
                CURRENT PROGRAM · LIMITED ENROLLMENT
              </Eyebrow>
              <h2
                className="h2 text-slate-blue mt-2 mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Identity Repatterning Pilot Study
              </h2>
              <p className="body-lg italic text-slate-80 mb-6">
                A 6-week course — the Institute&#39;s first flagship program.
              </p>
              <p className="body text-slate-80 mb-6">
                This pilot study is a structured exploration of identity reorganization after
                major relationship endings. It is designed for individuals navigating
                destabilization, grief, complexity, and the emergence of a new self.
              </p>
              <h4
                className="h4 text-slate-blue mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Participants explore:
              </h4>
              <ul className="bullet-list mb-6">
                {[
                  "How identity reorganizes across multiple developmental stages, including post-self-authored capacities",
                  "Nervous system regulation during rupture",
                  "Attachment activation and emotional loops",
                  "Somatic grounding and emotional digestion",
                  "Shadow and parts integration",
                  "The formation of a more coherent, self-authored, and eventually self-transforming identity",
                ].map((item) => (
                  <li key={item} className="body text-slate-80">{item}</li>
                ))}
              </ul>
              <p className="body text-slate-80 mb-8">
                This pilot is both a program and a research-informed study, helping refine
                the developmental frameworks that will shape future Institute offerings.
              </p>
              <Button variant="primary" href="/contact?topic=pilot-study">
                Inquire about enrollment
              </Button>
            </ScrollReveal>

            {/* Image right */}
            <ScrollReveal className="md:col-span-5" delay={150}>
              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/meditation-circle-window.jpeg"
                  alt="A small group sitting in meditation by a large window overlooking a river."
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 4: Somatic, Cognitive & Emotional Integration ────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Image left */}
            <ScrollReveal className="md:col-span-5">
              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/figure-mountain-cliff.jpeg"
                  alt="A figure standing on a mountain cliff at sunrise above misty valleys."
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Content right */}
            <ScrollReveal className="md:col-span-7" delay={150}>
              <Eyebrow>ONGOING OFFERING</Eyebrow>
              <h2
                className="h2 text-slate-blue mt-2 mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Somatic, Cognitive &amp; Emotional Integration Practices
              </h2>
              <p className="body-lg italic text-slate-80 mb-6">
                Tools for stabilizing the inner world and supporting developmental evolution.
              </p>
              <p className="body text-slate-80 mb-6">
                This offering provides a suite of integrative practices that help individuals:
              </p>
              <ul className="bullet-list mb-6">
                {[
                  "Regulate their nervous systems",
                  "Digest emotional intensity",
                  "Shift cognitive patterns and limiting beliefs",
                  "Integrate protective parts and shadow",
                  "Cultivate grounded presence and somatic coherence",
                  "Build the inner capacities required for later-stage development",
                ].map((item) => (
                  <li key={item} className="body text-slate-80">{item}</li>
                ))}
              </ul>
              <p className="body text-slate-80 mb-8">
                These practices bridge the gap between insight and embodiment — helping
                individuals live the work in real time.
              </p>
              <Link
                href="/contact?topic=practices"
                className="body text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
              >
                Get in touch about practices →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 5: Foundations Program (coming soon) ─────────────────── */}
      <section className="bg-blue-tint py-24">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <Eyebrow centered style={{ color: "#C9A86A" } as React.CSSProperties}>
              COMING SOON · CORE PROGRAM
            </Eyebrow>
            <h2
              className="h2 text-slate-blue mt-2 mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ending with Awareness — Foundations Program
            </h2>
            <p className="body text-slate-80 mb-10 text-left">
              This program introduces the core developmental, somatic, and psychological
              frameworks that shape all Institute offerings. Grounded in the book{" "}
              <em>Ending with Awareness</em>, it offers a developmental lens on how identity
              reorganizes during rupture, transition, and the dissolution of old
              meaning-making structures. Participants learn to understand the anatomy of
              transformation, recognize patterns activated by endings, and begin rebuilding
              coherence and self-trust as they move toward a more integrated, self-authored
              identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" onClick={() => setModalOpen(true)}>
                Join the Foundations interest list
              </Button>
              <Button variant="secondary" href="/book">
                Read about the book
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 6: Closing band ───────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="text-center px-4">
          <ScrollReveal>
            <Link
              href="/contact?topic=programs"
              className="body text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
            >
              Have a question about programs? Get in touch →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <InterestListModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        origin="programs"
      />
    </>
  );
}
