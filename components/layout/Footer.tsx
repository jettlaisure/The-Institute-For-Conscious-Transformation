import Link from "next/link";
import Logo from "@/components/common/Logo";
import NewsletterSignup from "@/components/forms/NewsletterSignup";

const col1 = [
  { label: "About", href: "/about-the-institute" },
  { label: "Founder", href: "/about-the-founder" },
  { label: "Values", href: "/about-the-institute#values" },
  { label: "Vision", href: "/about-the-institute#vision" },
];

const col2 = [
  { label: "Programs", href: "/programs" },
  { label: "The Book", href: "/book" },
  { label: "Community", href: "/community" },
  { label: "Affiliates", href: "/community#affiliates" },
];

const col3 = [
  { label: "info@instituteconscious.org", href: "mailto:info@instituteconscious.org" },
  { label: "Speaking inquiries", href: "/contact?topic=speaking" },
  { label: "Press", href: "/contact?topic=press" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-blue text-cream">
      {/* Newsletter */}
      <div className="max-w-[720px] mx-auto px-4 py-16 text-center">
        <p className="eyebrow mb-4">STAY CONNECTED</p>
        <h3
          className="h3 text-cream mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Join the Institute mailing list.
        </h3>
        <p className="body text-cream/80 max-w-[560px] mx-auto mb-8">
          Receive reflections on conscious development, occasional updates on programs,
          and early access to <em>Ending with Awareness</em>.
        </p>
        <NewsletterSignup variant="footer" />
      </div>

      {/* Hairline */}
      <div className="border-t border-white/10" />

      {/* Columns */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-8 px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <p className="eyebrow mb-6">THE INSTITUTE</p>
            <ul className="flex flex-col gap-3">
              {col1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-sm text-cream/70 hover:text-cream transition-colors duration-[250ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <p className="eyebrow mb-6">ENGAGE</p>
            <ul className="flex flex-col gap-3">
              {col2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-sm text-cream/70 hover:text-cream transition-colors duration-[250ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <p className="eyebrow mb-6">CONTACT</p>
            <ul className="flex flex-col gap-3">
              {col3.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-sm text-cream/70 hover:text-cream transition-colors duration-[250ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Wordmark */}
          <div className="flex flex-col items-center md:items-end justify-start">
            <Logo variant="footer" />
          </div>
        </div>
      </div>

      {/* Hairline */}
      <div className="border-t border-white/20" />

      {/* Bottom row */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-8 px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="body-sm text-cream/60">
          © 2026 Institute for Conscious Transformation. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="body-sm text-cream/60 hover:text-cream transition-colors duration-[250ms]">
            Privacy
          </Link>
          <Link href="/terms" className="body-sm text-cream/60 hover:text-cream transition-colors duration-[250ms]">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
