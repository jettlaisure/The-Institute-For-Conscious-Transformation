"use client";

import { useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "The Institute", href: "/about-the-institute" },
  { label: "Founder", href: "/about-the-founder" },
  { label: "Programs", href: "/programs" },
  { label: "The Book", href: "/book" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  // Trap focus and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={`
        fixed inset-0 z-50 bg-slate-blue flex flex-col items-center justify-center
        transition-opacity duration-[250ms]
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-6 right-6 text-cream p-2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="4" y1="4" x2="20" y2="20" />
          <line x1="20" y1="4" x2="4" y2="20" />
        </svg>
      </button>

      {/* Wordmark */}
      <div className="mb-10 text-center">
        <Link href="/" onClick={onClose} aria-label="Institute for Conscious Transformation — Home">
          <span
            className="text-cream font-medium leading-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem" }}
          >
            Institute <em>for</em> Conscious Transformation
          </span>
        </Link>
      </div>

      {/* Nav links */}
      <nav>
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className={`
                  font-display text-4xl font-medium text-cream transition-colors duration-[250ms]
                  hover:text-gold
                  ${currentPath === link.href ? "text-gold" : ""}
                `}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
