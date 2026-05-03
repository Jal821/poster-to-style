Nahradiť odkaz `www.eccejazzband.sk` v hornej navigácii za menu so štyrmi položkami, ktoré skrolujú na sekcie stránky.

## Zmeny v `src/pages/Index.tsx`

1. V `<nav>` v hero sekcii (riadky 50–57) odstrániť `<a>` odkaz na web.
2. Pridať `<ul>` menu s položkami:
   - **Domov** → `#top`
   - **Kapela** → `#kapela`
   - **Nahrávky** → `#diskografia`
   - **Kontakt** → `#kontakt`
3. Pridať `id="top"` na koreňový `<div>` (alebo `<header>`) pre odkaz Domov.
4. Štýl menu: `font-display`, uppercase, rozpaľovaný letter-spacing, hover na `text-primary-glow` — konzistentné s existujúcou typografiou.

Footer odkaz na web zostáva nezmenený.