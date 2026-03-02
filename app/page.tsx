"use client";

import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function PhotoPage() {
  return (
    <main className="page">
      <section className="left">
        <div className="top">
          <div className="brandRow">
            <h1 className="brand">
              <Typewriter text="ÉMILIE ROSE" speed={45} />
            </h1>
            <div className="vline" />
          </div>
        </div>

        <div className="year">
          <div>2 0</div>
          <div>2 6</div>
        </div>

        <div className="copy">
          <p>
            ENCHANTÉE! MOI, C’EST ÉMILIE ROSE, PHOTOGRAPHE LIFESTYLE POUR LES AMOUREUX DES SOUVENIRS CANDIDES, UNIQUES ET CHALEUREUX.
            JE VOUS SOUHAITE LA BIENVENUE ICI, DANS MON PETIT COIN CRÉATIF DU WEB.
          </p>

          <p>
            L’INTÉGRALITÉ DU SITE EST EN ROUTE MAIS EN ATTENDANT,
            ÉCRIVEZ-MOI AU <span className="hl">INFO@EMILIEROSE.CA</span>
            POUR RÉSERVER VOTRE MOMENT PHOTO.
          </p>

          <p>
            MERCI À L’AVANCE DE ME CONFIER VOS PLUS BEAUX MOMENTS.
            J’AI TRÈS HÂTE DE FAIRE VOTRE RENCONTRE.
          </p>

          <div className="sig">ÉMILIE ROSE XX</div>

          <div className="back">
            <Link href="/">&lt; RETOUR</Link>
          </div>
        </div>
      </section>

      <aside className="right">
        <img src="/images/1.jpg" alt="Photographie" />
      </aside>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #fff;
        }

        .left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 60px 70px;
        }

        .brandRow {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .brand {
          margin: 0;
          font-family: "Moonscape", serif;
          font-size: clamp(70px, 7vw, 130px);
          line-height: 0.9;
        }

        .vline {
          width: 1px;
          height: 120px;
          background: rgba(0,0,0,0.6);
        }

        .year {
          font-family: "Orbit", monospace;
          font-size: 11px;
          letter-spacing: 0.35em;
          opacity: 0.6;
          margin: 40px 0;
        }

        .copy {
          font-family: "Orbit", monospace;
          font-size: 11px;
          line-height: 16px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.6);
          max-width: 320px;
        }

        .copy p { margin-bottom: 18px; }

        .hl {
          background: #f3f7ce;
          padding: 2px 4px;
        }

        .sig {
          margin-top: 30px;
          text-align: center;
        }

        .back {
          margin-top: 25px;
          text-align: center;
        }

        .right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 1000px) {
          .page { grid-template-columns: 1fr; }
          .right { height: 55vh; }
        }
      `}</style>
    </main>
  );
}
