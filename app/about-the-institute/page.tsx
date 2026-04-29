import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About the Institute — Institute for Conscious Transformation",
  description:
    "Advancing human development through integrative science, somatic intelligence, and conscious evolution. Mission, values, and vision of the Institute for Conscious Transformation.",
  openGraph: {
    title: "About the Institute — Institute for Conscious Transformation",
    description:
      "Advancing human development through integrative science, somatic intelligence, and conscious evolution.",
    images: [{ url: "/og/og-institute.jpg", width: 1200, height: 630 }],
  },
};

const values = [
  {
    name: "Lifelong Growth and Development",
    desc: "Human development is continuous and multi-dimensional. Every person is capable of profound evolution.",
  },
  {
    name: "Radical Honesty and Inner Transparency",
    desc: "Transformation begins with truth — meeting the unseen and uncomfortable with humility and courage.",
  },
  {
    name: "Personal Responsibility and Sovereignty",
    desc: "Each individual is responsible for their thoughts, emotions, actions, and impact.",
  },
  {
    name: "Life as Practice",
    desc: "Insight becomes real only when lived — in relationships, work, conflict, creativity, and choice.",
  },
  {
    name: "Embodied Presence and Regulation",
    desc: "Grounded presence and emotional regulation are the foundations of conscious living.",
  },
  {
    name: "Compassionate Discipline",
    desc: "Sustainable growth requires both rigor and gentleness.",
  },
  {
    name: "Integration of Science and Wisdom",
    desc: "Transformation emerges from the union of empirical research and contemplative traditions.",
  },
  {
    name: "Humility and Openness to the Unknown",
    desc: "No matter how far one develops, there is always more to discover.",
  },
  {
    name: "Integrity in Action",
    desc: "Authenticity arises from coherence between knowing, speaking, and acting.",
  },
  {
    name: "Relational Responsibility and Conscious Connection",
    desc: "Transformation is relational; we honor our impact on others.",
  },
  {
    name: "Service as Natural Expression",
    desc: "As individuals grow, service emerges organically from inner alignment.",
  },
  {
    name: "Trust in Human Potential",
    desc: "We hold a fundamental belief in the vast, untapped capacities within every human being.",
  },
];

const visionItems = [
  {
    lede: "A World Transformed Through Inner Wholeness.",
    body: "We envision a world shaped by individuals and leaders who act from clarity, compassion, and grounded purpose.",
  },
  {
    lede: "Healing Fragmentation at Its Source.",
    body: "The fractures in society mirror the fractures within the human psyche. Our work supports the restoration of inner coherence.",
  },
  {
    lede: "Wholeness as Catalyst for Collective Transformation.",
    body: "When individuals reclaim their inner wholeness, they become stabilizing forces in families, organizations, and communities.",
  },
  {
    lede: "A New Paradigm of Human Development.",
    body: "Human development is lifelong and multi-dimensional — encompassing emotional maturity, somatic intelligence, relational skill, and expanded awareness.",
  },
  {
    lede: "A Global Community of Conscious Leaders.",
    body: "We aspire to cultivate leaders capable of holding multiple perspectives, bridging divides, and acting with integrity.",
  },
  {
    lede: "Wholeness as Our Natural State.",
    body: "Beneath all fragmentation, human beings are inherently whole. Our work helps people remember this truth as a lived experience.",
  },
];

