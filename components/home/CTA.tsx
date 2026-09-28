"use client";

import { CheckCircle2, Clock3, ShieldCheck } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTA() {
  function goToQuote() {
    document.getElementById("cotizacion")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <Section
      className="
        border-t
        border-[#0D2D4B]
        bg-[#0B2945]
        !py-0
      "
    >
      <Container>
        <div
          className="
            relative
            overflow-hidden
            py-10
            sm:py-11
            lg:py-12
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-28
              h-80
              w-80
              rounded-full
              border-[32px]
              border-[#183F61]
              opacity-60
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-8
              -bottom-28
              h-72
              w-72
              rounded-full
              border-[28px]
              border-[#173C5D]
              opacity-50
            "
          />

          <div
            className="
              relative
              z-10
              grid
              items-center
              gap-8
              lg:grid-cols-[1.5fr_auto_1fr]
              lg:gap-12
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/65
                  sm:text-xs
                "
              >
                Tu salud, en buenas manos
              </p>

              <h2
                className="
                  mt-2
                  max-w-xl
                  text-2xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  text-white
                  sm:text-3xl
                  lg:text-[34px]
                "
              >
                Cotiza hoy y recibe las mejores alternativas para tu situación
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-white/75
                  sm:text-base
                "
              >
                Asesoría gratuita, rápida y personalizada.
              </p>
            </div>

            <div className="lg:justify-self-center">
              <Button
                onClick={goToQuote}
                className="
                  min-w-[200px]
                  border-[#16A66A]
                  bg-[#16A66A]
                  px-7
                  text-sm
                  hover:border-[#118455]
                  hover:bg-[#118455]
                "
              >
                Cotizar mi plan ahora
                <span className="ml-2">→</span>
              </Button>
            </div>

            <div className="space-y-3 lg:justify-self-end">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[#16D28A]"
                  strokeWidth={2}
                />

                <span className="text-xs font-medium text-white/90">
                  Sin costo ni compromiso
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3
                  className="h-4 w-4 shrink-0 text-[#16D28A]"
                  strokeWidth={2}
                />

                <span className="text-xs font-medium text-white/90">
                  Respuesta en menos de 15 minutos
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck
                  className="h-4 w-4 shrink-0 text-[#16D28A]"
                  strokeWidth={2}
                />

                <span className="text-xs font-medium text-white/90">
                  Asesoría de expertos en Isapres
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}