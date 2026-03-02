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
    <main style={{ minHeight: "100vh", background: "var(--bg-red)", color: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "70px 24px" }}>
        <div style={{ display: "grid", placeItems: "center", gap: 22 }}>
          <div style={{ fontFamily: "Moonscape, serif", fontWeight: 200, fontSize: 56, lineHeight: 1 }}>
            <Typewriter text="émilie rose" speed={85} />
          </div>

          {/* Removed vertical line */}

          <nav style={{ display: "grid", gap: 12, textAlign: "center", marginTop: 6 }}>
            <Link
              href="/art"
              style={{
                fontFamily: "Orbit, monospace",
                letterSpacing: ".30em",
                textTransform: "uppercase",
                textDecoration: "underline"
              }}
            >
              art &gt;
            </Link>
            <Link
              href="/photo"
              style={{
                fontFamily: "Orbit, monospace",
                letterSpacing: ".30em",
                textTransform: "uppercase",
                textDecoration: "underline"
              }}
            >
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
          height: min(560px, 58vh);
          overflow: hidden;
          background: rgba(0, 0, 0, 0.10);
          border: 1px solid rgba(255, 231, 216, 0.35);
          display: grid;
          place-items: center;
        }

        /* Fit fully inside the box (no crop), both width + height */
        .carousel img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          object-position: center;
          opacity: 0;
          transition: opacity 800ms ease;
          background: rgba(0,0,0,0.10);
        }

        .carousel img.active {
          opacity: 1;
        }
      `}</style>
    </main>
  );
}
