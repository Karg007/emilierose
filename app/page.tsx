import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-red)", color: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "70px 24px" }}>
        <div style={{ display: "grid", placeItems: "center", gap: 28 }}>
          <div style={{ fontFamily: "Moonscape, serif", fontWeight: 200, fontSize: 56, lineHeight: 1 }}>
            émilie rose
          </div>

          <div style={{ width: 110, height: 1, background: "var(--cream)", transform: "rotate(90deg)" }} />

          <nav style={{ display: "grid", gap: 12, textAlign: "center" }}>
            <Link
              href="/art"
              style={{ fontFamily: "Orbit, monospace", letterSpacing: ".30em", textTransform: "uppercase", textDecoration: "underline" }}
            >
              art &gt;
            </Link>
            <Link
              href="/photo"
              style={{ fontFamily: "Orbit, monospace", letterSpacing: ".30em", textTransform: "uppercase", textDecoration: "underline" }}
            >
              photo &gt;
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
