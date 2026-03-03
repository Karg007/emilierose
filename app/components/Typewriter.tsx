"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
};

export default function Typewriter({ text, speed = 60, className }: TypewriterProps) {
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
    }, speed);

    return () => window.clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={`tw ${className ?? ""}`}>
      {displayed}
      <style jsx>{`
        .tw {
          display: inline-block;
          position: relative;
        }
        .tw::after {
          content: "";
          display: ${done ? "inline-block" : "none"};
          width: 2px;
          height: 1em;
          margin-left: 5px;
          background: currentColor;
          vertical-align: -0.1em;
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
