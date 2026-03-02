"use client";

import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function ArtPage() {
  return (
    <main className="page">
      <section className="left">
        <header className="top">
          <div className="brandRow">
            <h1 className="brand">
              <Typewriter text="ÉMILIE ROSE" speed={45} />
            </h1>
            <div className="vline" aria-hidden="true" />
          </div>
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

          <div className="back">
            <Link href="/">&lt; RETOUR</Link>
            <span className="sep">|</span>
            <Link href="/photo">PHOTO</Link>
          </div>
        </div>
      </section>

      <aside className="right" aria-label="Image art">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/2.jpg" alt="Art" />
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
          padding: 40px 54px;
        }

        .brandRow {
          display: inline-flex;
          align-items: center;
          gap: 28px;
        }

        .brand {
          margin: 0;
          font-family: "Moonscape", serif;
          font-weight: 400;
          font-size: clamp(66px, 6.8vw, 132px);
          line-height: 0.9;
          text-transform: uppercase;
          letter-spacing: 0.01em;
        }

        .vline {
          width: 1px;
          height: clamp(78px, 7.2vw, 140px);
          background: rgba(0, 0, 0, 0.55);
        }

        .year {
          position: absolute;
          top: 45%;
          left: 43%;
          transform: translate(-50%, -50%);
          font-family: "Orbit", monospace;
          font-size: 10px;
          line-height: 18px;
          letter-spacing: 0.34em;
          opacity: 0.6;
          text-transform: uppercase;
          text-align: center;
        }

        .copy {
          position: absolute;
          left: 58%;
          bottom: 96px;
          transform: translateX(-50%);
          width: min(280px, 48%);
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
          background: #f3f7ce;
          padding: 1px 3px;
          color: rgba(0, 0, 0, 0.65);
        }

        .sig {
          margin-top: 34px;
          text-align: center;
          letter-spacing: 0.10em;
          color: rgba(0, 0, 0, 0.55);
        }

        .back {
          margin-top: 18px;
          text-align: center;
          display: flex;
          gap: 10px;
          justify-content: center;
          align-items: center;
        }
        .back :global(a) {
          color: rgba(0, 0, 0, 0.55);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .sep {
          opacity: 0.4;
        }

        .right {
          position: relative;
          overflow: hidden;
        }
        .right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        @media (max-width: 980px) {
          .page {
            grid-template-columns: 1fr;
          }
          .right {
            height: 55vh;
          }
          .left {
            padding: 28px 22px 260px;
          }
          .year {
            position: static;
            transform: none;
            margin-top: 18px;
            text-align: left;
          }
          .copy {
            position: static;
            transform: none;
            width: 100%;
            margin-top: 26px;
          }
          .back {
            justify-content: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
