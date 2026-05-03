import { Music, ExternalLink, Disc3, Headphones } from "lucide-react";
import logo from "@/assets/logo.webp";
import pavolBodnar from "@/assets/pavol-bodnar.webp";
import stanislavPaluch from "@/assets/stanislav-paluch.webp";
import jurajGriglak from "@/assets/juraj-griglak.webp";
import elenaBodnarova from "@/assets/elena-bodnarova.webp";
import peterSolarik from "@/assets/peter-solarik.webp";

const members = [
  { name: "Pavol Bodnár", role: "klavír / kompozície", img: pavolBodnar, position: "20% center" },
  { name: "Stanislav Palúch", role: "husle", img: stanislavPaluch },
  { name: "Juraj Griglák", role: "kontrabas", img: jurajGriglak },
  { name: "Mária Elena Bodnárová", role: "spev", img: elenaBodnarova },
  { name: "Peter Solárik", role: "bicie", img: peterSolarik },
];

const albums = [
  { title: "ECCE JAZZ", year: "2006", label: "Hevhetia", note: "Cena Aurel — najlepší jazzový album roka" },
  { title: "Džez a hory", year: "2020", label: "Hudobný fond", note: "Slovenská melodika v jazzovom prevedení" },
  { title: "ZAHORAMI", year: "2026", label: "Singel", note: "Aktuálny singel — dostupný na streamovacích platformách" },
];

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
  return (
    <div id="top" className="min-h-screen poster-bg text-foreground overflow-x-hidden">
      {/* HERO */}
      <header className="relative">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute -top-20 -left-20 w-[60%] h-[55%] bg-gradient-to-br from-primary/15 to-transparent rotate-12 rounded-3xl" />
          <div className="absolute top-1/3 -right-32 w-[55%] h-[60%] bg-gradient-to-tl from-background-deep/80 to-transparent -rotate-6 rounded-3xl"
               style={{ background: "linear-gradient(225deg, hsl(217 50% 10% / 0.6), transparent)" }} />
        </div>

        <nav className="relative max-w-6xl mx-auto px-6 pt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MountainBadge size={44} />
            <span className="font-display text-spaced text-sm uppercase">Ecce Jazz</span>
          </div>
          <ul className="flex items-center gap-1 md:gap-2 font-display text-spaced uppercase text-sm md:text-base font-semibold rounded-full border border-primary-glow/30 bg-background-deep/60 backdrop-blur-md px-2 py-1.5 shadow-[var(--shadow-soft)]">
            {[
              { href: "#top", label: "Domov" },
              { href: "#kapela", label: "O nás" },
              { href: "#clenovia", label: "Kapela" },
              { href: "#diskografia", label: "Nahrávky" },
              { href: "#kontakt", label: "Kontakt" },
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
        </nav>

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
          <p className="font-display italic text-primary-glow mb-6 tracking-widest text-sm uppercase">
            Slovenská jazzová formácia
          </p>
          <h1 className="font-display text-spaced text-5xl sm:text-7xl md:text-8xl font-medium leading-[1.05]">
            ECCE JAZZ
            <br />
            BAND
          </h1>
          <div className="mt-10 mx-auto h-px w-24 bg-primary-glow/50" />
          <p className="mt-10 font-display italic text-xl text-muted-foreground max-w-2xl mx-auto">
            „Severoamerický a juhoamerický jazz organicky prepojený so slovenskou melodikou."
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href="#singel"
              className="pill-teal px-7 py-3 font-display text-spaced uppercase text-sm hover:opacity-90 transition"
            >
              Vypočuť ZAHORAMI
            </a>
            <a
              href="#kapela"
              className="px-7 py-3 font-display text-spaced uppercase text-sm border border-foreground/30 rounded-full hover:border-foreground transition"
            >
              O kapele
            </a>
          </div>
        </div>
      </header>

      {/* O KAPELE */}
      <section id="kapela" className="relative diagonal-panel py-28 bg-accent">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[auto_1fr] gap-12 items-start">
          <MountainBadge size={120} />
          <div className="space-y-8 font-body text-lg leading-relaxed text-foreground/95">
            <p>
              Základom pre názov hudobnej skupiny je album <em className="font-display not-italic font-semibold">Ecce Jazz</em> skladateľa
              a klaviristu <strong className="font-semibold">Pavla Bodnára</strong>, ktorý v roku 2006 získal cenu <em className="text-primary-glow not-italic">Aurel</em> ako
              najlepší jazzový album roka. Skupinu tvoria renomovaní hudobníci slovenskej jazzovej scény, ako aj
              charizmatická speváčka s osobitým citlivým prejavom.
            </p>
            <p>
              <strong className="font-semibold">Ecce Jazz Band</strong> má v programe autorské kompozície z dielne Pavla Bodnára,
              ktoré organickým spôsobom prepájajú severoamerický a juhoamerický jazz so slovenskou melodikou. Program
              skupiny zahŕňa skladby z albumov <em className="font-display not-italic">ECCE JAZZ</em> (Hevhetia 2006),
              <em className="font-display not-italic"> Džez a hory</em> (Hudobný fond 2020) a obsahuje aj novú aktuálnu tvorbu.
            </p>
          </div>
        </div>
      </section>

      {/* SINGEL */}
      <section id="singel" className="relative py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="pill-teal px-10 py-12 md:px-16 md:py-14 text-center shadow-[var(--shadow-soft)]">
            <p className="font-display italic uppercase text-spaced text-xs mb-3 text-foreground/80">
              Aktuálny singel
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-spaced">ZAHORAMI</h2>
            <p className="font-display italic text-xl mt-3 text-foreground/85">2026</p>
            <p className="mt-6 font-body text-foreground/90 max-w-xl mx-auto">
              Dostupné na všetkých streamovacích platformách.
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
      <section id="clenovia" className="relative diagonal-panel py-28 bg-accent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-display italic text-primary-glow mb-3 tracking-widest text-xs uppercase">Zostava</p>
            <h2 className="font-display text-spaced text-4xl md:text-5xl">ČLENOVIA</h2>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {members.map((m) => (
              <li key={m.name} className="text-center">
                <div className="overflow-hidden rounded-[1.5rem] aspect-[3/5] bg-[hsl(var(--background-deep))] shadow-[var(--shadow-portrait)] mb-5 -skew-y-[8deg] transform-gpu">
                  <img
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    width={512}
                    height={768}
                    loading="lazy"
                    style={{ objectPosition: (m as any).position ?? "top" }}
                    className="w-full h-full object-cover skew-y-[8deg] scale-110 hover:scale-[1.18] transition-transform duration-700"
                  />
                </div>
                <p className="font-display text-spaced uppercase text-sm leading-tight">
                  {m.name.split(" ").map((part, i) => (
                    <span key={i} className="block">{part}</span>
                  ))}
                </p>
                <p className="font-display italic text-xs text-muted-foreground mt-2">{m.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DISKOGRAFIA */}
      <section id="diskografia" className="relative py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-display italic text-primary-glow mb-3 tracking-widest text-xs uppercase">Hudba</p>
            <h2 className="font-display text-spaced text-4xl md:text-5xl">DISKOGRAFIA</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {albums.map((a) => (
              <article
                key={a.title}
                className="relative p-8 rounded-[1.5rem] bg-card border border-border hover:border-primary-glow/60 transition-colors group"
              >
                <div className="flex items-start justify-between mb-6">
                  <MountainBadge size={56} />
                  <span className="font-display italic text-primary-glow">{a.year}</span>
                </div>
                <h3 className="font-display text-spaced text-2xl mb-2">{a.title}</h3>
                <p className="font-display italic text-sm text-muted-foreground mb-4">{a.label}</p>
                <p className="font-body text-sm text-foreground/85 leading-relaxed">{a.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="relative py-24">
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
      <footer className="diagonal-panel border-t border-border/50 py-14">
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
