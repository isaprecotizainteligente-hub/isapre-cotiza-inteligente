import Image from "next/image";
import {
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  Users,
  ClipboardCheck,
  Building2,
} from "lucide-react";

import Section from "@/components/ui/Section";

const benefits = [
  {
    icon: BadgeCheck,
    text: "Planes según tu renta y edad",
  },
  {
    icon: Building2,
    text: "Cobertura en tus prestadores preferidos",
  },
  {
    icon: ClipboardCheck,
    text: "Comparación de beneficios y precios",
  },
  {
    icon: Users,
    text: "Asesoría de expertos en Isapres",
  },
  {
    icon: HeartHandshake,
    text: "Acompañamiento durante el proceso",
  },
  {
    icon: ShieldCheck,
    text: "Sin costo para ti",
  },
];

export default function Advisory() {
  return (
    <Section
      className="
        relative
        -mt-12
        border-y
        border-[#E8EEF3]
        bg-white
        !py-0
      "
    >
      <div className="relative grid w-full lg:grid-cols-[48%_52%]">
        {/* IMAGEN */}
        <div
          className="
            relative
            min-h-[360px]
            overflow-hidden
            bg-[#EAF3F9]
            sm:min-h-[430px]
            lg:min-h-[500px]
          "
        >
          <Image
            src="/images/familia-asesoria.png"
            alt="Familia recibiendo orientación sobre su plan de salud"
            fill
            priority
            sizes="48vw"
            className="
              object-cover
              object-center
            "
          />

          {/* FUSIÓN NATURAL HACIA EL BLANCO */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              w-[32%]
              bg-gradient-to-r
              from-transparent
              via-white/45
              to-white
            "
          />
        </div>

        {/* CONTENIDO */}
        <div
          className="
            flex
            items-center
            px-7
            py-10
            sm:px-10
            sm:py-12
            lg:px-12
            lg:py-14
            xl:px-16
          "
        >
          <div className="w-full max-w-[820px]">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#16A66A] sm:text-xs">
              Más que una cotización
            </span>

            <h2
              className="
                mt-3
                max-w-3xl
                text-3xl
                font-black
                leading-[1.05]
                tracking-tight
                text-[#123B63]
                sm:text-4xl
                lg:text-[42px]
              "
            >
              Una asesoría basada en tu realidad
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-[#52697D]
                sm:text-base
                lg:text-[17px]
                lg:leading-7
              "
            >
              No todos los planes sirven para todos. Por eso analizamos tu
              situación, tus prestadores preferidos y tu presupuesto para
              ayudarte a comparar alternativas que realmente tengan sentido
              para ti.
            </p>

            <div
              className="
                mt-7
                grid
                gap-x-10
                gap-y-4
                sm:grid-cols-2
                lg:max-w-[820px]
              "
            >
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="
                        mt-0.5
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#E8F7F0]
                        text-[#16A66A]
                      "
                    >
                      <Icon
                        className="h-4 w-4"
                        strokeWidth={2}
                      />
                    </div>

                    <p
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#123B63]
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}