export default function AboutInstitutePage() {
  return (
    <>
      {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
      <section
        className="relative w-full flex items-center"
        style={{ height: "70vh", minHeight: "480px" }}
      >
        <Image
          src="/images/staircase-curve.png"
          alt="A curved white staircase rising in a sunlit modern interior."
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(31,46,61,0.15)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 w-full pt-20">
          <ScrollReveal>
            <Eyebrow className="text-cream" style={{ color: "#C9A86A" } as React.CSSProperties}>
              THE INSTITUTE
            </Eyebrow>
            <h1
              className="display-2 text-white max-w-[760px] mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Architecture of Transformation — Where Identity Evolves Into Conscious Development.
            </h1>
            <p className="body-lg text-white/90 max-w-[640px] mt-6">
              The Institute for Conscious Transformation integrates developmental psychology,
              cognitive sciences, mindfulness, and embodied practice to cultivate inner
              coherence and authentic growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Mission ────────────────────────────────────────────── */}
      <section className="bg-cream py-24" id="mission">
        <div className="reading-col px-4 md:px-8">
          <ScrollReveal>
            <Eyebrow centered>MISSION</Eyebrow>
            <h2
              className="h2 text-slate-blue text-center mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Advancing human development through integrative science, somatic intelligence,
              and conscious evolution.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <p className="body-lg text-slate-80">
                The Institute for Conscious Transformation exists to guide individuals and
                leaders into the deeper reaches of their human potential — cultivating
                psychological wellbeing, emotional regulation, somatic coherence, and a
                direct understanding of their true nature.
              </p>
              <p className="body text-slate-80">
                In contemporary society, most people plateau at conventional levels of
                development, unaware that many further expansions of consciousness remain
                dormant yet fully accessible through intentional, sustained, and skillfully
                guided practice. Our work illuminates these higher possibilities and supports
                the unfolding of the profound capabilities inherent in every human being.
              </p>
              <p className="body text-slate-80">
                We integrate applied scientific research, psychology, neurophysiology, systems
                theory, and developmental science with the enduring wisdom of contemplative
                and spiritual traditions. This multi-theoretical, multi-practical approach
                allows us to address the whole human being — mind, body, and consciousness —
                while grounding transformation in both empirical rigor and lived experience.
              </p>
              <p className="body text-slate-80">
                The founders of the Institute actively embody these principles. Their ongoing
                commitment to inner work demonstrates that human potential is vast, dynamic,
                and largely untapped — and that our deepest nature is one of peace, clarity,
                and equanimity with ourselves, others, and the world.
              </p>
              <p className="body text-slate-80">
                We share this work not from ambition or obligation, but because it is the
                most natural expression of who we have become — and because when individuals
                awaken to their true nature, the world transforms with them.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 3: Atmospheric image break ───────────────────────────── */}
      <div className="w-full overflow-hidden" style={{ height: "480px" }}>
        <Image
          src="/images/water-ripples-gold.jpeg"
          alt="Gold and blue water ripples reflecting light."
          width={1920}
          height={480}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="body-sm italic text-slate-60 text-center mt-3 mb-0 px-4">
        The pattern repeats, and the pattern evolves.
      </p>

      {/* ── Section 4: Values ─────────────────────────────────────────────── */}
      <section className="bg-blue-tint py-24" id="values">
        <div className="max-w-[1080px] mx-auto px-4 md:px-8">
          <ScrollReveal>
            <Eyebrow centered>VALUES FRAMEWORK</Eyebrow>
            <h2
              className="h2 text-slate-blue text-center mb-16"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What we hold true.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-0 border-t border-slate-30">
            {values.map((value, i) => (
              <ScrollReveal
                key={value.name}
                delay={Math.floor(i / 2) * 80}
                className={`p-8 border-b border-slate-30 ${i % 2 === 0 ? "md:border-r" : ""}`}
              >
                <h4
                  className="h4 text-slate-blue mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {value.name}
                </h4>
                <p className="body text-slate-80">{value.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Vision ─────────────────────────────────────────────── */}
      <section className="bg-cream py-24" id="vision">
        <div className="reading-col px-4 md:px-8">
          <ScrollReveal>
            <Eyebrow centered>VISION</Eyebrow>
            <h2
              className="h2 text-slate-blue text-center mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A world transformed through inner wholeness.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-8">
              {visionItems.map((item) => (
                <p key={item.lede} className="body text-slate-80">
                  <strong className="text-slate-blue font-semibold">{item.lede}</strong>{" "}
                  {item.body}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 6: Closing CTA ────────────────────────────────────────── */}
      <section className="bg-blue-tint py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h2
              className="h2 text-slate-blue mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Continue exploring.
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
              {[
                { label: "Meet the Founder", href: "/about-the-founder" },
                { label: "Explore Programs", href: "/programs" },
                { label: "Read about the Book", href: "/book" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="body text-slate-blue underline decoration-gold decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-[250ms]"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
