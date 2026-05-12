import { useEffect, useState } from "react";
import { Music, ExternalLink, Disc3, Headphones } from "lucide-react";
import logo from "@/assets/logo.webp";
import pavolBodnar from "@/assets/pavol-bodnar.webp";
import stanislavPaluch from "@/assets/stanislav-paluch.webp";
import jurajGriglak from "@/assets/juraj-griglak.webp";
import elenaBodnarova from "@/assets/elena-bodnarova.webp";
import peterSolarik from "@/assets/peter-solarik.webp";
import { supabase } from "@/integrations/supabase/client";
import { useT, LanguageSwitcher } from "@/lib/i18n";

type RoleKey = "klavír" | "husle" | "kontrabas" | "spev" | "bicie";

const members: Array<{ name: string; role: RoleKey; img: string; position?: string; nameParts?: string[] }> = [
  { name: "Pavol Bodnár", role: "klavír", img: pavolBodnar, position: "20% center" },
  { name: "Stanislav Palúch", role: "husle", img: stanislavPaluch },
  { name: "Juraj Griglák", role: "kontrabas", img: jurajGriglak },
  { name: "Mária Elena Bodnárová", role: "spev", img: elenaBodnarova, position: "center top", nameParts: ["Mária Elena", "Bodnárová"] },
  { name: "Peter Solárik", role: "bicie", img: peterSolarik },
];

