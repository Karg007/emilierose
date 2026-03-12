"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterProps = {
  text: string;
  durationMs?: number;
};

export default function Typewriter({ text, durationMs = 3000 }: TypewriterProps) {
  const stepMs = useMemo(() => {
    const len = Math.max(1, text.length);
    return Math.max(20, Math.round(durationMs / len));
  }, [durationMs, text.length]);

  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);

    const interval = window.setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        window.clearInterval(interval);
        setDone(true);
      }
    }, stepMs);

    return () => window.clearInterval(interval);
  }, [text, stepMs]);

  return (
    <span className="tw">
      {displayed}
      <span className={`cursor ${done ? "blink" : ""}`} />

      <style jsx>{`
        .tw {
          display: inline-flex;
          align-items: center;
        
        }

        .cursor {
          width: 1px;
          height: calc(1.15em + 15px);
          margin-left: 50px;
          background: currentColor;
          transform: translateY(0.02em);
          opacity: ${done ? 1 : 0};
        }

        .blink {
          animation: blink 1.9s infinite;
        }

        @keyframes blink {
          0% { opacity: 1; }
          45% { opacity: 1; }
          55% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
