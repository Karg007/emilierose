"use client";

import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function PhotoPage() {
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
            ENCHANTÉE! MOI, C’EST ÉMILIE ROSE, PHOTOGRAPHE LIFESTYLE POUR LES AMOUREUX DES SOUVENIRS CANDIDES, UNIQUES ET CHALEUREUX.
            JE VOUS SOUHAITE LA BIENVENUE ICI, DANS MON PETIT COIN CRÉATIF DU WEB.
          </p>

          <p>
            L’INTÉGRALITÉ DU SITE EST EN ROUTE MAIS EN ATTENDANT, ÉCRIVEZ-MOI AU{" "}
            <a className="hl" href="mailto:info@emilierose.ca">INFO@EMILIEROSE.CA</a>{" "}
            POUR RÉSERVER VOTRE MOMENT PHOTO.
          </p>

          <p>
            MERCI À L’AVANCE DE ME CONFIER VOS PLUS BEAUX MOMENTS. J’AI TRÈS HÂTE DE FAIRE VOTRE RENCONTRE ET RÉALISER CES SOUVENIRS AVEC VOUS. :)
          </p>

          <div className="sig">ÉMILIE ROSE XX</div>
        </div>

        <div className="back">
          <Link href="/">&lt; RETOUR</Link>
        </div>
      </section>

      <aside className="right" aria-label="Photo à venir">
        <div className="photoPlaceholder" />
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

        /* "20 / 26" position: center-left like mockup */
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

        /* Copy block: bottom-center slightly right */
        .copy {
          position: absolute;
          left: 64%;
          bottom: 78px;
          transform: translateX(-50%);
          width: min(310px, 44%);
          font-family: "Orbit", monospace;
          font-size: 10px;
          line-height: 14px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.55);
        }

        .copy p {
          margin: 0 0 16px;
        }

        .hl {
          background: var(--highlight);
          padding: 1px 3px;
          color: rgba(0, 0, 0, 0.65);
          text-decoration: none;
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
        }
        .back :global(a) {
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .right {
          position: relative;
          overflow: hidden;
          background: #f3f3f3;
        }

        .photoPlaceholder {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 30% 20%, rgba(0,0,0,0.06), transparent 55%),
            linear-gradient(135deg, rgba(0,0,0,0.05), rgba(0,0,0,0.02));
        }

        @media (max-width: 980px) {
          .page { grid-template-columns: 1fr; }
          .right { height: 55vh; }
          .left { padding: 40px 22px 240px; }
          .year { left: 24px; top: 220px; transform: none; text-align: left; }
          .copy { position: static; transform: none; width: 100%; margin-top: 26px; }
          .back { position: static; transform: none; margin-top: 18px; }
        }
      `}</style>
    </main>
  );
}
