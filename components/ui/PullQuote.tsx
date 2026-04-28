interface PullQuoteProps {
  quote: string;
  attribution?: string;
  body?: string;
  eyebrow?: string;
}

export default function PullQuote({ quote, attribution, body, eyebrow }: PullQuoteProps) {
  return (
    <div className="text-center max-w-[800px] mx-auto">
      {eyebrow && (
        <p className="eyebrow mb-8">{eyebrow}</p>
      )}
      <blockquote
        className="display-2 italic text-slate-blue"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {quote}
      </blockquote>
      {attribution && (
        <p className="body-sm italic text-slate-60 mt-6">{attribution}</p>
      )}
      {body && (
        <p className="body-lg text-slate-80 mt-8 max-w-[680px] mx-auto">{body}</p>
      )}
    </div>
  );
}
