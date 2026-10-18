import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import { assets } from "@/config/karen-xv";

export function Gallery() {
  const [broken, setBroken] = useState<Set<string>>(new Set());
  const [idx, setIdx] = useState<number | null>(null);
  const photos = assets.photos.filter((p) => !broken.has(p));

  useEffect(() => {
    if (idx === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % photos.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [idx, photos.length]);

  if (photos.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className={`flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-silver bg-pearl/70 text-muted-foreground ${i === 2 ? "col-span-2 aspect-[3/2] sm:col-span-1 sm:aspect-[3/4]" : ""}`}>
            <ImageIcon className="size-6 text-silver" />
            <span className="text-xs tracking-wide">Fotografía próximamente</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3">
        {assets.photos.map((src) =>
          broken.has(src) ? null : (
            <button key={src} type="button" onClick={() => setIdx(photos.indexOf(src))} className="mb-3 block w-full overflow-hidden rounded-xl shadow-soft">
              <img
                src={src} alt="Fotografía de Karen" loading="lazy"
                onError={() => setBroken((b) => new Set(b).add(src))}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </button>
          ),
        )}
      </div>
      {idx !== null && photos[idx] && (
        <div role="dialog" aria-modal className="animate-in fade-in fixed inset-0 z-[60] flex items-center justify-center bg-foreground/85 p-4" onClick={() => setIdx(null)}>
          <img src={photos[idx]} alt="Fotografía de Karen ampliada" className="max-h-[85vh] max-w-full rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          <button aria-label="Cerrar" className="absolute right-3 top-3 grid size-12 place-items-center rounded-full bg-card/90 text-foreground" onClick={() => setIdx(null)}><X /></button>
          {photos.length > 1 && (
            <>
              <button aria-label="Anterior" className="absolute left-2 grid size-12 place-items-center rounded-full bg-card/80 text-foreground" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + photos.length) % photos.length); }}><ChevronLeft /></button>
              <button aria-label="Siguiente" className="absolute right-2 grid size-12 place-items-center rounded-full bg-card/80 text-foreground" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % photos.length); }}><ChevronRight /></button>
            </>
          )}
        </div>
      )}
    </>
  );
}
