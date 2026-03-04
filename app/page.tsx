"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Typewriter from "./components/Typewriter";

export default function Home() {
  const images = useMemo(
    () => Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`),
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <main className="page">
      <h1 className="title">
        <Typewriter text="ÉMILIE ROSE" durationMs={4000} />
      </h1>

      <div className="carousel">
        {images.map((src, i) => (
          <img key={src} src={src} style={{ opacity: i === index ? 1 : 0 }} />
        ))}
      </div>

      <nav className="links">
        <Link href="/photo">PHOTO &gt;</Link>
        <Link href="/art">ART &gt;</Link>
      </nav>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f45343;
          color: #ffe7d8;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title {
          margin: 0;
          padding-top: 76px;
          font-family: "Moonscape", serif;
          font-weight: 200;
          font-size: 108px;
          line-height: 0.9;
          text-transform: uppercase;
        }

        .carousel {
          margin-top: 72px;
          width: 307px;
          height: 403px;
          border: 3px solid #b53a2d;
          position: relative;
          overflow: hidden;
        }

        .carousel :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.8s ease;
        }

        .links {
          margin-top: 92px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          font-family: "Orbit", monospace;
          font-size: 10px;
          letter-spacing: 0.28em;
        }
      `}</style>
    </main>
  );
}
