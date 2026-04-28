interface EyebrowProps {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export default function Eyebrow({ children, centered, className = "" }: EyebrowProps) {
  return (
    <p className={`eyebrow mb-4 ${centered ? "text-center" : ""} ${className}`}>
      {children}
    </p>
  );
}
