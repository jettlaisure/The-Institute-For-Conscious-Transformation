import Image from "next/image";
import Link from "next/link";

type LogoVariant = "header-desktop" | "header-mobile" | "footer";

interface LogoProps {
  variant?: LogoVariant;
  scrolled?: boolean;
}

export default function Logo({ variant = "header-desktop", scrolled }: LogoProps) {
  if (variant === "header-mobile") {
    return (
      <Link href="/" aria-label="Institute for Conscious Transformation — Home">
        <Image
          src="/logos/icon-mark-option-1.png"
          alt="Institute for Conscious Transformation"
          width={40}
          height={40}
          className="object-contain"
          style={{ mixBlendMode: "multiply" }}
          priority
        />
      </Link>
    );
  }

  if (variant === "footer") {
    return (
      <div className="flex flex-col items-end gap-1">
        <p
          className="text-cream text-right leading-snug font-medium"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            letterSpacing: "0.01em",
          }}
        >
          Institute <em>for</em> Conscious<br />Transformation
        </p>
        <p
          className="text-gold text-right"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Evolve · Heal · Thrive
        </p>
      </div>
    );
  }

  // header-desktop: icon mark PNG + HTML text wordmark
  const textColor = scrolled ? "text-slate-blue" : "text-white";

  return (
    <Link
      href="/"
      aria-label="Institute for Conscious Transformation — Home"
      className="flex items-center gap-3"
    >
      <Image
        src="/logos/icon-mark-option-1.png"
        alt=""
        width={44}
        height={44}
        className="object-contain flex-shrink-0"
        style={{ mixBlendMode: "multiply" }}
        priority
      />
      <span
        className={`hidden sm:block font-medium leading-tight transition-colors duration-300 ${textColor}`}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.875rem",
          letterSpacing: "0.01em",
        }}
      >
        Institute <em>for</em> Conscious Transformation
      </span>
    </Link>
  );
}
