"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const questions = [
  {
    question: "¿La asesoría tiene algún costo?",
    answer:
      "No. Nuestro servicio de asesoría es gratuito. Analizamos tu situación y te orientamos para comparar alternativas.",
  },
  {
    question: "¿Qué Isapres comparan?",
    answer:
      "Comparamos las principales Isapres para ayudarte a revisar alternativas según tu edad, renta, cargas y necesidades de cobertura.",
  },
  {
    question: "¿Cuánto demora la cotización?",
    answer:
      "Normalmente respondemos por WhatsApp en menos de 15 minutos dentro del horario de atención.",
  },
  {
    question: "¿Puedo cambiarme desde Fonasa?",
    answer:
      "Sí. Revisamos tu situación y te orientamos sobre las alternativas disponibles para ti.",
  },
  {
    question: "¿Qué pasa si ya tengo una Isapre?",
    answer:
      "Podemos revisar tu plan actual, tus necesidades y tus prestadores preferidos para comparar alternativas.",
  },
  {
    question: "¿Me ayudan durante todo el proceso?",
    answer:
      "Sí. Te acompañamos durante el proceso y te ayudamos a entender las diferencias entre las alternativas que revisemos.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  function toggleQuestion(index: number) {
    setOpen((current) => (current === index ? null : index));
  }

  return (
    <Section
      id="faq"
      className="
        scroll-mt-24
        border-t
        border-[#E7EDF2]
        bg-white
        !py-12
        sm:!py-14
        lg:!py-16
      "
    >
      <Container>
        {/* ENCABEZADO */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#16A66A]
                sm:text-xs
              "
            >
              Preguntas frecuentes
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-black
                leading-tight
                tracking-[-0.025em]
                text-[#123B63]
                sm:text-4xl
                lg:text-[40px]
              "
            >
              Resolvemos tus dudas
            </h2>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-[#60758A]
                sm:text-base
              "
            >
              Antes de tomar una decisión, revisa las preguntas más comunes.
            </p>
          </div>

          <a
            href="/contenidos"
            className="
              inline-flex
              shrink-0
              items-center
              text-xs
              font-bold
              text-[#1769C2]
              transition-colors
              hover:text-[#123B63]
              sm:text-sm
            "
          >
            Ver nuestras guías
            <span className="ml-2">→</span>
          </a>
        </div>

        {/* PREGUNTAS */}
        <div className="mt-8 grid gap-x-6 gap-y-3 lg:grid-cols-2">
          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="
                  overflow-hidden
                  rounded-lg
                  border
                  border-[#DCE5EC]
                  bg-white
                  transition-colors
                  hover:border-[#C6D4DE]
                "
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-4
                    py-4
                    text-left
                  "
                >
                  <span
                    className="
                      text-sm
                      font-bold
                      leading-5
                      text-[#123B63]
                      sm:text-[15px]
                    "
                  >
                    {item.question}
                  </span>

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F1F5F8]
                      text-[#123B63]
                      transition-colors
                    "
                  >
                    <Plus
                      className={`
                        h-4
                        w-4
                        transition-transform
                        duration-200
                        ${isOpen ? "rotate-45 text-[#16A66A]" : ""}
                      `}
                      strokeWidth={1.8}
                    />
                  </span>
                </button>

                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-300
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#E7EDF2] px-4 pb-4 pt-3">
                      <p className="text-xs leading-6 text-[#60758A] sm:text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CIERRE */}
        <div className="mt-8 text-center">
          <p className="text-sm leading-6 text-[#7B8794]">
            ¿Tienes una situación particular? Puedes solicitar una cotización
            y recibir orientación personalizada.
          </p>
        </div>
      </Container>
    </Section>
  );
}