import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  {
    number: "1",
    title: "Cuéntanos tu situación",
    description:
      "Completa un breve formulario con tu edad, renta y necesidades.",
  },
  {
    number: "2",
    title: "Analizamos las alternativas",
    description:
      "Comparamos planes según tu perfil y los prestadores que te interesan.",
  },
  {
    number: "3",
    title: "Recibe una propuesta personalizada",
    description:
      "Te enviaremos las opciones con sus beneficios, coberturas y valor estimado.",
  },
];

export default function HowItWorks() {
  return (
    <Section
      id="como-funciona"
      className="
        scroll-mt-20
        border-y
        border-[#E7EDF2]
        bg-[#F5F9FC]
        !py-12
        sm:!py-14
        lg:!py-16
      "
    >
      <Container>
        {/* ENCABEZADO */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="
              text-3xl
              font-black
              leading-tight
              tracking-[-0.02em]
              text-[#123B63]
              sm:text-4xl
              lg:text-[42px]
            "
          >
            ¿Cómo funciona?
          </h2>

          <p
            className="
              mt-2
              text-sm
              leading-7
              text-[#60758A]
              sm:text-base
            "
          >
            Un proceso simple, rápido y con asesoría experta.
          </p>
        </div>

        {/* PASOS */}
        <div className="relative mt-10 lg:mt-12">
          {/* LÍNEA CENTRAL */}
          <div
            className="
              pointer-events-none
              absolute
              left-[16.5%]
              right-[16.5%]
              top-7
              hidden
              h-px
              bg-[#C7D6E1]
              lg:block
            "
          />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="
                  relative
                  z-10
                  px-5
                  text-center
                  sm:px-8
                  lg:px-10
                "
              >
                {/* NÚMERO */}
                <div className="relative mx-auto flex w-fit items-center justify-center">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#1769C2]
                      text-white
                      shadow-[0_8px_22px_rgba(23,105,194,0.18)]
                    "
                  >
                    <span className="text-lg font-black">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* TITULO */}
                <h3
                  className="
                    mx-auto
                    mt-6
                    max-w-[330px]
                    text-lg
                    font-black
                    leading-tight
                    text-[#123B63]
                    sm:text-xl
                  "
                >
                  {step.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-[360px]
                    text-sm
                    leading-6
                    text-[#60758A]
                    sm:text-[15px]
                  "
                >
                  {step.description}
                </p>

                {/* FLECHA ENTRE PASOS */}
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="
                      pointer-events-none
                      absolute
                      -right-3
                      top-5
                      hidden
                      h-5
                      w-5
                      text-[#1769C2]
                      lg:block
                    "
                    strokeWidth={1.8}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FRASE FINAL */}
        <div
          className="
            mx-auto
            mt-10
            max-w-3xl
            border-t
            border-[#D7E2EA]
            pt-6
            text-center
          "
        >
          <p
            className="
              text-sm
              leading-6
              text-[#60758A]
              sm:text-base
            "
          >
            Tú nos cuentas lo que necesitas. Nosotros ordenamos la información,
            comparamos alternativas y te ayudamos a entender las diferencias.
          </p>
        </div>
      </Container>
    </Section>
  );
}