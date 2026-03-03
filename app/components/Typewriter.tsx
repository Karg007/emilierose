"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      {done && <span className="cursor" />}
      <style jsx>{`
        .cursor {
          display:inline-block;
          width:2px;
          height:1em;
          margin-left:6px;
          background:currentColor;
          animation:blink 1s infinite;
        }
        @keyframes blink {
          0%,50%,100%{opacity:1;}
          25%,75%{opacity:0;}
        }
      `}</style>
    </span>
  );
}
