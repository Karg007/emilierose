"use client";
import Link from "next/link";
import Typewriter from "../components/Typewriter";

export default function ArtPage() {
  return (
    <main style={{ padding: "80px", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "70px" }}>
        <Typewriter text="ÉMILIE ROSE" speed={45} />
      </h1>
      <p style={{ marginTop: "40px" }}>
        ARTISTE CONTEMPORAINE.
      </p>
      <div style={{ marginTop: "40px" }}>
        <Link href="/">← RETOUR</Link>
      </div>
    </main>
  );
}
