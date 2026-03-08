"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function PhotoPage() {
  const images = useMemo(
    () => Array.from({ length: 15 }, (_, i) => `/images/photo/${String(i + 1).padStart(2, "0")}.jpg`),
    []
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <main className="page">
      <section className="left">
        <h1 className="brand">
          <Typewriter text="ÉMILIE ROSE" durationMs={3000} />
        </h1>

        <div className="year" aria-hidden="true">
          <div>2 0</div>
          <div>2 6</div>
        </div>

        <div className="textBlock">
          <p>
            ENCHANTÉE! MOI, C’EST ÉMILIE ROSE, PHOTOGRAPHE LIFESTYLE POUR LES AMOUREUX DES SOUVENIRS
            CANDIDES, UNIQUES ET CHALEUREUX. JE VOUS SOUHAITE LA BIENVENUE ICI, DANS MON PETIT COIN CRÉATIF DU WEB. L’INTÉGRALITÉ DU
            SITE EST EN ROUTE MAIS EN ATTENDANT, ÉCRIVEZ-MOI AU{" "}
            <a href="mailto:info@emilierose.ca" className="highlight">INFO@EMILIEROSE.CA</a> POUR RÉSERVER VOTRE MOMENT PHOTO.
          </p>

          <p>
            MERCI À L’AVANCE DE ME CONFIER VOS PLUS BEAUX MOMENTS. J’AI TRÈS HÂTE DE FAIRE VOTRE
            RENCONTRE.
          </p>

          <div className="signature">ÉMILIE ROSE XX</div>
        </div>
      </section>

      <aside className="right" aria-label="Carrousel photo">
        {images.map((src, i) => (
          <img key={src} src={src} alt="" style={{ opacity: i === index ? 1 : 0 }} />
        ))}
      </aside>

      <style jsx>{`
        .page {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          background: #fff;
        }


        .left {
          position: relative;
          padding: 80px 90px;
        }

        .brand {
          margin: 0;
          font-family: "Moonscape", serif;
          font-weight: 200;
          font-size: clamp(80px, 10vw, 1000px);
          line-height: 0.9;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .year {
          position: absolute;
          top: 55%;
          left: 53%;
          transform: translate(-50%, -50%);
          font-family: "Orbit", monospace;
          font-size: 15px;
          letter-spacing: 0.35em;
          opacity: 0.5;
          text-align: center;
          user-select: none;
        }

        .textBlock {
          position: absolute;
          bottom: 90px;
          left: 70%;
          transform: translateX(-50%);
          text-align: justify;
          width: 250px;
          font-family: "Orbit", monospace;
          font-size: 13px;
          line-height: 16px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.6);
        }

        .textBlock p {
          margin: 0 0 18px;
        }

        .highlight {
          background: var(--highlight);
          padding: 2px 4px;
          color: rgba(0, 0, 0, 0.65);
          text-decoration:none;
        }

        .signature {
          margin-top: 30px;
          text-align: right;
          margin-bottom:25px;
        }

        .back {
          display: block;
          margin-top: 25px;
          text-align: center;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-decoration: underline;
          text-underline-offset: 2px;
          opacity: 0.7;
        }

        .right {
          position: relative;
          overflow: hidden;
        }

        .right :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100vh;
          object-position: right;
          transition: opacity 0.8s ease;
          display: block;
        }

        @media (max-width: 1000px) {
          .page {
            grid-template-columns: 1fr;
          }
          .right {
            height: 60vh;
          }
          .left {
            padding: 48px 22px 260px;
          }
          .year {
            top: 220px;
            left: 26px;
            transform: none;
            text-align: left;
          }
          .textBlock {
            position: static;
            transform: none;
            width: min(340px, 100%);
            margin-top: 26px;
          }
        }
      `}</style>
    </main>
  );
}
