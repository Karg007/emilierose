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
        <Typewriter text="ÉMILIE ROSE" durationMs={1500} />
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
          padding-top: 4%;
          font-family: "Moonscape", serif;
          font-weight: 200;
          font-size: 800%;
          line-height: 0.9;
          text-transform: uppercase;
          text-align: center;
        }

        .carousel {
          margin-top: 5%;
          width: 350px;
          height: 447px;
          border: 6px solid #b53a2d;
          background: transparent;
          position: relative;
          overflow: hidden;
        }

        .carousel :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-position: center;
          transition: opacity 0.8s ease;
          display: block;
        }

        .links {
          margin-top: 6%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          padding-bottom: 1%;
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
          text-decoration:underline;
        }

        @media (max-width: 1080px) {
          .carousel {
            margin-top:4%;
            width: min(86vw, 275px);
            height: min(112vw, 351px);
          }
        }
        @media (max-width: 900px) {
          .title {
            font-size: clamp(56px, 10vw, 108px);
            padding-top: 52px;
          }
          .carousel {
            margin-top: 44px;
            width: min(86vw, 300px);
            height: min(112vw, 383px);
          }
          .links {
            margin-top: 54px;
          }
        }
      `}</style>
    </main>
  );
}
