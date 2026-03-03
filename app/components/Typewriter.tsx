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

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {done && <span className="cursor" />}

      <style jsx>{`
        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          margin-left: 6px;
          background: currentColor;
          animation: blink 1s infinite;
          vertical-align: middle;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
