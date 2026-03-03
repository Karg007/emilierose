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
          <div className="vline" />
        </header>

        <div className="carousel">
          {IMAGES.map((src, idx) => (
            <img key={src} src={src} alt="" className={idx === i ? "active" : ""} />
          ))}
        </div>

        <nav className="links">
          <Link href="/photo">PHOTO &gt;</Link>
          <Link href="/art">ART &gt;</Link>
        </nav>
      </div>

      <style jsx>{`
        .landing {
          min-height: 100vh;
          background: #b23a2f;
          color: #ffe7d8;
          display: grid;
          place-items: center;
        }

        .stage {
          display: grid;
          gap: 28px;
          justify-items: center;
          align-content: center;
        }

        .hero {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .title {
          font-size: clamp(64px, 7vw, 120px);
          margin: 0;
          text-transform: uppercase;
        }

        .vline {
          width: 1px;
          height: 100px;
          background: rgba(255,255,255,0.8);
        }

        .carousel {
          width: clamp(300px, 26vw, 360px);
          aspect-ratio: 1 / 1.2;
          border: 3px solid #b23a2f;
          overflow: hidden;
          position: relative;
        }

        .carousel img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity .7s ease;
        }

        .carousel img.active {
          opacity: 1;
        }

        .links {
          display: grid;
          gap: 12px;
          text-align: center;
        }

        .links :global(a) {
          font-size: 11px;
          letter-spacing: .3em;
          text-transform: uppercase;
          text-decoration: underline;
          color: #ffe7d8;
        }
      `}</style>
    </main>
  );
}
