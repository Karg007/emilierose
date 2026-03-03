"use client";

import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function ArtPage() {
  return (
    <main className="page">
      <section className="left">
        <div className="brandRow">
          <h1><Typewriter text="ÉMILIE ROSE" speed={45} /></h1>
          <div className="vline" />
        </div>

        <div className="year">2 0<br/>2 6</div>

        <div className="copy">
          ARTISTE CONTEMPORAINE.
          <br/><br/>
          BOUTIQUE <span className="hl">ETSY</span>
          <br/><br/>
          <div className="back">
            <Link href="/">RETOUR</Link>
          </div>
        </div>
      </section>

      <aside className="right">
        <img src="/images/2.jpg" alt="" />
      </aside>

      <style jsx>{`
        .page { min-height:100vh; display:grid; grid-template-columns:1fr 1fr; }
        .left { padding:60px; display:flex; flex-direction:column; justify-content:space-between; }
        .brandRow { display:flex; gap:20px; align-items:center; }
        h1 { font-size:clamp(60px,6vw,120px); margin:0; }
        .vline { width:1px; height:100px; background:#000; }
        .year { letter-spacing:.3em; font-size:11px; }
        .copy { max-width:300px; font-size:11px; }
        .hl { background:#f3f7ce; padding:2px 4px; }
        .right img { width:100%; height:100%; object-fit:cover; }
        @media(max-width:900px){ .page{grid-template-columns:1fr;} .right{height:50vh;} }
      `}</style>
    </main>
  );
}
