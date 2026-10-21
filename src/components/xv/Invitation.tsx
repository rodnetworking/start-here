import type { ReactNode } from "react";
import { Church, Gift, MapPin, MessageCircle, Shirt, Sparkle, Wine } from "lucide-react";
import { assets, venues, whatsapp } from "@/config/karen-xv";
import { Countdown } from "./Countdown";
import { PhotoFrame } from "./PhotoFrame";
import { Aurora, Ornament, Reveal, Sparkles } from "./Decor";

function Section({ title, children, icon }: { title: string; children: ReactNode; icon?: ReactNode }) {
  return (
    <Reveal className="mx-auto w-full max-w-2xl px-5 py-12 sm:py-16">
      <div className="text-center">
        {icon && <div className="mb-3 flex justify-center text-primary">{icon}</div>}
        <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">{title}</h2>
        <Ornament className="mt-3" />
      </div>
      <div className="mt-8">{children}</div>
    </Reveal>
  );
}


export function Invitation() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
        <Sparkles />
        <Aurora pose="full" className="animate-rise pointer-events-none mb-[-1.5rem] w-24 opacity-90 sm:w-28" />
        <div className="animate-rise relative rounded-[2rem] border-silver bg-paper/90 px-6 py-10 shadow-card sm:px-14">
          <p className="font-serif text-sm uppercase tracking-[0.4em] text-muted-foreground">Mis XV años</p>
          <h1 className="mt-4 font-script text-[clamp(3rem,15vw,6rem)] leading-[0.95] text-primary">Karen Michell</h1>
          <p className="mt-2 font-serif text-[clamp(1.1rem,5vw,1.6rem)] tracking-[0.25em] text-foreground">LÓPEZ JUÁREZ</p>
          <Ornament className="my-6" />
          <p className="font-serif text-xl text-foreground sm:text-2xl">Sábado 9 de enero de 2027</p>
        </div>
      </section>

      <div className="bg-background/85 backdrop-blur-sm">
        {/* Dedicatoria + Aurora */}
        <Reveal className="mx-auto grid max-w-4xl items-center gap-8 px-5 py-14 md:grid-cols-[1fr_auto]">
          <blockquote className="text-center font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl md:text-left">
            “Igual que la Bella Durmiente, hoy desperté a un sueño hecho realidad donde cada estrella brilla solo para mí. Gracias por acompañarme en el inicio de mi nueva historia. ¡Bienvenidos a mis XV años!”
          </blockquote>
          <div className="relative mx-auto">
            <div aria-hidden className="absolute inset-0 -z-10 rounded-full bg-blush blur-3xl" />
            <Aurora pose="head" className="w-36 sm:w-48" />
          </div>
        </Reveal>

        <PhotoFrame src={assets.photos[0]!} variant="rise" />

        <Section title="Con la bendición de">
          <div className="grid gap-8 text-center sm:grid-cols-2">
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Mis padres</h3>
              <p className="mt-3 font-serif text-xl">Graciela Patricia Juárez García</p>
              <p className="font-serif text-xl">Rafael López Chávez</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Mis padrinos</h3>
              <p className="mt-3 font-serif text-xl">Anette Michelle Carmona Ascencio</p>
              <p className="font-serif text-xl">Alan Leonardo López Juárez</p>
            </div>
          </div>
        </Section>

        <PhotoFrame src={assets.photos[1]!} variant="side" />

        <Section title="Faltan">
          <Countdown />
        </Section>

        <Section title="Evento">
          <div className="grid gap-5 sm:grid-cols-2">
            {venues.map((v, i) => (
              <article key={v.title} className="flex flex-col items-center rounded-2xl border-silver p-6 text-center shadow-soft">
                {i === 0 ? <Church className="size-7 text-primary" /> : <Wine className="size-7 text-primary" />}
                <h3 className="mt-3 font-serif text-2xl">{v.title}</h3>
                <p className="mt-1 text-lg font-medium text-primary">{v.time}</p>
                <p className="mt-3 font-medium">{v.place}</p>
                <p className="mt-1 text-sm text-muted-foreground">{v.address}</p>
                <a href={v.map} target="_blank" rel="noopener noreferrer" className="btn-ornate mt-5">
                  <MapPin className="size-4" /> {i === 0 ? "Ver la iglesia" : "Ver el salón"} en Maps
                </a>
              </article>
            ))}
          </div>
        </Section>

        <PhotoFrame src={assets.photos[2]!} variant="curtain" />
        <PhotoFrame src={assets.photos[3]!} variant="grow" />

        <Section title="Código de vestimenta" icon={<Shirt className="size-7" />}>
          <div className="text-center">
            <p className="font-serif text-2xl">Casual formal</p>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Con cariño te pedimos evitar los colores{" "}
              <strong className="text-foreground">rojo</strong>,{" "}
              <strong className="text-foreground">rosa</strong>,{" "}
              <strong className="text-foreground">morado</strong> y{" "}
              <strong className="text-foreground">plateado</strong>, reservados para la quinceañera.
            </p>
          </div>
        </Section>

        <Section title="Regalos" icon={<Gift className="size-7" />}>
          <p className="mx-auto max-w-md text-center font-serif text-xl italic leading-relaxed">
            “Tu compañía es mi mejor regalo, pero si tienes la intención de hacerme un obsequio, encontrarás un buzón de sobres el día del evento.”
          </p>
        </Section>

        <PhotoFrame src={assets.photos[4]!} variant="hero" caption="Karen Michell" />

        <Section title="Confirma tu asistencia">
          <p className="text-center text-muted-foreground">Por favor confirma antes del <strong className="text-foreground">7 de enero de 2027</strong>.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {whatsapp.map((w) => (
              <a key={w.number} href={w.href} target="_blank" rel="noopener noreferrer" className="btn-ornate btn-ornate-solid w-full sm:w-auto">
                <MessageCircle className="size-4" /> Confirmar al {w.label}
              </a>
            ))}
          </div>
        </Section>

        <Reveal className="mx-auto max-w-xl px-5 pb-10">
          <div className="rounded-2xl bg-secondary/70 p-5 text-center text-sm leading-relaxed text-secondary-foreground">
            <Sparkle className="mx-auto mb-2 size-4 text-primary" />
            Los niños son muy importantes para nosotros. Agradecemos cuidar de los pequeños durante los bailes y tener precaución con la cristalería para evitar accidentes.
          </div>
        </Reveal>

        <footer className="pb-24 pt-6 text-center">
          <p className="font-script text-4xl text-primary">Karen</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">9 · 01 · 2027</p>
        </footer>
      </div>
    </main>
  );
}
