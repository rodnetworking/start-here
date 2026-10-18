import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Music2, Pause, Play } from "lucide-react";
import { assets } from "@/config/karen-xv";

export type MusicHandle = { start: () => void };

export const Music = forwardRef<MusicHandle, { visible: boolean }>(({ visible }, ref) => {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [missing, setMissing] = useState(false);

  const play = () => {
    const a = audio.current;
    if (!a || missing) return;
    a.play().then(() => { setPlaying(true); setBlocked(false); }).catch(() => setBlocked(true));
  };
  useImperativeHandle(ref, () => ({ start: () => { if (!playing) play(); } }));

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); } else play();
  };

  return (
    <>
      <audio ref={audio} src={assets.song} loop preload="auto" onError={() => setMissing(true)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} />
      {visible && (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
          {(blocked || missing) && (
            <span className="rounded-full bg-card/90 px-3 py-1.5 text-xs text-muted-foreground shadow-soft">
              {missing ? "Canción no disponible" : "Toca para escuchar"}
            </span>
          )}
          <button
            type="button"
            onClick={toggle}
            disabled={missing}
            aria-label={playing ? "Pausar música" : "Reproducir música"}
            className="relative grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform active:scale-95 disabled:opacity-50"
          >
            {playing ? <Pause className="size-5" /> : <Play className="size-5 translate-x-px" />}
            {playing && (
              <Music2 aria-hidden className="animate-twinkle absolute -top-1 -left-1 size-4 text-primary" />
            )}
          </button>
        </div>
      )}
    </>
  );
});
Music.displayName = "Music";
