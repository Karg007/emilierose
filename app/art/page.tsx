"use client";

import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function ArtPage() {
  return (
    <main className="page">
      <section className="left">
        <header className="header">
          <h1 className="title">
            <Typewriter text="ÉMILIE ROSE" speed={45} />
          </h1>
          <div className="vline" aria-hidden="true" />
        </header>

        <div className="year" aria-label="Année">
          <div>2 0</div>
          <div>2 6</div>
        </div>

        <div className="copy">
          <p>
            ENCHANTÉE! MOI, C’EST ÉMILIE ROSE, ARTISTE CONTEMPORAINE ET AMOUREUSE DE TOUTES LES BEAUTÉS BRUTES, NORDIQUES ET POÉTIQUES.
          </p>

          <p>
            JE VOUS SOUHAITE LA BIENVENUE ICI, DANS MON PETIT COIN CRÉATIF DU WEB. L’INTÉGRALITÉ DU SITE EST EN ROUTE MAIS EN ATTENDANT,
            RENDEZ-VOUS DANS MA <span className="hl">BOUTIQUE ETSY</span> POUR ZYEUTER MES CRÉATIONS DISPONIBLES.
          </p>

          <p>À BIENTÔT! XX</p>

          <div className="sig">ÉMILIE ROSE XX</div>
        </div>

        <div className="back">
          <Link href="/">&lt; RETOUR</Link>
          <span className="sep">|</span>
          <Link href="/photo">PHOTO</Link>
        </div>
      </section>

      <aside className="right" aria-label="Image art à venir">
        <div className="wall" />
        <div className="frame" aria-hidden="true" />
        <div className="floor" />
      </aside>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #fff;
          color: #000;
        }

        .left {
          position: relative;
          overflow: hidden;
          padding: 56px 64px;
        }

        .header {
          display: inline-flex;
          align-items: flex-start;
          gap: 34px;
        }

        .title {
          margin: 0;
          font-family: "Moonscape", serif;
          font-weight: 400;
          font-size: clamp(72px, 7vw, 150px);
          line-height: 0.88;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .vline {
          width: 1px;
          height: clamp(92px, 8vw, 160px);
          background: rgba(0, 0, 0, 0.55);
          margin-top: 6px;
        }

        .year {
          position: absolute;
          left: 46%;
          top: 44%;
          transform: translate(-50%, -50%);
          font-family: "Orbit", monospace;
          font-size: 11px;
          line-height: 18px;
          letter-spacing: 0.35em;
          opacity: 0.55;
          text-transform: uppercase;
          text-align: center;
          user-select: none;
        }

        .copy {
          position: absolute;
          left: 64%;
          bottom: 84px;
          transform: translateX(-50%);
          width: min(310px, 44%);
          font-family: "Orbit", monospace;
          font-size: 10px;
          line-height: 14px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.55);
        }

        .copy p { margin: 0 0 16px; }

        .hl {
          background: var(--highlight);
          padding: 1px 3px;
          color: rgba(0, 0, 0, 0.65);
        }

        .sig {
          margin-top: 30px;
          text-align: center;
          letter-spacing: 0.10em;
          color: rgba(0, 0, 0, 0.55);
        }

        .back {
          position: absolute;
          left: 64%;
          bottom: 40px;
          transform: translateX(-50%);
          font-family: "Orbit", monospace;
          font-size: 10px;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          opacity: 0.55;
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
        }
        .back :global(a) {
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .sep { opacity: 0.45; }

        .right {
          position: relative;
          overflow: hidden;
        }

        /* mimic mockup: soft wall + floor */
        .wall {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(0,0,0,0.06), transparent 55%),
                      linear-gradient(135deg, rgba(0,0,0,0.07), rgba(0,0,0,0.02));
        }

        .floor {
          position: absolute;
          left: -10%;
          right: -10%;
          bottom: -12%;
          height: 34%;
          background: repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.08),
            rgba(0,0,0,0.08) 2px,
            rgba(0,0,0,0.04) 2px,
            rgba(0,0,0,0.04) 8px
          );
          transform: skewX(-12deg);
          opacity: 0.35;
        }

        /* Placeholder frame, rotated like mockup */
        .frame {
          position: absolute;
          width: min(520px, 78%);
          aspect-ratio: 1 / 1;
          right: 10%;
          top: 18%;
          transform: rotate(-12deg);
          background: #ececec;
          border: 10px solid #caa36a;
          box-shadow: 0 20px 50px rgba(0,0,0,0.18);
        }
        .frame::before {
          content: "";
          position: absolute;
          inset: 16px;
          background: linear-gradient(135deg, rgba(0,0,0,0.10), rgba(0,0,0,0.02));
          border: 2px solid rgba(0,0,0,0.20);
        }

        @media (max-width: 980px) {
          .page { grid-template-columns: 1fr; }
          .right { height: 55vh; }
          .left { padding: 40px 22px 260px; }
          .year { left: 24px; top: 220px; transform: none; text-align: left; }
          .copy { position: static; transform: none; width: 100%; margin-top: 26px; }
          .back { position: static; transform: none; margin-top: 18px; justify-content: flex-start; }
        }
      `}</style>
    </main>
  );
}
