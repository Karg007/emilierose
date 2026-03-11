import localFont from "next/font/local";
import "../styles/globals.css";

const moonscapeThin = localFont({
  src: "../public/fonts/Moonscape Thin TTF.ttf",
  variable: "--font-moonscape",
  display: "block",
});

const orbit = localFont({
  src: "../public/fonts/Orbit-Regular.ttf",
  variable: "--font-orbit",
  display: "block",
});

export const metadata = {
  title: "Émilie Rose",
  description: "Photographie & Art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${moonscapeThin.variable} ${orbit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
