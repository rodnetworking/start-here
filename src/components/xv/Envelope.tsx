
import { Sparkles } from "./Decor";

interface EnvelopeProps {
  open: boolean;
  onOpen: () => void;
}

export function Envelope({ open, onOpen }: EnvelopeProps) {
  return (
    <div
      className={`env-wrap fixed inset-0 z-30 flex flex-col items-center justify-center overflow-hidden px-5 py-8 ${
        open ? "is-open" : ""
      }`}
      aria-label="Sobre de invitación"
    >
      {/* Fondo de la invitación */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"
      />

      {/* Destellos decorativos */}
      <Sparkles />

      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <p className="animate-rise mb-2 text-center font-serif text-base italic text-muted-foreground sm:text-lg">
            “Un sueño de cuento de hadas está por comenzar…”
          </p>

          <button
            type="button"
            onClick={() => {
              if (!open) onOpen();
            }}
            disabled={open}
            aria-label={
              open
                ? "Abriendo la invitación"
                : "Abrir la invitación de Karen Michell"
            }
            aria-expanded={open}
            className="env-scene animate-float relative mt-14 aspect-[3/2] w-[min(86vw,420px)] cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ring disabled:cursor-default"
          >
            {/* Carta que sale del sobre */}
            <div className="env-letter absolute inset-x-[6%] top-[6%] bottom-[6%] z-10 flex flex-col items-center justify-center rounded-md bg-paper p-3 shadow-card">
              <span className="font-serif text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Mis XV años
              </span>

              <span className="font-script text-4xl text-primary">
                Karen
              </span>
            </div>

            {/* Parte posterior del sobre */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 rounded-lg bg-envelope brightness-90 shadow-card"
            />

            {/* Parte frontal del sobre */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-20 rounded-lg bg-envelope shadow-card"
              style={{
                clipPath:
                  "polygon(0 30%, 50% 62%, 100% 30%, 100% 100%, 0 100%)",
              }}
            />

            {/* Nombres impresos en el sobre */}
            <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-center pb-[6%]">
              <div className="text-center">
                <p className="font-script text-[clamp(1.6rem,7vw,2.4rem)] leading-none text-primary">
                  Karen Michell
                </p>

                <p className="mt-1 font-serif text-[clamp(0.85rem,3.4vw,1.05rem)] tracking-[0.2em] text-foreground">
                  LÓPEZ JUÁREZ
                </p>
              </div>
            </div>

            {/* Solapa que se abre */}
            <div
              aria-hidden="true"
              className="env-flap absolute inset-x-0 top-0 z-30 h-full rounded-t-lg bg-envelope"
              style={{ filter: "brightness(0.97)" }}
            />

            {/* Sello decorativo */}
            <div
              aria-hidden="true"
              className={`absolute left-1/2 top-[44%] z-40 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-opacity duration-500 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="font-script text-2xl">K</span>
            </div>

            {/* Borde plateado */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 z-0 rounded-xl border border-silver/70"
            />
          </button>

          {/* Instrucción para abrir */}
          <p className="animate-hint mt-8 text-center text-sm tracking-wide text-muted-foreground">
            {open
              ? "Tu invitación está por comenzar…"
              : "Toca la carta para abrir tu invitación"}
          </p>
        </div>
      </div>
    </div>
  );
}
