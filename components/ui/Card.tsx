interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export default function Card({ children, className = "", interactive }: CardProps) {
  return (
    <div
      className={`
        bg-white p-8 md:p-8 p-6
        shadow-[0_1px_2px_rgba(31,46,61,0.04),0_4px_12px_rgba(31,46,61,0.04)]
        ${interactive ? "transition-shadow duration-[250ms] hover:shadow-[0_2px_4px_rgba(31,46,61,0.08),0_8px_24px_rgba(31,46,61,0.08)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
