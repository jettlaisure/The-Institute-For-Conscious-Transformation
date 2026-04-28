"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/common/Logo";
import MobileMenu from "@/components/layout/MobileMenu";

const navLinks = [
  { label: "The Institute", href: "/about-the-institute" },
  { label: "Founder", href: "/about-the-founder" },
  { label: "Programs", href: "/programs" },
  { label: "The Book", href: "/book" },
  { label: "Community", href: "/community" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 h-20 md:h-20 h-16
          transition-all duration-300
          ${scrolled
            ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_rgba(31,46,61,0.08)]"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-[1200px] mx-auto px-8 md:px-8 px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="hidden md:block">
            <Logo variant="header-desktop" />
          </div>
          <div className="md:hidden">
            <Logo variant="header-mobile" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  font-body font-medium text-base text-slate-80 relative pb-1
                  transition-colors duration-[250ms] hover:text-slate-blue
                  after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-gold
                  after:transition-all after:duration-[250ms]
                  ${pathname === link.href
                    ? "text-slate-blue after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact button (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`
                hidden md:inline-block border font-body font-medium text-sm tracking-wide px-5 py-2.5
                transition-colors duration-[250ms]
                ${scrolled || pathname !== "/"
                  ? "border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-cream"
                  : "border-white text-white hover:bg-white hover:text-slate-blue"
                }
              `}
            >
              Contact
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col gap-[5px] p-2"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-6 h-[1.5px] ${scrolled || pathname !== "/" ? "bg-slate-blue" : "bg-white"}`}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
