"use client";
import Link from "next/link";
import Typewriter from "./components/Typewriter";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
      background: "#b23a2f",
      color: "#ffe7d8"
    }}>
      <h1 style={{ fontSize: "80px", margin: 0 }}>
        <Typewriter text="ÉMILIE ROSE" speed={45} />
      </h1>
      <div style={{ display: "flex", gap: "30px", fontSize: "14px", letterSpacing: "0.3em" }}>
        <Link href="/photo">PHOTO</Link>
        <Link href="/art">ART</Link>
      </div>
    </main>
  );
}
