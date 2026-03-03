
import "./globals.css";

export const metadata = {
  title: "Émilie Rose",
  description: "Photographie et Art"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
