import { assets } from "@/config/karen-xv";
import { Reveal } from "./Decor";

export type FrameVariant = "rise" | "side" | "curtain" | "grow" | "hero";

const tilt: Record<FrameVariant, string> = {
  rise: "",
  side: "-rotate-2",
  curtain: "",
  grow: "rotate-2",
  hero: "",
};

/** Fotografía dentro del marco floral ovalado real (interior transparente). */
export function PhotoFrame({
  src,
  variant,
  caption,
  className = "",
}: {
  src: string;
  variant: FrameVariant;
  caption?: string;
  className?: string;
}) {
  const size = variant === "hero" ? "w-[min(92vw,460px)]" : "w-[min(84vw,380px)]";
  return (
    <Reveal className={`frame-${variant} mx-auto py-6 ${className}`}>
      <figure className={`relative mx-auto aspect-square ${size} ${tilt[variant]}`}>
        <div
          className="frame-photo absolute overflow-hidden rounded-[50%] bg-pearl"
          style={{ left: "26%", top: "14.6%", width: "48.6%", height: "71.4%" }}
        >
          <img src={src} alt="Fotografía de Karen" loading="lazy" className="h-full w-full object-cover object-[50%_30%]" />
        </div>
        <img
          src={assets.frame}
          alt=""
          aria-hidden
          loading="lazy"
          className="frame-ornament pointer-events-none absolute inset-0 h-full w-full drop-shadow-[0_18px_30px_oklch(0.5_0.08_5/0.25)]"
        />
      </figure>
      {caption && <figcaption className="-mt-2 text-center font-script text-3xl text-primary">{caption}</figcaption>}
    </Reveal>
  );
}
