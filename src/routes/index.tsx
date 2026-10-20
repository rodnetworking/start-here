
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
      { title: "XV años de Karen Michell López Juárez | Rodnet" },
      {
        name: "description",
        content:
          "Acompáñanos a celebrar los XV años de Karen Michell López Juárez. Una invitación especial para un día lleno de magia, recuerdos y momentos inolvidables.",
      },
      {
        property: "og:title",
        content: "XV años de Karen Michell López Juárez | Rodnet",
      },
      {
        property: "og:description",
        content:
          "Acompáñanos a celebrar los XV años de Karen Michell López Juárez. Una invitación especial para un día lleno de magia, recuerdos y momentos inolvidables.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "XV años de Karen Michell López Juárez | Rodnet" },
      { name: "twitter:description", content: "Acompáñanos a celebrar los XV años de Karen Michell López Juárez. Una invitación especial para un día lleno de magia, recuerdos y momentos inolvidables." },
      // og:image, twitter:image y og:url se añadirán con el dominio público real al publicar.
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
