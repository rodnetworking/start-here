import { useEffect, useState } from "react";
import { EVENT_DATE, timeLeft } from "@/config/karen-xv";

export function Countdown() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const t = now ? timeLeft(EVENT_DATE, now) : null;
  const items = [
    ["Días", t?.days], ["Horas", t?.hours], ["Minutos", t?.minutes], ["Segundos", t?.seconds],
  ] as const;
  const done = t && Object.values(t).every((v) => v === 0);
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {items.map(([label, v]) => (
          <div key={label} className="rounded-xl border-silver px-1 py-3 text-center shadow-soft sm:py-5">
            <div className="font-serif text-3xl font-semibold tabular-nums text-primary sm:text-5xl">
              {v === undefined ? "--" : String(v).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">{label}</div>
          </div>
        ))}
      </div>
      {done && <p className="mt-4 text-center font-serif text-xl italic text-primary">¡Hoy es el gran día!</p>}
    </div>
  );
}
