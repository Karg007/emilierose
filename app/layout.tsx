import localFont from "next/font/local";
import Script from "next/script";
import "../styles/globals.css";

const moonscapeThin = localFont({
  src: "../public/fonts/Moonscape Thin TTF.ttf",
  variable: "--font-moonscape",
  display: "block",
  preload: true,
});

const orbit = localFont({
  src: "../public/fonts/Orbit-Regular.ttf",
  variable: "--font-orbit",
  display: "block",
  preload: true,
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
      <body className="app-hidden">
        <Script id="reveal-app" strategy="beforeInteractive">{`
          (function () {
            function reveal() {
              document.body.classList.remove("app-hidden");
              document.body.classList.add("app-ready");
            }

            if (document.fonts && document.fonts.ready) {
              document.fonts.ready.then(reveal).catch(reveal);
            } else {
              window.addEventListener("load", reveal);
            }
          })();
        `}</Script>
        {children}
      </body>
    </html>
  );
}
