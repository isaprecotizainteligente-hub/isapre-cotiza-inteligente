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
      className="
        relative isolate w-full overflow-hidden bg-white !py-0
        lg:mt-[72px] lg:h-[calc(100svh-72px)] lg:min-h-0
      "
    >
      {/* FONDO A TODO EL ANCHO DEL HERO */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-white">
        <Image
          src="/images/hero-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] lg:translate-x-[18%] lg:object-[25%_45%]"
        />

        <div className="absolute inset-0 bg-white/10" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_20%,rgba(255,255,255,0.6)_30%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0)_48%)]" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div
        className="
          relative z-10 mx-auto grid w-full max-w-[1800px]
          grid-cols-1 gap-6 px-5 py-7
          sm:px-7
          lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_minmax(420px,490px)]
          lg:items-center lg:gap-6 lg:px-8 lg:py-3
          xl:grid-cols-[minmax(0,1fr)_500px] xl:gap-10 xl:px-12
        "
      >
        {/* TEXTO Y BENEFICIOS */}
        <div className="relative z-20 min-w-0 lg:max-w-[590px]">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#123B63] sm:text-xs">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#16A66A]" />
            Asesoría experta en Isapres
          </div>

          <h1
            className="
              mt-3 max-w-[560px] text-[32px] font-black leading-[1.02]
              tracking-[-0.035em] text-[#123B63]
              sm:text-[40px]
              lg:mt-3 lg:text-[clamp(34px,3.15vw,47px)]
              xl:text-[50px]
            "
          >
            Encuentra un plan de salud que realmente se ajuste a ti
          </h1>

          <p className="mt-3 max-w-[530px] text-[14px] leading-5 text-[#344E68] sm:text-[15px] lg:mt-4 lg:text-[15px] lg:leading-[1.5]">
            Comparamos las principales Isapres según tu renta, edad, cargas y
            prestadores preferidos, para que tomes una decisión informada y
            sin costo.
          </p>

          <div className="mt-4 lg:mt-5">
            <Button
              onClick={goToQuote}
              className="min-h-11 w-full px-6 text-sm lg:w-auto"
            >
              Revisar mi plan
              <span className="ml-2">→</span>
            </Button>
          </div>

          <div className="mt-5 grid gap-3 border-t border-[#E7EDF2]/80 pt-4 lg:mt-5 lg:gap-2.5 lg:pt-3">
            {heroBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#A8DFC4] bg-white text-[#16A66A] shadow-sm">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </div>

                  <div className="min-w-0">
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

        {/* FORMULARIO */}
        <div
          id="cotizacion"
          className={`
            relative z-30 w-full min-w-0 justify-self-end
            ${highlightForm ? "scale-[1.01]" : "scale-100"}
            transition-transform duration-300
            lg:origin-right
            lg:scale-[0.90]
            xl:scale-[0.94]
          `}
        >
          <div className="mx-auto w-full max-w-[500px] rounded-2xl border border-white bg-white shadow-[0_18px_45px_rgba(16,42,67,0.16)] lg:mx-0">
            <QuoteForm />
          </div>
        </div>
      </div>
    </Section>
  );
}