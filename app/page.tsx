
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
          background: var(--bg-red);
          color: var(--cream);
          display: grid;
          place-items: center;
        }

        .stage {
          display: grid;
          gap: 26px;
          justify-items: center;
          align-content: center;
        }

        .hero {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .title {
          font-size: clamp(64px, 7vw, 118px);
          margin: 0;
        }

        .vline {
          width: 1px;
          height: 100px;
          background: var(--cream);
        }

        .carousel {
          width: clamp(285px, 24vw, 330px);
          aspect-ratio: 1 / 1.2;
          border: 3px solid var(--bg-red);
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
          transition: opacity 700ms ease;
        }

        .carousel img.active {
          opacity: 1;
        }

        .links {
          display: grid;
          gap: 14px;
          text-align: center;
        }

        .links a {
          color: var(--cream);
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}
