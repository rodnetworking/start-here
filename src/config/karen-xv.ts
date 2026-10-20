// Configuración central de la invitación.
// Las imágenes se sirven desde public/assets/karen-xv/.
const BASE = "/assets/karen-xv";

export const assets = {
  auroraFull: `${BASE}/ilustrations/aurora_completa_parada_negra_fondo-transparente.png`,
  auroraHead: `${BASE}/ilustrations/aurora_cabeza_negra_fondo-transparente.png`,
  // Copia del marco original con el óvalo interior vuelto transparente.
  frame: `${BASE}/decorations/marco-floral-ovalado.png`,
  share: `${BASE}/decorations/portada-compartir.jpg`,
  photos: [1, 2, 3, 4, 5].map((n) => `${BASE}/images/foto-0${n}.jpeg`),
};
// 9 de enero de 2027, 6:00 p. m. hora de Guadalajara (UTC-6, sin horario de verano).
export const EVENT_DATE = new Date("2027-01-09T18:00:00-06:00");

const waMsg = encodeURIComponent(
  "¡Hola! Confirmo mi asistencia a los XV años de Karen Michell López Juárez.",
);
export const whatsapp = ["3313533815", "3317906120"].map((n) => ({
  number: n,
  label: `${n.slice(0, 2)} ${n.slice(2, 6)} ${n.slice(6)}`,
  href: `https://wa.me/52${n}?text=${waMsg}`,
}));

const maps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const venues = [
  {
    title: "Ceremonia religiosa",
    time: "6:00 p. m.",
    place: "Iglesia Santa Rita de Casia",
    address: "Av. Guadalupe 1668A, Chapalita Oriente, 45040, Zapopan, Jalisco",
    map: maps("Iglesia Santa Rita de Casia, Av. Guadalupe 1668A, Chapalita Oriente, 45040 Zapopan, Jalisco"),
  },
  {
    title: "Recepción",
    time: "8:00 p. m.",
    place: "Salón de eventos Celebrity",
    address: "Av. Dr. Mateo del Regil 320, El Briseño, 45236, Zapopan, Jalisco",
    map: maps("Salón de eventos Celebrity, Av. Dr. Mateo del Regil 320, El Briseño, 45236 Zapopan, Jalisco"),
  },
];

export function timeLeft(target: Date, now: Date) {
  const ms = Math.max(0, target.getTime() - now.getTime());
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}
