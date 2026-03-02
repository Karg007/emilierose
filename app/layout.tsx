import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Émilie Rose",
  description: "Photographie & Art - emilierose.ca",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA">
      <body>{children}</body>
    </html>
  );
}
