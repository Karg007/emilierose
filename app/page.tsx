"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from "./components/Typewriter";

const IMAGES = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`);

export default function Home() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % IMAGES.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="landing">
      <div className="stage">
        <header className="hero">
          <h1 className="title">
            <Typewriter text="ÉMILIE ROSE" speed={55} />
          </h1>
          <div className="vline" aria-hidden="true" />
        </header>

        <div className="carousel" aria-label="Carrousel landing">
          {IMAGES.map((src, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt={`Landing ${idx + 1}`} className={idx === i ? "active" : ""} />
          ))}
        </div>

        <nav className="links" aria-label="Navigation">
          <Link href="/photo">PHOTO &gt;</Link>
          <Link href="/art">ART &gt;</Link>
        </nav>
      </div>

      <style jsx>{`
        .landing {
          min-height: 100vh;
          background: var(--bg-red);
          color: var(--cream);
          display: grid;
          place-items: center;
        }

        .stage {
          width: min(1200px, 92vw);
          height: min(760px, 86vh);
          display: grid;
          grid-template-rows: auto 1fr auto;
          justify-items: center;
          align-items: start;
          padding-top: 48px;
        }

        .hero {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-bottom: 18px;
        }

        .title {
          font-family: "Moonscape", serif;
          font-weight: 200;
          font-size: clamp(64px, 7.2vw, 118px);
          line-height: 0.95;
          letter-spacing: 0.02em;
          margin: 0;
          text-transform: uppercase;
          color: var(--cream);
          white-space: nowrap;
        }

        .vline {
          width: 1px;
          height: clamp(52px, 6.5vw, 104px);
          background: rgba(255, 231, 216, 0.85);
        }

        .carousel {
          width: clamp(190px, 16vw, 220px);
          aspect-ratio: 1 / 1.2;
          border: 3px solid var(--bg-red);
          overflow: hidden;
          position: relative;
          margin-top: 8px;
          background: transparent;
        }
        .carousel img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transition: opacity 700ms ease;
        }
        .carousel img.active {
          opacity: 1;
        }

        .links {
          display: grid;
          gap: 10px;
          text-align: center;
          margin-bottom: 10px;
        }
        .links :global(a) {
          font-family: "Orbit", monospace;
          font-size: 10px;
          line-height: 14px;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: var(--cream);
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        @media (max-width: 680px) {
          .stage {
            height: auto;
            padding: 36px 0 22px;
          }
          .hero {
            gap: 18px;
          }
          .carousel {
            width: 200px;
          }
        }
      `}</style>
    </main>
  );
}
