"use client";

import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function Photo() {
  return (
    <main className="page">
      <section className="left">
        <div className="hero">
          <h1><Typewriter text="ÉMILIE ROSE" /></h1>
          <div className="vline" />
        </div>

        <div className="year">2 0<br/>2 6</div>

        <div className="copy">
          ENCHANTÉE! MOI, C’EST ÉMILIE ROSE, PHOTOGRAPHE LIFESTYLE.
          <br/><br/>
          <span className="hl">INFO@EMILIEROSE.CA</span>
          <br/><br/>
          <Link href="/">RETOUR</Link>
        </div>
      </section>

      <aside className="right">
        <img src="/images/1.jpg" />
      </aside>

      <style jsx>{`
        .page{display:grid;grid-template-columns:1fr 1fr;min-height:100vh;}
        .left{padding:80px 70px;display:flex;flex-direction:column;justify-content:space-between;}
        .hero{display:flex;align-items:center;gap:30px;}
        h1{font-family:"Moonscape";font-size:120px;margin:0;}
        .vline{width:1px;height:110px;background:#000;}
        .year{letter-spacing:.35em;font-size:11px;}
        .copy{max-width:320px;font-size:11px;}
        .hl{background:var(--highlight);padding:2px 4px;}
        .right img{width:100%;height:100%;object-fit:cover;}
      `}</style>
    </main>
  );
}
