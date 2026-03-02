"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 80,
  showCursor = false,
  className
}: {
  text: string;
  speed?: number;
  showCursor?: boolean;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const t = window.setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i += 1;
      if (i >= text.length) window.clearInterval(t);
    }, speed);

    return () => window.clearInterval(t);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {showCursor ? (
        <>
          <span className="tw-cursor">|</span>
          <style jsx>{`
            .tw-cursor {
              margin-left: 4px;
              animation: tw-blink 1s infinite;
            }
            @keyframes tw-blink {
              0%,
              50%,
              100% {
                opacity: 1;
              }
              25%,
              75% {
                opacity: 0;
              }
            }
          `}</style>
        </>
      ) : null}
    </span>
  );
}
