"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 70,
  className
}: {
  text: string;
  speed?: number;
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

  return <span className={className}>{displayed}</span>;
}
