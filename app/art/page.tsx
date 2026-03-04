"use client";

import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function ArtPage() {
  return (
    <main className="page">
      <section className="left">
        <header className="header">
          <h1 className="brand">
            <Typewriter text="ÉMILIE ROSE" speed={45} />
          </h1>
          <div className="vline" />
        </header>

        <div className="year">
          <div>2 0</div>
          <div>2 6</div>
        </div>

        <div className="textBlock">
          <p>
            ENCHANTÉE! MOI, C’EST ÉMILIE ROSE, ARTISTE CONTEMPORAINE
            ET AMOUREUSE DE TOUTES LES BEAUTÉS BRUTES, NORDIQUES
            ET POÉTIQUES.
          </p>

          <p>
            JE VOUS SOUHAITE LA BIENVENUE ICI, DANS MON PETIT COIN
            CRÉATIF DU WEB. L’INTÉGRALITÉ DU SITE EST EN ROUTE MAIS EN
            ATTENDANT, RENDEZ-VOUS DANS MA
            <span className="highlight"> BOUTIQUE ETSY </span>
            POUR Y DÉCOUVRIR MES CRÉATIONS.
          </p>

          <div className="signature">ÉMILIE ROSE XX</div>

          <Link href="/" className="back">
            &lt; RETOUR
          </Link>
        </div>
      </section>

      <aside className="right">
        <img src="/images/art/01.jpg" alt="" />
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

        .header {
          display: flex;
          align-items: flex-start;
          gap: 40px;
        }

        .brand {
          font-family: "Moonscape", serif;
          font-size: clamp(80px, 7vw, 150px);
          line-height: 0.9;
          margin: 0;
        }

        .vline {
          width: 1px;
          height: 140px;
          background: rgba(0, 0, 0, 0.6);
          margin-top: 20px;
        }

        .year {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: "Orbit", monospace;
          font-size: 10px;
          letter-spacing: 0.35em;
          opacity: 0.5;
          text-align: center;
        }

        .textBlock {
          position: absolute;
          bottom: 90px;
          left: 50%;
          transform: translateX(-50%);
          width: 320px;
          font-family: "Orbit", monospace;
          font-size: 10px;
          line-height: 16px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.6);
        }

        .highlight {
          background: #f3f7ce;
          padding: 2px 4px;
        }

        .signature {
          margin-top: 30px;
          text-align: center;
        }

        .back {
          display: block;
          margin-top: 25px;
          text-align: center;
          font-size: 10px;
          letter-spacing: 0.25em;
        }

        .right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 1000px) {
          .page { grid-template-columns: 1fr; }
          .right { height: 60vh; }
        }
      `}</style>
    </main>
  );
}
