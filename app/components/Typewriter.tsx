"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  speed?: number;
}

export default function Typewriter({ text, speed = 60 }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="wrapper">
      {displayed}
      <span className={`cursor ${done ? "blink" : ""}`}>|</span>

      <style jsx>{`
  .wrapper {
    display: inline-block;
  }

  .cursor {
    display: inline-block;
    margin-left: 5px;
  }

  .blink {
    animation: blink 1.8s infinite; /* ← plus lent et plus élégant */
  }

  @keyframes blink {
    0%   { opacity: 1; }
    40%  { opacity: 1; }
    60%  { opacity: 0; }
    100% { opacity: 0; }
  }
`}</style>
    </span>
  );
}
