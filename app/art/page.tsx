"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function ArtPage() {
  const images = useMemo(
    () => Array.from({ length: 5 }, (_, i) => `/images/art/${String(i + 1).padStart(2, "0")}.jpg`),
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
          <Typewriter text="ÉMILIE ROSE" durationMs={1500} />
        </h1>

        <div className="year" aria-hidden="true">
          <div>2 0</div>
          <div>2 6</div>
        </div>

        <div className="textBlock">
          <p>
            ENCHANTÉE! MOI, C’EST ÉMILIE ROSE, ARTISTE CONTEMPORAINE ET AMOUREUSE DE TOUTES LES
            BEAUTÉS BRUTES, NORDIQUES ET POÉTIQUES.
          </p>

          <p>
            JE VOUS SOUHAITE LA BIENVENUE ICI, DANS MON PETIT COIN CRÉATIF DU WEB. L’INTÉGRALITÉ DU
            SITE EST EN ROUTE MAIS EN ATTENDANT, RENDEZ-VOUS DANS MA{" "}
            <a href="https://www.etsy.com/shop/emilieroseartiste" target="_blank" rel="noopener noreferrer" className="highlight"> BOUTIQUE ETSY</a> POUR Y DÉCOUVRIR MES CRÉATIONS.
          </p>

          <p>À BIENTÔT! XX</p>

          <div className="signature">ÉMILIE ROSE XX</div>

        </div>
      </section>

      <aside className="right" aria-label="Carrousel art">
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
  padding: 70px 90px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
        .brand {
          margin: 0;
          font-family: var(--font-moonscape), serif;
          font-weight: 200;
          font-size: clamp(80px, 10vw, 1000px);
          line-height: 0.9;
          text-transform: uppercase;
          white-space: nowrap;
        }

       .year {
  margin-top: 18%;
  margin-left: 18%;
  font-family: var(--font-orbit), monospace;
  font-size: 10px;
  letter-spacing: 0.35em;
  color:#000000
  text-align: center;
  user-select: none;
  align-self: center;
}

       .textBlock {
  margin-top: 4%;
  margin-left: 70%;
  align-self: center;
  width: 200px;
 font-family: var(--font-orbit), monospace;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #000000;
  padding: 0;
  text-align:justify;
}

        .textBlock p {
          margin: 0 0 18px;
        }

        .highlight {
          background: var(--highlight);
          padding: 0px;
          color: #000000;
          text-decoration:underline;
        }

        .signature {
          margin-top: 30px;
          text-align: right;
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
          right: 0;
          width: auto;
          height: 100vh;
          object-position: right;
          transition: opacity 0.8s ease;
          display: block;
        }

        .tw {
          margin-left:50px;
        }

         @media (max-width: 900px) {
  .page {
    display:block;
    max-width:100%;
    margin:auto;
  }

  .left {
    display:block;
    margin:auto;
    padding: 70px 0px;
    min-height: 0;
    text-align:center;
  }

  .brand {
  display:block;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    margin: auto;
    }

    .tw span{
      margin-left: 0px;
    }
    

  .year {
    text-align: left;
    opacity: 0.5;
    width: 100%;
    max-width: 100%;
    margin-bottom:18%;
    margin-left:0;
    padding-left:18%;
  }

  .textBlock {
  margin: auto;
  align-self: center;
  width: 80%;
  }


  .right {
    display:block;
    margin:auto;
    width: 100%;
    min-height: 320px;
  }

}
      `}</style>
    </main>
  );
}
