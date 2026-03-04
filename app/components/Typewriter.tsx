"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterProps = {
  text: string;
  /** Total duration for typing animation (ms). Defaults to ~6000ms. */
  durationMs?: number;
  className?: string;
};

export default function Typewriter({ text, durationMs = 6000, className }: TypewriterProps) {
  const stepMs = useMemo(() => {
    const len = Math.max(1, text.length);
    return Math.max(20, Math.round(durationMs / len));
  }, [durationMs, text.length]);

  const [displayed, setDisplayed] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);

    const interval = window.setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i += 1;
      if (i >= text.length) {
        window.clearInterval(interval);
        setDone(true);
      }
    }, stepMs);

    return () => window.clearInterval(interval);
  }, [text, stepMs]);

  return (
    <span className={`tw ${className ?? ""}`}>
      {displayed}
      <span className={`cursor ${done ? "blink" : ""}`} aria-hidden="true" />
      <style jsx>{`
        .tw {
          display: inline-flex;
          align-items: center; /* centers cursor vertically with text */
        }

        .cursor {
          display: inline-block;
          width: 1px;          /* thinner cursor */
          height: 1.15em;      /* a bit taller than text */
          margin-left: 5px;    /* requested spacing */
          background: currentColor;
          transform: translateY(0.02em); /* optical centering */
          opacity: ${done ? 1 : 0};
        }

        .blink {
          animation: blink 1.9s infinite; /* slower blink */
        }

        @keyframes blink {
          0%   { opacity: 1; }
          45%  { opacity: 1; }
          55%  { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
