\
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function ArtPage() {
  const images = useMemo(() => Array.from({ length: 5 }, (_, i) => `/images/art/${String(i+1).padStart(2,"0")}.jpg`), []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <main className="page">
      <section className="left">
        <h1 className="brand"><Typewriter text="ÉMILIE ROSE" durationMs={4000} /></h1>
        <div className="year" aria-hidden="true"><div>2 0</div><div>2 6</div></div>

        <div className="textBlock">
          <p>ENCHANTÉE! MOI, C’EST ÉMILIE ROSE, ARTISTE CONTEMPORAINE ET AMOUREUSE DE TOUTES LES BEAUTÉS BRUTES, NORDIQUES ET POÉTIQUES.</p>
          <p>JE VOUS SOUHAITE LA BIENVENUE ICI, DANS MON PETIT COIN CRÉATIF DU WEB. L’INTÉGRALITÉ DU SITE EST EN ROUTE MAIS EN ATTENDANT, RENDEZ-VOUS DANS MA <span className="highlight">BOUTIQUE ETSY</span> POUR Y DÉCOUVRIR MES CRÉATIONS.</p>
          <p>À BIENTÔT! XX</p>
          <div className="signature">ÉMILIE ROSE XX</div>
          <Link href="/" className="back">&lt; RETOUR</Link>
        </div>
      </section>

      <aside className="right" aria-label="Carrousel art">
        {images.map((src, i) => (<img key={src} src={src} alt="" style={{ opacity: i===index ? 1:0 }} />))}
      </aside>

      <style jsx>{`
        .page{display:grid;grid-template-columns:1fr 1fr;min-height:100vh;background:#fff;}
        .left{position:relative;padding:80px 90px;}
        .brand{margin:0;font-family:"Moonscape",serif;font-weight:200;font-size:clamp(80px,7vw,150px);line-height:.9;text-transform:uppercase;white-space:nowrap;}
        .year{position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);font-family:"Orbit",monospace;font-size:10px;letter-spacing:.35em;opacity:.5;text-align:center;user-select:none;}
        .textBlock{position:absolute;bottom:90px;left:50%;transform:translateX(-50%);width:320px;font-family:"Orbit",monospace;font-size:10px;line-height:16px;letter-spacing:.06em;text-transform:uppercase;color:rgba(0,0,0,.6);}
        .textBlock p{margin:0 0 18px;}
        .highlight{background:var(--highlight);padding:2px 4px;color:rgba(0,0,0,.65);}
        .signature{margin-top:30px;text-align:center;}
        .back{display:block;margin-top:25px;text-align:center;font-size:10px;letter-spacing:.25em;text-decoration:underline;text-underline-offset:2px;opacity:.7;}
        .right{position:relative;overflow:hidden;background:#f3f3f3;}
        .right :global(img){position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center;transition:opacity .8s ease;display:block;}
        @media (max-width:1000px){.page{grid-template-columns:1fr;}.right{height:60vh;}.left{padding:48px 22px 260px;}.year{top:220px;left:26px;transform:none;text-align:left;}.textBlock{position:static;transform:none;width:min(340px,100%);margin-top:26px;}}
      `}</style>
    </main>
  );
}
