"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Typewriter from "./components/Typewriter";

export default function Home() {
  const images = useMemo(() => Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`), []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <main className="page">
      <h1 className="title">
        <Typewriter text="ÉMILIE ROSE" durationMs={4000} />
      </h1>

      <div className="carousel" aria-label="Carrousel landing">
        {images.map((src, i) => (
          <img key={src} src={src} alt="" style={{ opacity: i === index ? 1 : 0 }} />
        ))}
      </div>

      <nav className="links" aria-label="Navigation">
        <Link className="link" href="/photo">
          PHOTO&nbsp;&nbsp;&gt;
        </Link>
        <Link className="link" href="/art">
          ART&nbsp;&nbsp;&gt;
        </Link>
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
          text-align: center;
        }

        .carousel {
          margin-top: 60px;
          width: 400px;
          height: 525px;
          border: 3px solid #b53a2d;
          background: transparent;
          position: relative;
          overflow: hidden;
        }

        .carousel :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          transition: opacity 0.8s ease;
          display: block;
        }

        .links {
          margin-top: 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          padding-bottom: 60px;
        }

        .link {
          font-family: "Orbit", monospace;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #ffe7d8;
          text-decoration: underline;
          text-underline-offset: 4px;
          opacity: 0.7;
        }

        .link:hover {
          opacity: 1;
        }

        @media (max-width: 900px) {
          .title {
            font-size: clamp(56px, 10vw, 108px);
            padding-top: 52px;
          }
          .carousel {
            margin-top: 44px;
            width: min(86vw, 420px);
            height: min(112vw, 560px);
          }
          .links {
            margin-top: 54px;
          }
        }
      `}</style>
    </main>
  );
}
