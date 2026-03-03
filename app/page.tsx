"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Typewriter from "./components/Typewriter";

type Mode = "plain" | "padded";

function makeImages(mode: Mode): string[] {
  return Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;
    return mode === "plain" ? `/images/${n}.jpg` : `/images/${String(n).padStart(2, "0")}.jpg`;
  });
}

export default function Home() {
  const [mode, setMode] = useState<Mode>("plain");
  const images = useMemo(() => makeImages(mode), [mode]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, [images.length]);

  // If first image fails (common when files are 01..12), switch mode once.
  const handleFirstError = () => {
    if (mode === "plain") setMode("padded");
  };

  return (
    <main className="page">
      <section className="hero">
        <h1 className="title">
          <Typewriter text="ÉMILIE ROSE" speed={45} />
        </h1>

        <div className="carousel" aria-label="Carrousel landing">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              decoding="async"
              loading={i === 0 ? "eager" : "lazy"}
              onError={i === 0 ? handleFirstError : undefined}
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
        </div>

        <nav className="links" aria-label="Navigation principale">
          <Link href="/photo" className="pill">PHOTOGRAPHIE</Link>
          <Link href="/art" className="pill">ART</Link>
        </nav>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: var(--bg-red);
          color: var(--cream);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero {
          width: min(1100px, calc(100vw - 48px));
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          padding: 44px 0;
        }

        .title {
          margin: 0;
          font-family: "Moonscape", serif;
          font-weight: 400;
          font-size: clamp(64px, 7vw, 140px);
          line-height: 0.9;
          text-transform: uppercase;
          text-align: center;
        }

        .carousel {
          width: min(860px, 92vw);
          height: min(520px, 56vh);
          border: 3px solid var(--bg-red); /* requested earlier */
          border-radius: 2px;
          overflow: hidden;
          position: relative;
          background: transparent; /* no background */
        }

        .carousel :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.8s ease;
          display: block;
        }

        .links {
          display: flex;
          gap: 18px;
          margin-top: 10px;
        }

        .pill {
          font-family: "Orbit", monospace;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          padding: 10px 18px;
          border: 1px solid rgba(255, 231, 216, 0.6);
          background: rgba(0,0,0,0.08);
        }

        .pill:hover {
          background: rgba(0,0,0,0.16);
        }

        @media (max-width: 520px) {
          .links { flex-direction: column; width: 100%; align-items: center; }
          .pill { width: 100%; text-align: center; max-width: 360px; }
          .carousel { height: 46vh; }
        }
      `}</style>
    </main>
  );
}
