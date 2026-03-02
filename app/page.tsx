"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const IMAGES = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`);

export default function Home() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-red)", color: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "70px 24px" }}>
        <div style={{ display: "grid", placeItems: "center", gap: 28 }}>
          <div style={{ fontFamily: "Moonscape, serif", fontWeight: 200, fontSize: 56 }}>
  <Typewriter text="émilie rose" />
</div>

          <div style={{ width: 110, height: 1, background: "var(--cream)", transform: "rotate(90deg)" }} />

          <nav style={{ display: "grid", gap: 12, textAlign: "center" }}>
            <Link href="/art" style={{ fontFamily: "Orbit, monospace", letterSpacing: ".30em", textTransform: "uppercase", textDecoration: "underline" }}>
              art &gt;
            </Link>
            <Link href="/photo" style={{ fontFamily: "Orbit, monospace", letterSpacing: ".30em", textTransform: "uppercase", textDecoration: "underline" }}>
              photo &gt;
            </Link>
          </nav>

          <div className="carousel" aria-label="Carrousel landing">
            {IMAGES.map((src, idx) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={`Landing ${idx + 1}`} className={idx === i ? "active" : ""} />
            ))}
          </div>

          <div style={{ fontFamily: "Orbit, monospace", letterSpacing: ".22em", fontSize: 12, opacity: 0.85 }}>
            <a href="mailto:info@emilierose.ca">info@emilierose.ca</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel {
          position: relative;
          width: min(900px, 92vw);
          height: min(520px, 52vh);
          overflow: hidden;
          background: rgba(0,0,0,.08);
          border: 1px solid rgba(255,231,216,.35);
        }
        .carousel img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 800ms ease;
        }
        .carousel img.active { opacity: 1; }
      `}</style>
    </main>
  );
}
