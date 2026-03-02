import Link from "next/link";

export default function ArtPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--page)", color: "var(--ink)" }}>
      <header style={{ padding: "26px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <Link href="/" style={{ fontFamily: "Orbit, monospace", letterSpacing: ".25em", textTransform: "uppercase" }}>
          &lt; retour
        </Link>
        <span style={{ margin: "0 10px", opacity: 0.4 }}>|</span>
        <Link href="/photo" style={{ fontFamily: "Orbit, monospace", letterSpacing: ".25em", textTransform: "uppercase" }}>
          photo
        </Link>
      </header>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 24px 70px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 40, alignItems: "start" }}>
          <div>
            <div style={{ display: "inline-block", background: "var(--butter)", padding: "10px 14px" }}>
              <div style={{ fontFamily: "Orbit, monospace", letterSpacing: ".40em", textTransform: "uppercase", fontSize: 12 }}>
                20<br />26
              </div>
            </div>

            <div style={{ marginTop: 18, fontFamily: "Moonscape, serif", fontWeight: 200, fontSize: 56, lineHeight: 1 }}>
              émilie rose
            </div>

            <div style={{ marginTop: 18, fontFamily: "Orbit, monospace", letterSpacing: ".05em", textTransform: "uppercase", fontSize: 12, lineHeight: 1.8, maxWidth: 520 }}>
              <p style={{ marginTop: 0 }}>
                Enchantée! Moi, c’est Émilie Rose, artiste contemporaine et amoureuse de toutes les beautés brutes, nordiques et poétiques.
              </p>
              <p>
                Je vous souhaite la bienvenue ici, dans mon petit coin créatif du web. L’intégralité du site est en route mais en attendant,
                rendez-vous dans ma <span style={{ textDecoration: "underline" }}>boutique Etsy</span> pour zyeuter mes créations disponibles.
              </p>
              <p>À bientôt! xx</p>
              <p style={{ textAlign: "right" }}>ÉMILIE ROSE xx</p>
            </div>
          </div>

          <aside>
            <div style={{ width: "100%", aspectRatio: "2 / 3", background: "#ddd", border: "1px solid #eee" }} />
            <div style={{ marginTop: 10, fontFamily: "Orbit, monospace", fontSize: 11, letterSpacing: ".18em", opacity: 0.7 }}>
              Image à ajouter plus tard (public/images/...)
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
