"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Typewriter from "../components/Typewriter";

const IMAGES: string[] = Array.from({ length: 5 }, (_, i) =>
  `/images/art/${String(i + 1).padStart(2, "0")}.jpg`
);

export default function ArtPage() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3500);

    return () => window.clearInterval(id);
  }, []);

  return (
    <main className="page">
      <section className="left">
        <h1 className="title">
          <Typewriter text="ÉMILIE ROSE" speed={45} />
        </h1>

        <p className="tagline">ART</p>

        <div className="back">
          <Link href="/">&lt; RETOUR</Link>
        </div>
      </section>

      <aside className="carousel" aria-label="Carrousel art">
        {IMAGES.map((src, i) => (
          <img key={src} src={src} alt="" className={i === index ? "active" : ""} />
        ))}
      </aside>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--paper);
          color: var(--ink);
        }

        .left {
          padding: 72px 70px;
        }

        .title {
          margin: 0;
          font-family: "Moonscape", serif;
          font-weight: 400;
          font-size: clamp(60px, 6vw, 130px);
          line-height: 0.9;
          text-transform: uppercase;
        }

        .tagline {
          margin: 34px 0 0;
          font-family: "Orbit", monospace;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          opacity: 0.55;
        }

        .back {
          margin-top: 34px;
          font-family: "Orbit", monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.6;
        }
        .back :global(a) {
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .carousel {
          position: relative;
          overflow: hidden;
          background: #f3f3f3;
        }

        .carousel img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .carousel img.active {
          opacity: 1;
        }

        @media (max-width: 980px) {
          .page { grid-template-columns: 1fr; }
          .carousel { height: 60vh; }
          .left { padding: 48px 22px; }
        }
      `}</style>
    </main>
  );
}
