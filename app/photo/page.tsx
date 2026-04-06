"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "ACCUEIL", href: "/" },
  { label: "IMAGERIE", href: "/photo" },
  { label: "À PROPOS", href: "/about" },
  { label: "FORFAITS", href: "/forfaits" },
  { label: "ÉMILIE ROSE", href: "/" },
  { label: "CONTACT", href: "/contact" },
];

export default function PhotoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <div className={`photo-topBar ${scrolled || menuOpen ? "is-visible" : ""}`} />

      <main className="photo-page">
        <section className="photo-hero">
          <div className="photo-heroTop">
            <div className="photo-heroBrand">
              <h1 className="photo-mainLogo">ÉMILIE ROSE</h1>
              <span className="photo-heroLine" aria-hidden="true" />
            </div>

            <button
              type="button"
              className={`photo-indexButton ${
                scrolled || menuOpen ? "photo-indexButton--floating" : "photo-indexButton--hero"
              }`}
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              INDEX
            </button>
          </div>

          <div className="photo-twoUp photo-twoUp--hero">
            <div className="photo-imageCard photo-imageCard--heroTall">
              <img
                src="/images/photo/01.jpg"
                alt="Photographie lifestyle"
                className="photo-image"
                style={{ objectPosition: "center 24%" }}
              />
            </div>

            <div className="photo-imageCard photo-imageCard--heroTall">
              <img
                src="/images/photo/02.jpg"
                alt="Photographie lifestyle détail"
                className="photo-image"
                style={{ objectPosition: "center 32%" }}
              />
            </div>
          </div>
        </section>

        <section className="photo-twoUp photo-twoUp--bridgeTop">
          <div className="photo-imageCard photo-imageCard--bridge">
            <img
              src="/images/photo/01.jpg"
              alt="Suite de la première photographie"
              className="photo-image"
              style={{ objectPosition: "center 84%" }}
            />
          </div>

          <div className="photo-imageCard photo-imageCard--bridge">
            <img
              src="/images/photo/02.jpg"
              alt="Suite de la deuxième photographie"
              className="photo-image"
              style={{ objectPosition: "center 86%" }}
            />
          </div>
        </section>

        <section className="photo-copyBlock photo-copyBlock--first">
          <div className="photo-copyGrid">
            <div className="photo-copyCounter">
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
          </div>
        </section>

        <section className="photo-featureImageWrap">
          <div className="photo-imageCard photo-imageCard--feature">
            <img
              src="/images/photo/03.jpg"
              alt="Photographie centrale"
              className="photo-image"
              style={{ objectPosition: "center 54%" }}
            />
          </div>
        </section>

        <section className="photo-copyBlock photo-copyBlock--second">
          <div className="photo-editorialText photo-editorialText--second">
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

          <div className="photo-buttons">
            <Link href="/about" className="photo-outlineButton">
              + SUR MON APPROCHE
            </Link>

            <Link href="/photo" className="photo-outlineButton">
              VOIR L&apos;IMAGERIE
            </Link>
          </div>
        </section>

        <section className="photo-footerImageWrap">
          <div className="photo-imageCard photo-imageCard--footerA">
            <img
              src="/images/photo/04.jpg"
              alt="Début de l’image avant le footer"
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
          <div className="photo-menuTopBar" />

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
        .photo-topBar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 74px;
          background: rgba(255, 255, 255, 0.98);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          z-index: 40;
          transform: translateY(-100%);
          transition: transform 0.28s ease;
        }

        .photo-topBar.is-visible {
          transform: translateY(0);
        }

        .photo-page {
          min-height: 100vh;
          background: #efefed;
          color: #111;
          padding: 46px 52px 70px;
          position: relative;
        }

        .photo-hero {
          position: relative;
        }

        .photo-heroTop {
          position: relative;
          min-height: 150px;
          margin-bottom: 48px;
        }

        .photo-heroBrand {
          display: flex;
          align-items: flex-start;
          gap: 36px;
          width: fit-content;
        }

        .photo-mainLogo {
          margin: 0;
          font-family: var(--font-moonscape), serif;
          font-size: clamp(68px, 7vw, 108px);
          font-weight: 300;
          line-height: 0.9;
          letter-spacing: 0;
        }

        .photo-heroLine {
          width: 1px;
          height: 116px;
          background: rgba(0, 0, 0, 0.65);
          margin-top: 2px;
        }

        .photo-indexButton,
        .photo-menuClose {
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
          font-family: var(--font-orbit), Arial, sans-serif;
          font-size: 10px;
          line-height: 1;
          letter-spacing: 0.6em;
          text-transform: uppercase;
          color: #545454;
        }

        .photo-indexButton {
          z-index: 61;
        }

        .photo-indexButton--hero {
          position: absolute;
          right: 0;
          top: 92px;
        }

        .photo-indexButton--floating {
          position: fixed;
          top: 31px;
          right: 52px;
        }

        .photo-twoUp {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .photo-twoUp--hero {
          margin-top: 0;
        }

        .photo-twoUp--bridgeTop {
          margin-top: 34px;
        }

        .photo-imageCard {
          width: 100%;
          overflow: hidden;
          background: #d8d8d6;
        }

        .photo-imageCard--heroTall {
          aspect-ratio: 0.885 / 1;
        }

        .photo-imageCard--bridge {
          aspect-ratio: 2.24 / 0.52;
        }

        .photo-imageCard--feature {
          width: min(100%, 930px);
          margin: 0 auto;
          aspect-ratio: 1.71 / 1;
        }

        .photo-imageCard--footerA {
          width: min(100%, 610px);
          margin: 0 auto;
          aspect-ratio: 1 / 1.14;
        }

        .photo-imageCard--footerB {
          width: min(100%, 610px);
          margin: 0 auto;
          aspect-ratio: 1.52 / 0.66;
        }

        .photo-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .photo-copyBlock--first {
          margin-top: 118px;
        }

        .photo-copyGrid {
          width: min(100%, 760px);
          margin-left: 22%;
          display: grid;
          grid-template-columns: 54px minmax(280px, 420px);
          column-gap: 110px;
          align-items: start;
        }

        .photo-copyCounter {
          display: flex;
          flex-direction: column;
          gap: 9px;
          padding-top: 2px;
          font-family: var(--font-orbit), Arial, sans-serif;
          font-size: 12px;
          line-height: 1;
          letter-spacing: 0.3em;
          color: #1b1b1b;
        }

        .photo-editorialText {
          font-family: "Courier New", monospace;
          font-size: 12px;
          line-height: 1.24;
          letter-spacing: 0.04em;
          color: #1b1b1b;
        }

        .photo-editorialText p {
          margin: 0 0 18px;
        }

        .photo-featureImageWrap {
          margin-top: 62px;
        }

        .photo-copyBlock--second {
          margin-top: 60px;
        }

        .photo-editorialText--second {
          width: min(100%, 360px);
          margin-left: 13%;
        }

        .photo-buttons {
          margin-top: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .photo-outlineButton {
          width: 216px;
          min-height: 39px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.66);
          text-decoration: none;
          background: transparent;
          color: #222;
          font-family: var(--font-orbit), Arial, sans-serif;
          font-size: 10px;
          line-height: 1;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          padding: 10px 16px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .photo-outlineButton:hover {
          background: #111;
          color: #efefed;
        }

        .photo-footerImageWrap {
          margin-top: 86px;
        }

        .photo-footerImageWrap--continuation {
          margin-top: 30px;
        }

        .photo-footer {
          padding: 76px 0 10px;
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
          background: rgba(0, 0, 0, 0.62);
        }

        .photo-footerLinks,
        .photo-footerMeta {
          font-family: var(--font-orbit), Arial, sans-serif;
          font-size: 9px;
          line-height: 1.4;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: #4d4d4d;
        }

        .photo-footerLinks {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .photo-footerLinks a {
          text-decoration: none;
          color: inherit;
        }

        .photo-footerMeta {
          margin: 0;
          text-align: center;
        }

        .photo-menuOverlay {
          position: fixed;
          inset: 0;
          z-index: 90;
          background: #eceae4;
        }

        .photo-menuTopBar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 74px;
          background: rgba(255, 255, 255, 0.98);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .photo-menuClose {
          position: fixed;
          top: 31px;
          right: 52px;
          z-index: 95;
        }

        .photo-menuInner {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 80px;
        }

        .photo-menuTitleWrap {
          display: flex;
          align-items: flex-start;
          gap: 38px;
          margin-bottom: 74px;
        }

        .photo-menuTitle {
          margin: 0;
          font-family: var(--font-moonscape), serif;
          font-size: clamp(76px, 8vw, 122px);
          line-height: 0.9;
          font-weight: 300;
          color: #111;
        }

        .photo-menuTitleLine {
          width: 1px;
          height: 118px;
          background: rgba(0, 0, 0, 0.66);
          margin-top: 2px;
        }

        .photo-menuNav {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .photo-menuLink {
          text-decoration: none;
          color: #2b2b2b;
          font-family: var(--font-orbit), Arial, sans-serif;
          font-size: 18px;
          line-height: 1.25;
          letter-spacing: 0.36em;
          text-transform: uppercase;
        }

        @media (max-width: 1100px) {
          .photo-page {
            padding: 46px 28px 60px;
          }

          .photo-indexButton--floating,
          .photo-menuClose {
            right: 28px;
          }

          .photo-copyGrid {
            margin-left: 10%;
            column-gap: 72px;
          }
        }

        @media (max-width: 768px) {
          .photo-topBar,
          .photo-menuTopBar {
            height: 62px;
          }

          .photo-page {
            padding: 28px 16px 46px;
          }

          .photo-heroTop {
            min-height: auto;
            margin-bottom: 36px;
          }

          .photo-heroBrand {
            gap: 18px;
          }

          .photo-mainLogo {
            font-size: clamp(48px, 16vw, 74px);
          }

          .photo-heroLine,
          .photo-menuTitleLine {
            height: 78px;
          }

          .photo-indexButton--hero {
            position: static;
            display: block;
            margin-left: auto;
            margin-top: 12px;
          }

          .photo-indexButton--floating,
          .photo-menuClose {
            top: 27px;
            right: 16px;
            font-size: 9px;
            letter-spacing: 0.45em;
          }

          .photo-twoUp {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .photo-twoUp--bridgeTop {
            margin-top: 18px;
          }

          .photo-imageCard--bridge {
            aspect-ratio: 1.85 / 0.64;
          }

          .photo-copyBlock--first {
            margin-top: 72px;
          }

          .photo-copyGrid {
            width: 100%;
            margin-left: 0;
            grid-template-columns: 42px minmax(0, 1fr);
            column-gap: 28px;
          }

          .photo-copyCounter {
            font-size: 11px;
          }

          .photo-editorialText,
          .photo-editorialText--second {
            font-size: 11px;
            width: 100%;
            margin-left: 0;
          }

          .photo-featureImageWrap {
            margin-top: 38px;
          }

          .photo-copyBlock--second {
            margin-top: 42px;
          }

          .photo-buttons {
            margin-top: 58px;
            gap: 18px;
          }

          .photo-outlineButton {
            width: min(100%, 250px);
          }

          .photo-footerImageWrap {
            margin-top: 58px;
          }

          .photo-footerImageWrap--continuation {
            margin-top: 18px;
          }

          .photo-menuInner {
            padding: 110px 20px 60px;
          }

          .photo-menuTitleWrap {
            gap: 18px;
            margin-bottom: 42px;
          }

          .photo-menuTitle {
            font-size: clamp(52px, 16vw, 76px);
          }

          .photo-menuLink {
            font-size: 14px;
            letter-spacing: 0.28em;
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
        }
      `}</style>
    </>
  );
}
