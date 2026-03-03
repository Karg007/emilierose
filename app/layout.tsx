import "../styles/globals.css";

export const metadata = {
  title: "Émilie Rose",
  description: "Photographie & Art"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
