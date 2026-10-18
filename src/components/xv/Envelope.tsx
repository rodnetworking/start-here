import { Aurora, Sparkles } from "./Decor";

export function Envelope({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  return (
    <div className={`env-wrap fixed inset-0 z-30 flex flex-col items-center justify-center overflow-hidden px-5 py-8 ${open ? "is-open" : ""}`}>
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
      <Sparkles />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
        <div className="flex flex-col items-center">
          <p className="animate-rise mb-2 text-center font-serif text-base italic text-muted-foreground sm:text-lg">
            “Un sueño de cuento de hadas está por comenzar…”
          </p>

          <button
            type="button"
            onClick={() => !open && onOpen()}
            disabled={open}
            aria-label="Abrir la invitación"
            className="env-scene animate-float relative mt-14 aspect-[3/2] w-[min(86vw,420px)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ring"
          >
            {/* letter inside */}
            <div className={`env-letter absolute inset-x-[6%] top-[6%] bottom-[6%] z-10 transition-opacity ${open ? "opacity-100" : "opacity-0"} flex flex-col items-center justify-center rounded-md bg-paper p-3 shadow-card`}>
              <span className="font-serif text-xs uppercase tracking-[0.35em] text-muted-foreground">Mis XV años</span>
              <span className="font-script text-4xl text-primary">Karen</span>
            </div>
            {/* envelope body */}
            <div className="absolute inset-0 z-0 rounded-lg bg-envelope brightness-90 shadow-card" />
            <div className="absolute inset-0 z-20 rounded-lg bg-envelope shadow-card" style={{ clipPath: "polygon(0 30%, 50% 62%, 100% 30%, 100% 100%, 0 100%)" }} />
            <div className="absolute inset-0 z-20 flex items-end justify-center pb-[6%]">
              <div className="text-center">
                <p className="font-script text-[clamp(1.6rem,7vw,2.4rem)] leading-none text-primary">Karen Michell</p>
                <p className="mt-1 font-serif text-[clamp(0.85rem,3.4vw,1.05rem)] tracking-[0.2em] text-foreground">LÓPEZ JUÁREZ</p>
              </div>
            </div>
            {/* flap */}
            <div className="env-flap absolute inset-x-0 top-0 z-30 h-full rounded-t-lg bg-envelope" style={{ filter: "brightness(0.97)" }} />
            {/* seal */}
            <div className={`absolute left-1/2 top-[44%] z-40 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-opacity duration-300 ${open ? "opacity-0" : ""}`}>
              <span className="font-script text-2xl">K</span>
            </div>
            <div aria-hidden className="pointer-events-none absolute -inset-2 z-0 rounded-xl border border-silver/70" />
          </button>

          <p className="animate-hint mt-8 text-center text-sm tracking-wide text-muted-foreground">
            Toca la carta para abrir tu invitación
          </p>
        </div>

        <Aurora className="h-auto w-32 sm:w-40 md:w-56" />
      </div>
    </div>
  );
}