type EventRow = {
  id: string;
  event_date: string;
  event_time: string;
  city: string;
  venue: string;
};

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}. ${m}. ${y}`;
};

const MountainBadge = ({ size = 80 }: { size?: number }) => (
  <img
    src={logo}
    alt="Ecce Jazz Band logo"
    width={size}
    height={size}
    className="shrink-0 object-contain"
    style={{ width: size, height: size }}
  />
);

const Index = () => {
  const t = useT();
  const [events, setEvents] = useState<EventRow[]>([]);

  useEffect(() => {
    supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: true })
      .then(({ data }) => setEvents(data ?? []));
  }, []);

  return (
    <div id="top" className="min-h-screen poster-bg text-foreground overflow-x-hidden">
      {/* HERO */}
      <header className="relative">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute -top-20 -left-20 w-[60%] h-[55%] bg-gradient-to-br from-primary/15 to-transparent rotate-12 rounded-3xl" />
          <div className="absolute top-1/3 -right-32 w-[55%] h-[60%] bg-gradient-to-tl from-background-deep/80 to-transparent -rotate-6 rounded-3xl"
               style={{ background: "linear-gradient(225deg, hsl(217 50% 10% / 0.6), transparent)" }} />
        </div>

        <nav className="relative max-w-6xl mx-auto px-6 pt-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <MountainBadge size={96} />
            <span className="font-display text-spaced text-sm uppercase">​</span>
          </div>
          <ul className="flex items-center gap-1 md:gap-2 font-display text-spaced uppercase text-sm md:text-base font-semibold rounded-full border border-primary-glow/30 bg-background-deep/60 backdrop-blur-md px-2 py-1.5 shadow-[var(--shadow-soft)]">
            {[
              { href: "#top", label: t.nav.home },
              { href: "#kapela", label: t.nav.about },
              { href: "#clenovia", label: t.nav.members },
              { href: "#podujatia", label: t.nav.events },
              { href: "#kontakt", label: t.nav.contact },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-3 md:px-4 py-2 rounded-full text-foreground hover:bg-primary/30 hover:text-primary-glow transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </nav>

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 text-center bg-inherit">
          <p className="font-display italic text-primary-glow mb-6 tracking-widest text-sm uppercase">
            &nbsp;
          </p>
          <h1 className="text-spaced text-5xl sm:text-7xl md:text-8xl leading-[1.05] text-center px-[10px] py-[10px] border-secondary border-solid shadow opacity-100 rounded-full pl-[20px] pt-[20px] pr-[20px] pb-[20px] my-0 mx-px mr-[50px] mb-[50px] ml-[50px] mt-[50px] bg-inherit border-0 font-extrabold font-serif">
            ECCE JAZZ
            <span className="block mt-6 md:mt-10">BAND</span>
          </h1>
          <p className="mt-10 font-display italic text-3xl md:text-4xl text-muted-foreground max-w-3xl mx-auto text-center">
            {t.hero.tagline}
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href="#singel"
              className="pill-teal px-7 py-3 font-display text-spaced uppercase text-sm hover:opacity-90 transition"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </header>

      {/* O KAPELE */}
      <section id="kapela" className="relative bg-primary mt-0 pt-[60px] py-[6px] pb-[82px] text-justify">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 items-stretch text-center px-0">
          <img
            src={logo}
            alt="Ecce Jazz Band logo"
            className="shrink-0 object-contain h-full w-auto self-stretch max-h-[420px] mb-0 pb-0 pt-0 mt-0 text-justify"
          />
          <div className="space-y-8 font-body text-lg leading-relaxed text-foreground/95 mb-0 my-0 mt-0">
            <p>
              {t.about.p1a}<em className="font-display not-italic font-semibold">{t.about.eccejazz}</em>{t.about.p1b}<strong className="font-semibold">{t.about.pavol}</strong>{t.about.p1c}<em className="text-primary-glow not-italic">{t.about.aurel}</em>{t.about.p1d}
            </p>
            <p>
              <strong className="font-semibold">{t.about.p2a}</strong>{t.about.p2b}<em className="font-display not-italic">{t.about.album1}</em>{t.about.p2c}<em className="font-display not-italic">{t.about.album2}</em>{t.about.p2d}
            </p>
          </div>
        </div>
      </section>

      {/* SINGEL */}
      <section id="singel" className="relative py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="pill-teal px-10 py-12 md:px-16 md:py-14 text-center shadow-[var(--shadow-soft)]">
            <p className="font-display italic uppercase text-spaced text-xs mb-3 text-foreground/80">
              {t.single.eyebrow}
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-spaced">ZAHORAMI</h2>
            <p className="font-display italic text-xl mt-3 text-foreground/85">{t.single.year}</p>
            <p className="mt-6 font-body text-foreground/90 max-w-xl mx-auto">
              {t.single.desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a className="px-6 py-2.5 rounded-full bg-background/30 hover:bg-background/50 transition font-display text-spaced uppercase text-xs flex items-center gap-2"
                href="https://open.spotify.com/album/63vpUqJvQ7yyKXfa1Lot3x?si=s12xxcocRxaxXM611Rvqjw" target="_blank" rel="noreferrer">
                <Music size={14} /> Spotify
              </a>
              <a className="px-6 py-2.5 rounded-full bg-background/30 hover:bg-background/50 transition font-display text-spaced uppercase text-xs flex items-center gap-2"
                href="https://music.apple.com/us/album/zahorami-single/1894092068" target="_blank" rel="noreferrer">
                <Disc3 size={14} /> Apple Music
              </a>
              <a className="px-6 py-2.5 rounded-full bg-background/30 hover:bg-background/50 transition font-display text-spaced uppercase text-xs flex items-center gap-2"
                href="https://youtube.com/playlist?list=OLAK5uy_neKiYoyxBmsv8KGczUV3EiOwu-mChyY2U&si=_SMtddh7aaq_yWVq" target="_blank" rel="noreferrer">
                <ExternalLink size={14} /> YouTube
              </a>
              <a className="px-6 py-2.5 rounded-full bg-background/30 hover:bg-background/50 transition font-display text-spaced uppercase text-xs flex items-center gap-2"
                href="https://link.deezer.com/s/33ahcHZ6E8c3KX1zBkzMm" target="_blank" rel="noreferrer">
                <Headphones size={14} /> Deezer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ČLENOVIA */}
      <section id="clenovia" className="relative py-28 bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            
            <h2 className="font-display text-spaced text-4xl md:text-5xl mt-0 text-center">{t.members.title}</h2>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-2 items-start">
            {members.map((m) => (
              <li key={m.name} className="text-center">
                <div className="overflow-hidden rounded-[1.5rem] aspect-[3/5] bg-[hsl(var(--background-deep))] shadow-[var(--shadow-portrait)] mb-3 -skew-x-[14deg] transform-gpu ring-1 ring-primary-glow/40 mx-auto w-full">
                  <img
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    width={512}
                    height={768}
                    loading="lazy"
                    style={{ objectPosition: (m as any).position ?? "top" }}
                    className="w-full h-full object-cover skew-x-[14deg] scale-110 hover:scale-[1.18] transition-transform duration-700"
                  />
                </div>
                <p className="font-display text-spaced uppercase text-sm leading-tight -translate-x-3">
                  {((m as any).nameParts ?? m.name.split(" ")).map((part: string, i: number) => (
                    <span key={i} className="block text-center mr-[50px] mt-0">{part}</span>
                  ))}
                </p>
                <p className="font-display italic text-sm md:text-base text-muted-foreground mt-2 -translate-x-3 mx-[50px] ml-0">{t.members.roles[m.role]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* KDE NÁS UVIDÍTE */}
      <section id="podujatia" className="relative py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-display italic text-primary-glow mb-3 tracking-widest text-xs uppercase">Koncerty</p>
            <h2 className="font-display text-spaced text-4xl md:text-5xl">KDE NÁS UVIDÍTE</h2>
          </div>

          {events.length === 0 ? (
            <p className="text-center font-display italic text-muted-foreground">
              Termíny budú zverejnené čoskoro.
            </p>
          ) : (
            <ul className="divide-y divide-border/60 border-y border-border/60">
              {events.map((e) => (
                <li
                  key={e.id}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-2 md:gap-8 items-baseline py-6 px-2 hover:bg-card/40 transition-colors"
                >
                  <span className="font-display italic text-primary-glow text-lg">{formatDate(e.event_date)}</span>
                  <div>
                    <p className="font-display text-spaced uppercase text-xl">{e.city}</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">{e.venue}</p>
                  </div>
                  <span className="font-display text-spaced uppercase text-sm text-foreground/80">{e.event_time}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="relative py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display italic text-primary-glow mb-3 tracking-widest text-xs uppercase">Spojte sa s nami</p>
          <h2 className="font-display text-spaced text-4xl md:text-5xl mb-10">KONTAKT</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center font-display text-lg">
            <a href="mailto:info@eccejazz.sk" className="hover:text-primary-glow transition-colors">
              info@eccejazz.sk
            </a>
            <span className="hidden sm:block h-4 w-px bg-foreground/30" />
            <a href="tel:+421908783388" className="hover:text-primary-glow transition-colors">
              +421 908 783 388
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-14 bg-popover">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <MountainBadge size={48} />
            <div>
              <p className="font-display text-spaced uppercase text-sm">Ecce Jazz Band</p>
              <p className="font-display italic text-xs text-muted-foreground">Slovenský jazz · od 2006</p>
            </div>
          </div>
          <a
            href="https://www.eccejazzband.sk"
            target="_blank"
            rel="noreferrer"
            className="font-display italic hover:text-primary-glow transition-colors"
          >
            www.eccejazzband.sk
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
