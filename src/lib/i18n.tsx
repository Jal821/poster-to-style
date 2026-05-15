import { createContext, useContext, ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";

export type Lang = "sk" | "en" | "de";

export const translations = {
  sk: {
    nav: { home: "Domov", about: "O nás", members: "Členovia", events: "Kalendár", contact: "Kontakt" },
    hero: {
      tagline: "Slovenský jazz s dušou hôr.",
      cta: "Vypočuť Nahrávky",
    },
    about: {
      p1a: "Základom pre názov hudobnej skupiny je album ",
      eccejazz: "Ecce Jazz",
      p1b: " skladateľa a klaviristu ",
      pavol: "Pavla Bodnára",
      p1c: ", ktorý v roku 2006 získal cenu ",
      aurel: "Aurel",
      p1d: " ako najlepší jazzový album roka. Skupinu tvoria renomovaní hudobníci slovenskej jazzovej scény, ako aj charizmatická speváčka s osobitým citlivým prejavom.",
      p2a: "Ecce Jazz Band",
      p2b: " má v programe autorské kompozície z dielne Pavla Bodnára, ktoré organickým spôsobom prepájajú severoamerický a juhoamerický jazz so slovenskou melodikou. Program skupiny zahŕňa skladby z albumov ",
      album1: "ECCE JAZZ",
      p2c: " (Hevhetia 2006), ",
      album2: "Džez a hory",
      p2d: " (Hudobný fond 2020) a obsahuje aj novú aktuálnu tvorbu.",
    },
    single: {
      eyebrow: "Aktuálny singel",
      year: "2026",
      desc: "Dostupný na všetkých streamovacích platformách.",
    },
    members: { title: "ČLENOVIA", roles: { "klavír": "klavír", "husle": "husle", "kontrabas": "kontrabas", "spev": "spev", "bicie": "bicie" } },
    events: {
      eyebrow: "Koncerty",
      title: "KDE NÁS UVIDÍTE",
      empty: "Termíny budú zverejnené čoskoro.",
    },
    contact: { eyebrow: "Spojte sa s nami", title: "KONTAKT" },
    footer: { tagline: "Slovenský jazz · od 2006" },
  },
  en: {
    nav: { home: "Home", about: "About", members: "Members", events: "Calendar", contact: "Contact" },
    hero: {
      tagline: "Slovak jazz with the soul of the mountains.",
      cta: "Listen to Recordings",
    },
    about: {
      p1a: "The band's name is derived from the title of the album ",
      eccejazz: "Ecce Jazz",
      p1b: " by composer and pianist ",
      pavol: "Pavol Bodnár",
      p1c: ", which won the ",
      aurel: "Aurel",
      p1d: " award for best jazz album of the year in 2006. The band consists of renowned musicians from the Slovak jazz scene and a charismatic singer with her own unique, soulful expression.",
      p2a: "The Ecce Jazz Band",
      p2b: " performs original compositions by Pavol Bodnár, which organically blend North and South American jazz with Slovak melodies. The program includes pieces from the albums ",
      album1: "ECCE JAZZ",
      p2c: " (Hevhetia 2006), ",
      album2: "Jazz a hory",
      p2d: " (Hudobný fond 2020), as well as new, recent works.",
    },
    single: {
      eyebrow: "Current single",
      year: "2026",
      desc: "Available on all streaming platforms.",
    },
    members: { title: "MEMBERS", roles: { "klavír": "piano", "husle": "violin", "kontrabas": "double bass", "spev": "vocals", "bicie": "drums" } },
    events: {
      eyebrow: "Concerts",
      title: "WHERE TO SEE US",
      empty: "Dates will be announced soon.",
    },
    contact: { eyebrow: "Get in touch", title: "CONTACT" },
    footer: { tagline: "Slovak jazz · since 2006" },
  },
  de: {
    nav: { home: "Start", about: "Über uns", members: "Mitglieder", events: "Termine", contact: "Kontakt" },
    hero: {
      tagline: "Slowakischer Jazz mit der Seele der Berge.",
      cta: "Aufnahmen anhören",
    },
    about: {
      p1a: "Der Name der Band leitet sich vom Titel des Albums ",
      eccejazz: "Ecce Jazz",
      p1b: " des Komponisten und Pianisten ",
      pavol: "Pavol Bodnár",
      p1c: " ab, das 2006 den ",
      aurel: "Aurel Award",
      p1d: " als bestes Jazzalbum des Jahres gewann. Die Band besteht aus renommierten Musikern der slowakischen Jazzszene und einer charismatischen Sängerin mit ganz eigenem, gefühlvollen Ausdruck.",
      p2a: "Die Ecce Jazz Band",
      p2b: " spielt Eigenkompositionen von Pavol Bodnár, die nord - und südamerikanischen Jazz organisch mit slowakischer Melodik verbinden. Das Programm umfasst Stücke der Alben ",
      album1: "ECCE JAZZ",
      p2c: " (Hevhetia 2006), ",
      album2: "Jazz und Berge",
      p2d: " (Hudobný fond 2020) sowie neue, aktuelle Werke.",
    },
    single: {
      eyebrow: "Aktuelle Single",
      year: "2026",
      desc: "Auf allen Streaming-Plattformen verfügbar.",
    },
    members: { title: "MITGLIEDER", roles: { "klavír": "Klavier", "husle": "Violine", "kontrabas": "Kontrabass", "spev": "Gesang", "bicie": "Schlagzeug" } },
    events: {
      eyebrow: "Konzerte",
      title: "WO SIE UNS SEHEN",
      empty: "Termine werden in Kürze bekannt gegeben.",
    },
    contact: { eyebrow: "Kontaktieren Sie uns", title: "KONTAKT" },
    footer: { tagline: "Slowakischer Jazz · seit 2006" },
  },
} as const;

const LangContext = createContext<Lang>("sk");

export const LangProvider = ({ lang, children }: { lang: Lang; children: ReactNode }) => (
  <LangContext.Provider value={lang}>{children}</LangContext.Provider>
);

export const useLang = () => useContext(LangContext);
export const useT = () => translations[useContext(LangContext)];

export const langPrefix = (lang: Lang) => (lang === "sk" ? "" : `/${lang}`);

export const LanguageSwitcher = () => {
  const current = useLang();
  const location = useLocation();
  // strip current prefix from pathname
  let rest = location.pathname;
  if (rest.startsWith("/en") || rest.startsWith("/de")) rest = rest.slice(3) || "/";
  const langs: Lang[] = ["sk", "en", "de"];
  return (
    <div className="flex items-center gap-1 rounded-full border border-primary-glow/30 bg-background-deep/60 backdrop-blur-md px-1.5 py-1 shadow-[var(--shadow-soft)]">
      {langs.map((l) => {
        const to = `${langPrefix(l)}${rest === "/" ? "" : rest}` || "/";
        const active = l === current;
        return (
          <Link
            key={l}
            to={to}
            className={`px-2.5 py-1 rounded-full font-display text-spaced uppercase text-xs transition-colors ${
              active ? "bg-primary/40 text-primary-glow" : "text-foreground hover:bg-primary/20"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
};
