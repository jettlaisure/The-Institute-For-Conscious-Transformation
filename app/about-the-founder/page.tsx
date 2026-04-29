import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Svetlana Bolotina — Founder, Conscious Development Advisor",
  description:
    "Founder of the Institute for Conscious Transformation, scholar-practitioner, and author of the forthcoming Ending with Awareness.",
  openGraph: {
    title: "Svetlana Bolotina — Founder, Conscious Development Advisor",
    description:
      "Founder of the Institute for Conscious Transformation, scholar-practitioner, and author of the forthcoming Ending with Awareness.",
    images: [{ url: "/og/og-founder.jpg", width: 1200, height: 630 }],
  },
};

const ctaCards = [
  {
    eyebrow: "WORK TOGETHER",
    title: "Conscious Development Advisory",
    body: "For individuals navigating identity transitions or post-conventional development.",
    href: "/contact?topic=advisory",
  },
  {
    eyebrow: "INSTITUTE PROGRAMS",
    title: "Explore offerings",
    body: "Programs and integrative practices for ongoing development.",
    href: "/programs",
  },
  {
    eyebrow: "SPEAKING & COLLABORATION",
    title: "Speaking inquiries",
    body: "For conferences, podcasts, retreats, and research collaboration.",
    href: "/contact?topic=speaking",
  },
];

