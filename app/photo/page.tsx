"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { label: "ACCUEIL", href: "/" },
  { label: "IMAGERIE", href: "/photo" },
  { label: "À PROPOS", href: "/about" },
  { label: "FORFAITS", href: "/forfaits" },
  { label: "ÉMILIE ROSE", href: "/" },
  { label: "CONTACT", href: "/contact" },
];

export default function PhotoPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <main className="photo-page">
        <button
          type="button"
          className="photo-indexButton"
          onClick={() => setMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          INDEX
        </button>

        <section className="photo-hero">
          <div className="photo-heroBrand">
            <h1 className="photo-mainLogo">ÉMILIE ROSE</h1>
            <span className="photo-heroLine" aria-hidden="true" />
          </div>

          <div className="photo-twoUp photo-twoUp--hero">
            <div className="photo-imageCard photo-imageCard--tall">
              <img
                src="/images/photo/01.jpg"
                alt="Portrait lifestyle"
                className="photo-image"
                style={{ objectPosition: "center 28%" }}
              />
            </div>

            <div className="photo-imageCard photo-imageCard--tall">
              <img
                src="/images/photo/02.jpg"
                alt="Portrait lifestyle détail"
                className="photo-image"
                style={{ objectPosition: "center 36%" }}
              />
            </div>
          </div>
        </section>

      

        <section className="photo-textSection photo-textSection--first">
          <div className="photo-counter">
            <span>01</span>
            <span>05</span>
          </div>

          <div className="photo-editorialText">
            <p>
              Les fesses toutes neuves de bébé.
              <br />
              Vergetures de maternité.
              <br />
              Draps de coton fripés.
            </p>

            <p>
              Les petites couettes de travers.
              <br />
              Le chandail mis à l&apos;envers,
            </p>

            <p>
              Tague, cache-cache, sauts dans le lit.
              <br />
              Crises de larme.
              <br />
              Crises d&apos;amour.
              <br />
              ...
            </p>
          </div>
        </section>

        <section className="photo-featureImageWrap">
          <div className="photo-imageCard photo-imageCard--feature">
            <img
              src="/images/photo/03.jpg"
              alt="Moment en famille"
              className="photo-image"
              style={{ objectPosition: "center 52%" }}
            />
          </div>
        </section>

        <section className="photo-textSection photo-textSection--second">
          <div className="photo-editorialText photo-editorialText--left">
            <p>
              Ces moments trop anodins.
              <br />
              Si simples et imparfaits qu&apos;on les
              <br />
              banalise ou qu&apos;on tente de les
              <br />
              maquiller ...
            </p>

            <p>
              Et si on les célébrait ?
              <br />
              Si c&apos;était ceux qui comptaient
              <br />
              vraiment, à la fin ?
            </p>
          </div>

          <div className="photo-ctaGroup">
            <Link href="/about" className="photo-outlineButton">
              + SUR MON APPROCHE
            </Link>
            <Link href="/photo" className="photo-outlineButton">
              VOIR L&apos;IMAGERIE
            </Link>
          </div>
        </section>

        <section className="photo-footerImageWrap">
          <div className="photo-imageCard photo-imageCard--footerStart">
            <img
              src="/images/photo/04.jpg"
              alt="Main d'un parent et d'un enfant"
              className="photo-image"
              style={{ objectPosition: "center 18%" }}
            />
          </div>
        </section>

        <footer className="photo-footer">
          <div className="photo-footerMonogram">
            <span>É</span>
            <span className="photo-footerMonogramLine" aria-hidden="true" />
            <span>R</span>
          </div>

          <nav className="photo-footerLinks" aria-label="Réseaux sociaux">
            <a href="#" target="_blank" rel="noreferrer">
              INSTAGRAM
            </a>
            <span>|</span>
            <a href="#" target="_blank" rel="noreferrer">
              PINTEREST
            </a>
            <span>|</span>
            <a href="#" target="_blank" rel="noreferrer">
              FACEBOOK
            </a>
          </nav>

          <p className="photo-footerMeta">
            PHOTOGRAPHE LAURENTIDES &amp; MONTRÉAL | QC, CA | 2026
          </p>
        </footer>
      </main>

      {menuOpen && (
        <div
          className="photo-menuOverlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          <button
            type="button"
            className="photo-menuClose"
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            FERMER X
          </button>

          <div className="photo-menuInner">
            <div className="photo-menuTitleWrap">
              <h2 className="photo-menuTitle">INDEX:</h2>
              <span className="photo-menuTitleLine" aria-hidden="true" />
            </div>

            <nav className="photo-menuNav" aria-label="Navigation principale">
              {menuItems.map((item) => (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className="photo-menuLink"
                  onClick={() => setMenuOpen(false)}
                >
                  . {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        .photo-page {
          min-height: 100vh;
          background: #efefed;
          color: #111;
          padding: 58px 52px 70px;
          position: relative;
        }

        .photo-indexButton,
        .photo-menuClose {
          position: fixed;
          top: 28px;
          right: 50px;
          z-index: 60;
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
          font-family: var(--font-orbit), Arial, sans-serif;
          font-size: 10px;
          line-height: 1;
          letter-spacing: 0.6em;
          color: #5b5b5b;
          text-transform: uppercase;
        }

        .photo-hero {
          margin-top: 2px;
        }

        .photo-heroBrand {
          display: flex;
          align-items: flex-start;
          gap: 38px;
          margin-bottom: 64px;
        }

        .photo-mainLogo {
          margin: 0;
          font-family: var(--font-moonscape), serif;
          font-size: clamp(62px, 7vw, 104px);
          font-weight: 300;
          line-height: 0.92;
          letter-spacing: 0;
        }

        .photo-heroLine {
          width: 1px;
          height: 118px;
          background: rgba(0, 0, 0, 0.6);
          margin-top: 2px;
        }

        .photo-twoUp {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .photo-twoUp--hero {
          margin-top: 8px;
        }

        .photo-twoUp--continuation {
          margin-top: 34px;
        }

        .photo-imageCard {
          overflow: hidden;
          background: #ddd;
          width: 100%;
        }

        .photo-imageCard--tall {
          aspect-ratio: 0.88 / 1;
        }

        .photo-imageCard--wideShort {
          aspect-ratio: 2.2 / 0.52;
        }

        .photo-imageCard--feature {
          width: min(100%, 924px);
          margin: 0 auto;
          aspect-ratio: 1.71 / 1;
        }

        .photo-imageCard--footerStart {
          width: min(100%, 585px);
          margin: 0 auto;
          aspect-ratio: 1 / 1.1;
        }

        .photo-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .photo-textSection {
          position: relative;
        }

        .photo-textSection--first {
          min-height: 420px;
          margin-top: 116px;
        }

        .photo-counter {
          position: absolute;
          left: 21.5%;
          top: 8px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-family: var(--font-orbit), Arial, sans-serif;
          font-size: 13px;
          line-height: 1;
          letter-spacing: 0.28em;
          color: #202020;
        }

        .photo-editorialText {
          width: min(100%, 420px);
          margin-left: 25.5%;
          font-family: "Courier New", monospace;
          font-size: 12px;
          line-height: 1.25;
          letter-spacing: 0.04em;
          color: #1d1d1d;
          white-space: normal;
        }

        .photo-editorialText p {
          margin: 0 0 18px;
        }

        .photo-featureImageWrap {
          margin-top: 52px;
        }

        .photo-textSection--second {
          min-height: 400px;
          margin-top: 56px;
        }

        .photo-editorialText--left {
          margin-left: 12.8%;
        }

        .photo-ctaGroup {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          margin-top: 124px;
        }

        .photo-outlineButton {
          width: 210px;
          min-height: 38px;
          border: 1px solid rgba(0, 0, 0, 0.65);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          text-decoration: none;
          color: #222;
          font-family: var(--font-orbit), Arial, sans-serif;
          font-size: 10px;
          line-height: 1;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .photo-outlineButton:hover {
          background: #111;
          color: #efefed;
        }

        .photo-footerImageWrap {
          margin-top: 84px;
        }

        .photo-footer {
          padding: 72px 0 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .photo-footerMonogram {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: var(--font-moonscape), serif;
          font-size: 60px;
          line-height: 1;
        }

        .photo-footerMonogramLine {
          width: 1px;
          height: 52px;
          background: rgba(0, 0, 0, 0.6);
        }

        .photo-footerLinks,
        .photo-footerMeta {
          font-family: var(--font-orbit), Arial, sans-serif;
          font-size: 9px;
          line-height: 1.4;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: #4a4a4a;
        }

        .photo-footerLinks {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .photo-footerLinks a {
          color: inherit;
          text-decoration: none;
        }

        .photo-footerMeta {
          margin: 0;
          text-align: center;
        }

        .photo-menuOverlay {
          position: fixed;
          inset: 0;
          z-index: 80;
          background: #efefed;
        }

        .photo-menuInner {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .photo-menuTitleWrap {
          display: flex;
          align-items: flex-start;
          gap: 34px;
          margin-bottom: 72px;
        }

        .photo-menuTitle {
          margin: 0;
          font-family: var(--font-moonscape), serif;
          font-size: clamp(70px, 7vw, 116px);
          font-weight: 300;
          line-height: 0.9;
        }

        .photo-menuTitleLine {
          width: 1px;
          height: 118px;
          background: rgba(0, 0, 0, 0.65);
          margin-top: 4px;
        }

        .photo-menuNav {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .photo-menuLink {
          text-decoration: none;
          color: #2d2d2d;
          font-family: var(--font-orbit), Arial, sans-serif;
          font-size: 18px;
          line-height: 1.25;
          letter-spacing: 0.36em;
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
          .photo-page {
            padding: 44px 28px 56px;
          }

          .photo-indexButton,
          .photo-menuClose {
            right: 28px;
          }

          .photo-twoUp {
            gap: 28px;
          }

          .photo-counter {
            left: 8px;
            position: relative;
            top: 0;
            margin-bottom: 34px;
          }

          .photo-editorialText,
          .photo-editorialText--left {
            margin-left: 0;
          }

          .photo-textSection--first,
          .photo-textSection--second {
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .photo-page {
            padding: 28px 16px 44px;
          }

          .photo-indexButton,
          .photo-menuClose {
            top: 18px;
            right: 16px;
            font-size: 9px;
            letter-spacing: 0.45em;
          }

          .photo-heroBrand {
            gap: 18px;
            margin-bottom: 40px;
          }

          .photo-mainLogo {
            font-size: clamp(46px, 16vw, 72px);
          }

          .photo-heroLine,
          .photo-menuTitleLine {
            height: 76px;
          }

          .photo-twoUp {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .photo-imageCard--tall {
            aspect-ratio: 0.82 / 1;
          }

          .photo-imageCard--wideShort {
            aspect-ratio: 1.8 / 0.62;
          }

          .photo-textSection--first {
            margin-top: 72px;
          }

          .photo-featureImageWrap {
            margin-top: 36px;
          }

          .photo-textSection--second {
            margin-top: 38px;
          }

          .photo-editorialText {
            width: 100%;
            font-size: 11px;
          }

          .photo-ctaGroup {
            margin-top: 58px;
          }

          .photo-outlineButton {
            width: min(100%, 250px);
          }

          .photo-imageCard--feature,
          .photo-imageCard--footerStart {
            width: 100%;
          }

          .photo-footer {
            padding-top: 52px;
            gap: 22px;
          }

          .photo-footerMonogram {
            font-size: 46px;
          }

          .photo-footerMonogramLine {
            height: 38px;
          }

          .photo-footerLinks,
          .photo-footerMeta {
            font-size: 8px;
            letter-spacing: 0.24em;
            text-align: center;
          }

          .photo-menuTitleWrap {
            gap: 18px;
            margin-bottom: 46px;
          }

          .photo-menuTitle {
            font-size: clamp(52px, 16vw, 76px);
          }

          .photo-menuLink {
            font-size: 14px;
            letter-spacing: 0.28em;
          }
        }
      `}</style>
    </>
  );
}
