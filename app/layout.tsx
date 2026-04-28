import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Institute for Conscious Transformation — Evolve, Heal, Thrive",
  description:
    "A grounded, integrative pathway through life's most pivotal transitions. Bridging developmental psychology, somatic intelligence, and conscious evolution.",
  openGraph: {
    title: "Institute for Conscious Transformation — Evolve, Heal, Thrive",
    description:
      "A grounded, integrative pathway through life's most pivotal transitions. Bridging developmental psychology, somatic intelligence, and conscious evolution.",
    images: [{ url: "/og/og-home.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${ebGaramond.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream text-slate-80">
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