export default function AboutFounderPage() {
  return (
    <>
      {/* ── Section 1: Hero (split layout) ───────────────────────────────── */}
      <section className="bg-cream pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left: text */}
            <ScrollReveal className="md:col-span-6">
              <Eyebrow>THE FOUNDER</Eyebrow>
              <h1
                className="display-2 text-slate-blue mt-2 mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A developmental approach to identity, consciousness, and human evolution.
              </h1>
              <p className="body-lg text-slate-80 mb-8">
                Integrating developmental psychology, neuroscience, somatic intelligence,
                and awareness-based practice to help individuals and practitioners evolve
                with clarity, integrity, and depth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href="#approach">
                  Read Svetlana&#39;s approach
                </Button>
                <Button variant="secondary" href="/contact?topic=speaking">
                  Speaking &amp; collaboration
                </Button>
              </div>
            </ScrollReveal>

            {/* Right: portrait */}
            <ScrollReveal className="md:col-span-5 md:col-start-8" delay={150}>
              <div className="relative" style={{ aspectRatio: "4/5" }}>
                {/* Gold hairline frame */}
                <div
                  className="absolute inset-0 border border-gold"
                  style={{ transform: "translate(4px, 4px)" }}
                  aria-hidden="true"
                />
                <Image
                  src="/images/founder-svetlana-portrait.jpeg"
                  alt="Svetlana Bolotina, Founder, seated in her study with books behind her."
                  fill
                  className="object-cover relative z-10"
                  priority
                />
              </div>
              <p className="body-sm italic text-slate-60 mt-3">
                <em>Svetlana Bolotina — Founder, Author, Conscious Development Advisor.</em>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 2: Micro-bio ──────────────────────────────────────────── */}
      <section className="bg-blue-tint py-16">
        <div className="reading-col px-4 md:px-8">
          <ScrollReveal>
            <p className="body-lg text-slate-80">
              Svetlana is the founder of the Institute for Conscious Transformation, a
              developmental advisor, author, and PhD researcher exploring the architecture
              of identity, meaning-making, and post-conventional growth. Her work integrates
              developmental psychology, somatic intelligence, and awareness-based methods to
              guide people through the profound transitions that reshape who they are becoming.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 3: Long-form biography ───────────────────────────────── */}
      <section className="bg-cream py-24" id="approach">
        <div className="reading-col px-4 md:px-8">

          {/* Opening */}
          <ScrollReveal>
            <div className="space-y-6 mb-16">
              <p className="body text-slate-80">
                Svetlana Bolotina is the founder of the Institute for Conscious
                Transformation and a scholar-practitioner dedicated to understanding the
                deeper architecture of human potential. Her work bridges developmental
                psychology, somatic intelligence, identity evolution, and integrative
                transformation — offering a grounded, precise, and deeply human pathway
                through life&#39;s most pivotal transitions.
              </p>
              <p className="body text-slate-80">
                She is currently completing her PhD at the California Institute for Human
                Science, where her research focuses on human potential and post-conventional
                stages of development. Her work explores how people make meaning, how
                identity reorganizes during rupture and transition, and how individuals
                evolve toward greater coherence and wholeness.
              </p>
              <p className="body text-slate-80">
                Svetlana is also completing her certification in clinical hypnotherapy,
                specializing in the unconscious layers of identity — the beliefs, patterns,
                and protective structures that shape how individuals interpret their world
                and respond to their inner experience.
              </p>
            </div>
          </ScrollReveal>

          {/* A Conscious Development Advisor */}
          <ScrollReveal>
            <div className="mb-16">
              <Eyebrow className="mb-2">A NEW PARADIGM OF TRANSFORMATIVE SUPPORT</Eyebrow>
              <h2
                className="h3 text-slate-blue mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A Conscious Development Advisor
              </h2>
              <div className="space-y-6">
                <p className="body text-slate-80">
                  Svetlana does not identify as a coach or consultant. Her role as a{" "}
                  <em>Conscious Development Advisor</em> represents a more integrative
                  approach — one that brings together developmental psychology, somatic
                  awareness, cognitive science, and unconscious pattern work into a coherent,
                  personalized process.
                </p>
                <p className="body text-slate-80">She helps individuals:</p>
                <ul className="bullet-list pl-0">
                  {[
                    "understand their developmental stage and meaning-making structure",
                    "recognize how they interpret and assign meaning to their experiences",
                    "navigate identity shifts and transitions",
                    "integrate emotional, somatic, and cognitive patterns",
                    "work with unconscious identity structures",
                    "cultivate inner coherence and psychological wholeness",
                    "respond to complexity with clarity and grounded presence",
                  ].map((item) => (
                    <li key={item} className="body text-slate-80">{item}</li>
                  ))}
                </ul>
                <p className="body text-slate-80">
                  Her advisory work is reflective, relational, and attuned — helping people
                  access deeper layers of insight, stability, and self-knowledge.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* An Integrative Scholar-Practitioner */}
          <ScrollReveal>
            <div className="mb-16">
              <h2
                className="h3 text-slate-blue mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                An Integrative Scholar-Practitioner
              </h2>
              <div className="space-y-6">
                <p className="body text-slate-80">
                  Svetlana&#39;s work is grounded in Integral Theory and the Integral Life
                  Practice model — comprehensive frameworks for understanding how human
                  beings grow, evolve, and make meaning. She translates these models into
                  accessible, embodied practices that support transformation across all
                  dimensions of being: somatic, emotional, cognitive, relational, behavioral,
                  and existential.
                </p>
                <p className="body text-slate-80">
                  Her approach is both developmental and deeply human. She helps individuals
                  understand not only <em>what</em> they are experiencing, but <em>why</em>{" "}
                  — and how to move through complexity with clarity, coherence, and grounded
                  presence.
                </p>
                <p className="body text-slate-80">
                  Svetlana designs and facilitates integrative, experiential practices that
                  guide transformation across the whole human system. Her work draws from
                  developmental psychology, neuroscience and nervous system regulation,
                  somatic and embodiment practices, NLP and cognitive-emotional patterning,
                  attachment theory, narrative and identity reconstruction, shadow and parts
                  work, and mindfulness-based methods.
                </p>
                <p className="body text-slate-80">
                  Her facilitation is grounded, relational, and experiential — helping
                  individuals move from insight into embodiment, and from self-understanding
                  into meaningful change.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* A Life Lived Through Practice */}
          <ScrollReveal>
            <div className="mb-16">
              <h2
                className="h3 text-slate-blue mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A Life Lived Through Practice
              </h2>
              <div className="space-y-6">
                <p className="body text-slate-80">
                  Svetlana&#39;s authority comes not only from academic study, but from lived
                  experience. She has used every framework and practice she teaches in her own
                  evolution — through meaning-making crises, identity shifts, and complex
                  transitions.
                </p>
                <p className="body text-slate-80">
                  She teaches what she has lived. Her work is not conceptual — it is embodied.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* A Vision for a Global Community */}
          <ScrollReveal>
            <div>
              <h2
                className="h3 text-slate-blue mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A Vision for a Global Community of Transformation
              </h2>
              <div className="space-y-6">
                <p className="body text-slate-80">
                  Through the Institute for Conscious Transformation, Svetlana is building a
                  global community of:
                </p>
                <ul className="bullet-list pl-0">
                  {[
                    "individuals navigating endings and identity evolution",
                    "scholars studying development, psychology, and consciousness",
                    "coaches, therapists, and practitioners in the transformation space",
                  ].map((item) => (
                    <li key={item} className="body text-slate-80">{item}</li>
                  ))}
                </ul>
                <p className="body text-slate-80">
                  This community is a field for depth, inquiry, and shared evolution — a
                  place where people grow together, learn together, and support one another
                  through life&#39;s most meaningful transitions.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 4: Pull quote ─────────────────────────────────────────── */}
      <section className="bg-blue-tint py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center max-w-[800px] mx-auto">
              <Eyebrow centered>THE HEART OF HER WORK</Eyebrow>
              <blockquote
                className="display-2 italic text-slate-blue mt-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Human beings are capable of far more depth, clarity, and wholeness than they realize.
              </blockquote>
              <p className="body-lg text-slate-80 mt-8 max-w-[680px] mx-auto">
                Her mission is to help people access that potential — not by bypassing their
                pain, but by understanding it, integrating it, and allowing it to become the
                doorway into their most authentic, coherent, and liberated selves.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 5: Engagement CTA cards ──────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-[1080px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {ctaCards.map((card, i) => (
              <ScrollReveal key={card.href} delay={i * 100}>
                <Card interactive className="flex flex-col h-full">
                  <Eyebrow>{card.eyebrow}</Eyebrow>
                  <h3
                    className="h4 text-slate-blue mb-3"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem" }}
                  >
                    <em>{card.title}</em>
                  </h3>
                  <p className="body text-slate-80 mb-6 flex-1">{card.body}</p>
                  <Link
                    href={card.href}
                    className="body-sm text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
                  >
                    Get in touch →
                  </Link>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
