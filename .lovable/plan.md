## Ecce Jazz Band — one-page web

Elegantná jednostránková prezentácia kapely v štýle plagátu: tmavomodrá paleta, serifové nadpisy, jemné geometrické vrstvy v pozadí.

### Farebná paleta (podľa plagátu)
- Pozadie: hlboká navy (#1B2A44 → #0F1B2E gradient s diagonálnymi vrstvami)
- Akcent: tlmená teal/petrol (#3E6B6E) — pre kruhové rámčeky a "pill" bubliny
- Text: krémovo biela (#F4EFE6)
- Fotky členov: zaoblené vertikálne karty s jemným tieňom

### Typografia
- Nadpisy: serif s rozpaľovaným letter-spacingom (Playfair Display / Cormorant) — ako "ECCE JAZZ BAND" na plagáte
- Body text: čistý serif (Lora) pre čitateľnosť, biely

### Sekcie (one-page, scroll)

1. **Hero** — celoobrazovkový navy gradient s diagonálnymi geometrickými plochami, veľký rozpaľovaný titul "ECCE JAZZ BAND", podtitul, CTA "Vypočuť ZAHORAMI" + odkaz na web
2. **O kapele** — dva textové bloky z plagátu (album Ecce Jazz, Pavol Bodnár, cena Aurel 2006; autorské kompozície, prepojenie severoamerického/juhoamerického jazzu so slovenskou melodikou). Vľavo kruhový teal medailón s ikonou hôr.
3. **Aktuálny singel — ZAHORAMI (2026)** — "pill" karta v teal farbe, embed Spotify/YouTube prehrávač
4. **Členovia** — 5 vertikálnych zaoblených fotokariet v rade (Pavol Bodnár, Stanislav Palúch, Juraj Griglák, Mária Elena Bodnárová, Peter Solárik) s menom pod fotkou v rozpaľovanom serife
5. **Hudba / diskografia** — karty albumov: ECCE JAZZ (Hevhetia, 2006), Džez a hory (Hudobný fond, 2020), ZAHORAMI singel (2026); každá s rokom, vydavateľom a odkazom na počúvanie
6. **Footer** — odkaz na www.eccejazzband.sk, sociálne siete (placeholder), copyright

### Vizuálne detaily
- Diagonálne priesvitné navy plochy v pozadí (ako na plagáte)
- Kruhový teal rámček s ikonou hôr (lucide `Mountain`) ako opakujúci sa motív
- Zaoblené "pill" karty pre zvýraznené info
- Plynulé fade-in animácie pri scrolle

### Technické
- React + Tailwind, design tokens v `index.css` (HSL premenné pre navy, teal, krém)
- Tailwind config: rozšírenie palety, serif font family
- Fotky členov — placeholder portréty (neskôr nahraditeľné)
- Plne responzívne (mobile: členovia 2 stĺpce, desktop: 5 v rade)
