"use client";

import Image from "next/image";
import { ShieldCheck, Users, Clock3 } from "lucide-react";
import { useState } from "react";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import QuoteForm from "@/components/forms/QuoteForm";

const heroBenefits = [
  {
    icon: ShieldCheck,
    title: "Asesoría gratuita",
    text: "Sin costo ni compromiso.",
  },
  {
    icon: Clock3,
    title: "Respuesta en menos de 15 minutos",
    text: "Atención rápida por WhatsApp.",
  },
  {
    icon: Users,
    title: "+2.500 personas",
    text: "Ya han cotizado con nosotros.",
  },
];

export default function Hero() {
  const [highlightForm, setHighlightForm] = useState(false);

  function goToQuote() {
    const form = document.getElementById("cotizacion");

    form?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setHighlightForm(true);

    window.setTimeout(() => {
      setHighlightForm(false);
    }, 1500);
  }

  return (
    <Section
      className="relative isolate overflow-hidden bg-white !py-0 pt-[108px] lg:pt-[108px]"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[1720px] grid-cols-1 px-5 sm:px-7 lg:min-h-[650px] lg:grid-cols-[32%_30%_38%] lg:px-10 xl:min-h-[675px] xl:px-12">
        {/* IMAGEN ÚNICA DEL HERO */}
        <div className="order-2 col-span-full relative h-[180px] overflow-hidden rounded-2xl sm:h-[220px] lg:absolute lg:inset-0 lg:order-none lg:h-full lg:rounded-none">
          <Image
            src="/images/hero-background.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 118vw"
            className="
              object-cover
              object-center
              lg:h-full
              lg:w-full
              lg:translate-x-[2%]
              lg:translate-y-[5%]
              lg:scale-[1.08]
              lg:object-left-bottom
            "
          />

          <div
            className="
              absolute inset-0
              bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.08)_35%,rgba(255,255,255,0.48)_100%)]
              lg:bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.99)_12%,rgba(255,255,255,0.96)_20%,rgba(255,255,255,0.84)_27%,rgba(255,255,255,0.58)_34%,rgba(255,255,255,0.22)_40%,rgba(255,255,255,0)_46%)]
            "
          />
        </div>

        {/* FORMULARIO — primero en móvil, tercera columna en escritorio */}
        <div
          id="cotizacion"
          className={`order-1 relative z-30 w-full justify-self-end lg:order-3 lg:self-start lg:translate-y-24 ${
            highlightForm ? "scale-[1.01]" : "scale-100"
          } transition-transform duration-300`}
        >
          <div className="w-full max-w-[500px] rounded-2xl border border-white bg-white shadow-[0_18px_45px_rgba(16,42,67,0.16)]">
            <QuoteForm />
          </div>
        </div>

        {/* ESPACIO PARA LA IMAGEN EN ESCRITORIO */}
        <div className="order-2 hidden lg:block" aria-hidden="true" />

        {/* TEXTO */}
        <div className="order-3 relative z-20 pt-7 pb-8 lg:order-1 lg:py-10 lg:pt-24 lg:pb-8">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#123B63] sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#16A66A]" />
            Asesoría experta en Isapres
          </div>

          <h1 className="mt-4 w-full max-w-[560px] text-[34px] font-black leading-[1.02] tracking-[-0.035em] text-[#123B63] sm:text-[42px] lg:text-[47px] xl:text-[50px]">
            Encuentra un plan de salud que realmente se ajuste a ti
          </h1>

          <p className="mt-4 max-w-[560px] text-[14px] leading-6 text-[#344E68] sm:text-[15px] lg:mt-5 lg:text-[16px]">
            Comparamos las principales Isapres según tu renta, edad, cargas y
            prestadores preferidos, para que tomes una decisión informada y
            sin costo.
          </p>

          <div className="mt-6">
            <Button
              onClick={goToQuote}
              className="min-h-11 w-full px-6 text-sm lg:w-auto"
            >
              Revisar mi plan
              <span className="ml-2">→</span>
            </Button>
          </div>

          <div className="mt-7 grid gap-4 border-t border-[#E7EDF2] pt-5 lg:border-white/60">
            {heroBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#A8DFC4] bg-white text-[#16A66A] shadow-sm">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold leading-4 text-[#123B63]">
                      {item.title}
                    </p>

                    <p className="mt-0.5 text-[10px] leading-4 text-[#486581]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}