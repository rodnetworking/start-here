import { useEffect, useRef, useState, type ReactNode } from "react";
import { assets } from "@/config/karen-xv";

const STARS = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 53) % 100,
  top: (i * 37) % 100,
  delay: (i % 6) * 0.5,
  size: 3 + (i % 3) * 2,
}));

export function Sparkles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-pearl"
          style={{
            left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 8px 2px var(--pearl)",
          }}
        />
      ))}
    </div>
  );
}

export function Petals({ count = 16 }: { count?: number }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="animate-petal absolute -top-4 block h-3 w-2.5 rounded-[60%_0_60%_0] bg-rose"
          style={{
            left: `${(i * 61) % 100}%`,
            animationDuration: `${4 + (i % 5)}s`,
            animationDelay: `${(i % 8) * 0.25}s`,
            opacity: 0,
            ["--dx" as string]: `${(i % 2 ? 1 : -1) * (30 + (i % 4) * 20)}px`,
          }}
        />
      ))}
    </div>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center justify-center gap-3 text-silver ${className}`}>
      <span className="h-px w-12 bg-silver sm:w-20" />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 3c1.5 2.5 1.5 4.5 0 6-1.5-1.5-1.5-3.5 0-6Z" />
        <path d="M12 21c-1.5-2.5-1.5-4.5 0-6 1.5 1.5 1.5 3.5 0 6Z" />
        <path d="M3 12c2.5-1.5 4.5-1.5 6 0-1.5 1.5-3.5 1.5-6 0Z" />
        <path d="M21 12c-2.5 1.5-4.5 1.5-6 0 1.5-1.5 3.5-1.5 6 0Z" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-silver sm:w-20" />
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setInView(true), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`}>{children}</div>;
}

/** Aurora: carga public/assets/karen-xv/images/aurora.png; si no existe, muestra un espacio provisional. */
export function Aurora({ className = "" }: { className?: string }) {
  const [missing, setMissing] = useState(false);
  if (missing) {
    return (
      <div className={`flex aspect-[2/3] flex-col items-center justify-center rounded-[50%_50%_1rem_1rem] border border-dashed border-silver bg-pearl/60 p-4 text-center ${className}`}>
        <span className="font-script text-3xl text-primary">Aurora</span>
        <span className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">Imagen provisional</span>
      </div>
    );
  }
  return (
    <img
      src={assets.aurora}
      alt="Princesa Aurora"
      onError={() => setMissing(true)}
      className={`object-contain drop-shadow-[0_10px_25px_oklch(0.6_0.1_5/0.35)] ${className}`}
    />
  );
}
