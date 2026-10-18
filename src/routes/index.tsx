
import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import castle from "@/assets/castle.jpg";
import { Envelope } from "@/components/xv/Envelope";
import { Invitation } from "@/components/xv/Invitation";
import { Music, type MusicHandle } from "@/components/xv/Music";
import { Petals } from "@/components/xv/Decor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mis XV años · Karen Michell López Juárez" },
      {
        name: "description",
        content:
          "Invitación a los XV años de Karen Michell López Juárez. Sábado 9 de enero de 2027, Zapopan, Jalisco.",
      },
      {
        property: "og:title",
        content: "Mis XV años · Karen Michell López Juárez",
      },
      {
        property: "og:description",
        content:
          "Un sueño de cuento de hadas está por comenzar. 9 de enero de 2027.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);
  const music = useRef<MusicHandle>(null);

  const handleOpen = () => {
    if (open) return;

    setOpen(true);

    // Intentar iniciar la música con la interacción del usuario.
    music.current?.start();

    // Mantener el sobre durante toda su animación.
    // CSS: 3.4 s de espera + 0.9 s de desvanecimiento.
    window.setTimeout(() => {
      setGone(true);
    }, 4600);
  };

  return (
    <div className="relative min-h-svh">
      {/* Fondo */}
      <img
        src={castle}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1536}
        className="fixed inset-0 -z-10 h-full w-full object-cover opacity-60"
      />

      {/* La invitación aparece al iniciar la apertura */}
      {open && <Invitation />}

      {/* El sobre se mantiene montado hasta terminar su transición */}
      {!gone && <Envelope open={open} onOpen={handleOpen} />}

      {/* Pétalos decorativos durante la transición */}
      {open && !gone && <Petals />}

      {/* Música */}
      <Music ref={music} visible={open} />
    </div>
  );
}
