"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 60,
  className
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);

    const t = window.setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i += 1;

      if (i >= text.length) {
        window.clearInterval(t);
        setDone(true);
      }
    }, speed);

    return () => window.clearInterval(t);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className={`cursor ${done ? "blink" : ""}`}>|</span>

      <style jsx>{`
        .cursor {
          margin-left: 6px;
          opacity: 1;
        }

        .blink {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
