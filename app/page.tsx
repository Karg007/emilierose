"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from "./components/Typewriter";

const IMAGES = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`);

export default function Home() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % IMAGES.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="landing">
      <div className="hero">
        <h1><Typewriter text="ÉMILIE ROSE" /></h1>
        <div className="vline" />
      </div>

      <div className="carousel">
        {IMAGES.map((src, idx) => (
          <img key={src} src={src} className={idx===i?"active":""} />
        ))}
      </div>

      <div className="links">
        <Link href="/photo">PHOTO &gt;</Link>
        <Link href="/art">ART &gt;</Link>
      </div>

      <style jsx>{`
        .landing {
          background: var(--bg-red);
          color: var(--cream);
          min-height: 100vh;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:40px;
        }
        .hero {
          display:flex;
          align-items:center;
          gap:30px;
        }
        h1 {
          font-family:"Moonscape", serif;
          font-size:110px;
          margin:0;
          letter-spacing:2px;
        }
        .vline {
          width:1px;
          height:100px;
          background:var(--cream);
        }
        .carousel {
          width:360px;
          height:430px;
          border:3px solid var(--bg-red);
          position:relative;
          overflow:hidden;
        }
        .carousel img {
          position:absolute;
          width:100%;
          height:100%;
          object-fit:cover;
          opacity:0;
          transition:opacity .7s ease;
        }
        .carousel img.active { opacity:1; }
        .links {
          display:flex;
          flex-direction:column;
          gap:14px;
          text-align:center;
          font-size:11px;
          letter-spacing:.35em;
        }
      `}</style>
    </main>
  );
}
