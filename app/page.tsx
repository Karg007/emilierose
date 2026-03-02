"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from "./components/Typewriter";

const IMAGES = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`);

export default function Home() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="landing">
      <div className="wrap">
        <div className="title">
          <Typewriter text="émilie rose" speed={65} />
        </div>

        <nav className="links" aria-label="Navigation">
          <Link href="/art">art &gt;</Link>
          <Link href="/photo">photo &gt;</Link>
        </nav>

        <div className="carousel" aria-label="Carrousel landing">
          {IMAGES.map((src, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt={`Landing ${idx + 1}`} className={idx === i ? "active" : ""} />
          ))}
        </div>

        <div className="email">
          <a href="mailto:info@emilierose.ca">info@emilierose.ca</a>
        </div>
      </div>

      <style jsx>{`
        .landing {
          min-height: 100vh;
          background: var(--bg-red);
          color: var(--cream);
          display: grid;
          place-items: center;
        }

        .wrap {
          width: min(1200px, 92vw);
          padding: 64px 0;
          display: grid;
          justify-items: center;
          gap: 22px;
        }

        /* Canva export shows ~106.667px size & ~99px line-height on desktop */
        .title {
          font-family: "Moonscape", serif;
          font-weight: 200;
          font-size: clamp(56px, 6.6vw, 106.667px);
          line-height: 0.93;
          color: var(--cream);
        }

        .links {
          display: grid;
          gap: 10px;
          text-align: center;
          margin-top: 4px;
        }
        .links :global(a) {
          font-family: "Orbit", monospace;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: underline;
          color: var(--cream);
        }

        /* Canva export images on landing appear ~570x857 px */
        .carousel {
          width: min(570px, 78vw);
          aspect-ratio: 570 / 857;
          overflow: hidden;
          position: relative;
          background: rgba(0, 0, 0, 0.10);
        }
        .carousel img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain; /* fit in width + height (no overflow) */
          object-position: center;
          opacity: 0;
          transition: opacity 800ms ease;
          background: rgba(0, 0, 0, 0.10);
        }
        .carousel img.active {
          opacity: 1;
        }

        .email {
          font-family: "Orbit", monospace;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.22em;
          opacity: 0.9;
          margin-top: 4px;
        }

        @media (max-height: 740px) {
          .wrap { padding: 44px 0; }
          .carousel { width: min(520px, 76vw); }
        }
      `}</style>
    </main>
  );
}
