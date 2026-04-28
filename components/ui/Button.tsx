import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost-white" | "ghost-gold";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidthMobile?: boolean;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<ButtonVariant, string> = {
  primary:
    "inline-block bg-slate-blue text-cream font-body font-medium text-base tracking-wide px-8 py-4 transition-colors duration-[250ms] ease-out hover:bg-slate-blue-2 relative group",
  secondary:
    "inline-block border border-slate-blue text-slate-blue font-body font-medium text-base tracking-wide px-8 py-4 transition-colors duration-[250ms] ease-out hover:bg-slate-blue hover:text-cream",
  "ghost-white":
    "inline-block border border-white text-white font-body font-medium text-base tracking-wide px-8 py-4 transition-colors duration-[250ms] ease-out hover:bg-white hover:text-slate-blue",
  "ghost-gold":
    "inline-block border border-gold text-cream font-body font-medium text-base tracking-wide px-8 py-4 transition-colors duration-[250ms] ease-out hover:bg-gold hover:text-slate-blue",
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled,
  fullWidthMobile,
  children,
  className = "",
}: ButtonProps) {
  const base = `${styles[variant]} ${fullWidthMobile ? "w-full sm:w-auto text-center" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {variant === "primary" && (
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-[250ms] ease-out group-hover:w-full" />
        )}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {variant === "primary" && (
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-[250ms] ease-out group-hover:w-full" />
      )}
      {children}
    </button>
  );
}
