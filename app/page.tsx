"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Typewriter from "./components/Typewriter";

export default function Home() {
  const images = useMemo(() => Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`), []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % images.length), 700);
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
          font-family: var(--font-moonscape), serif;
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
          transition: opacity 0.2s ease;
          display: block;
        }

        .links {
          margin-top: 6%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          padding-bottom: 1%;
          font-family: var(--font-orbit), monospace;
          font-size: 14px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #ffe7d8;
         
        }

       .links :global(a) {
  text-decoration: none;
  text-underline-offset: 4px;
  transition: opacity 0.2s ease;
  display: inline-block;
  cursor: pointer;
}

.links :global(a:hover) {
  text-decoration: underline;
}
        @media (max-height: 1080px) {
          .carousel {
            margin-top: 4%;
            width: min(86vw, 275px);
            height: min(112vw, 351px);
          }
          .links {
            margin-top: 4%;
            font-size: 11px;
          }
        }
        @media (max-width: 768px) {
  .page {
    padding: 0 18px 28px;
  }

  .title {
    padding-top: 40px;
    font-size: clamp(44px, 14vw, 72px);
    line-height: 0.92;
    text-align: center;
  }

  .carousel {
    margin-top: 32px;
    border-width: 4px;
  }

  .links {
    margin-top: 36px;
    gap: 16px;
    padding-bottom: 24px;
  }

  .link {
    font-size: 11px;
    letter-spacing: 0.22em;
  }
}

@media (max-width: 420px) {
  .title {
    font-size: 42px;
  }

  .carousel {
    width: 84vw;
    height: 108vw;
  }

  .link {
    font-size: 10px;
    letter-spacing: 0.18em;
  }
}
       
      `}</style>
    </main>
  );
}
