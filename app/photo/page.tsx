import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function PhotoPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--page)", color: "var(--ink)" }}>
      <header style={{ padding: "26px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <Link href="/" style={{ fontFamily: "Orbit, monospace", letterSpacing: ".25em", textTransform: "uppercase", fontSize: 12 }}>
          &lt; retour
        </Link>
      </header>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 24px 70px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 40, alignItems: "start" }}>
          <div>
            <div style={{ display: "inline-block", background: "var(--butter)", padding: "10px 14px" }}>
              <div style={{ fontFamily: "Orbit, monospace", letterSpacing: ".40em", textTransform: "uppercase", fontSize: 12, lineHeight: "16px" }}>
                20<br />26
              </div>
            </div>

            <div style={{ marginTop: 18, fontFamily: "Moonscape, serif", fontWeight: 200, fontSize: "clamp(56px, 6.6vw, 106.667px)", lineHeight: 0.93 }}>
              <Typewriter text="émilie rose" speed={65} />
            </div>

            <div style={{ marginTop: 18, fontFamily: "Orbit, monospace", letterSpacing: ".05em", textTransform: "uppercase", fontSize: 12, lineHeight: 1.8, maxWidth: 520 }}>
              <p style={{ marginTop: 0 }}>
                Enchantée! Moi, c’est Émilie Rose, Photographe lifestyle pour les amoureux des souvenirs candides, uniques et chaleureux. je vous souhaite
                la bienvenue ici, dans mon petit coin créatif du web.
              </p>
              <p>
                L’intégralité du site est en route mais en attendant, écrivez-moi au{" "}
                <a href="mailto:info@emilierose.ca" style={{ textDecoration: "underline" }}>
                  info@emilierose.ca
                </a>{" "}
                pour réserver votre moment photo.
              </p>
              <p>
                Merci à l’avance de me confier vos plus beaux moments. J’ai très hâte de faire votre rencontre et réaliser ces souvenirs avec vous. :)
              </p>
              <p style={{ textAlign: "right" }}>ÉMILIE ROSE xx</p>
            </div>
          </div>

          <aside>
            <div style={{ width: "100%", aspectRatio: "2 / 3", background: "#ddd", border: "1px solid #eee", overflow: "hidden" }} />
            <div style={{ marginTop: 10, fontFamily: "Orbit, monospace", fontSize: 11, letterSpacing: ".18em", opacity: 0.7 }}>
              Image à ajouter plus tard (public/images/...)
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
