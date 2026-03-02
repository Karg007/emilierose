import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Émilie Rose",
  description: "Photographie & Art - emilierose.ca"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr-CA">
      <body>{children}</body>
    </html>
  );
}
