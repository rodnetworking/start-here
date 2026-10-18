import { describe, expect, it } from "vitest";
import { EVENT_DATE, timeLeft, whatsapp } from "@/config/karen-xv";

describe("Invitación XV Karen", () => {
  it("evento el 9 ene 2027 a las 6 pm Guadalajara (00:00 UTC del día 10)", () => {
    expect(EVENT_DATE.toISOString()).toBe("2027-01-10T00:00:00.000Z");
  });
  it("cuenta regresiva no muestra negativos después del evento", () => {
    expect(timeLeft(EVENT_DATE, new Date("2027-02-01"))).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });
  it("calcula tiempo restante", () => {
    expect(timeLeft(EVENT_DATE, new Date("2027-01-08T23:59:59Z")).days).toBe(1);
  });
  it("whatsapp con formato internacional de México", () => {
    expect(whatsapp.map((w) => w.href.split("?")[0])).toEqual([
      "https://wa.me/523313533815",
      "https://wa.me/523317906120",
    ]);
  });
});
