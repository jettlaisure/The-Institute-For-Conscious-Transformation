import Image from "next/image";
import Link from "next/link";

type LogoVariant = "header-desktop" | "header-mobile" | "footer";

interface LogoProps {
  variant?: LogoVariant;
}

export default function Logo({ variant = "header-desktop" }: LogoProps) {
  if (variant === "header-mobile") {
    return (
      <Link href="/" aria-label="Institute for Conscious Transformation — Home">
        <Image
          src="/logos/icon-mark-option-1.png"
          alt="Institute for Conscious Transformation"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
      </Link>
    );
  }

  if (variant === "footer") {
    return (
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/logos/wordmark-with-tagline.png"
          alt="Institute for Conscious Transformation — Evolve · Heal · Thrive"
          width={220}
          height={80}
          className="object-contain brightness-0 invert"
        />
      </div>
    );
  }

  // header-desktop: icon mark + horizontal wordmark
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
        priority
      />
      <Image
        src="/logos/wordmark-horizontal.png"
        alt="Institute for Conscious Transformation"
        width={200}
        height={32}
        className="object-contain hidden sm:block"
      />
    </Link>
  );
}
