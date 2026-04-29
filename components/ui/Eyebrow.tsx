import type { CSSProperties } from "react";

interface EyebrowProps {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function Eyebrow({ children, centered, className = "", style }: EyebrowProps) {
  return (
    <p className={`eyebrow mb-4 ${centered ? "text-center" : ""} ${className}`} style={style}>
      {children}
    </p>
  );
}
