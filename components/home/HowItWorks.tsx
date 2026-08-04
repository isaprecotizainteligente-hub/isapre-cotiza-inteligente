import {
  ClipboardList,
  SearchCheck,
  MessageCircleMore,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Cuéntanos sobre ti",
    description:
      "Completa el formulario con tu edad, renta, sistema de salud y la clínica donde prefieres atenderte.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Analizamos las alternativas",
    description:
      "Comparamos las principales Isapres para encontrar la opción que mejor se adapte a tu situación.",
  },
  {
    number: "03",
    icon: MessageCircleMore,
    title: "Recibe una propuesta",
    description:
      "Te contactaremos por WhatsApp con una recomendación clara y resolveremos todas tus dudas.",
  },
];

export default function HowItWorks() {
  return (
    <Section
      id="como-funciona"
      className="relative scroll-mt-24 !py-12 lg:!py-16"
    >

      {/* Glow */}

      <div className="absolute left-1/2 top-0 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[170px]" />


      <Container>

        <div className="mx-auto -mt-4 max-w-3xl text-center">


          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

            ¿Cómo funciona?

          </span>


          <h2 className="mt-4 text-4xl font-black tracking-tight text-white lg:text-5xl">

            En solo 3 pasos
            <br />
            encuentras tu mejor alternativa.

          </h2>


          <p className="mt-4 text-lg leading-8 text-slate-400">

            Nuestro proceso es rápido, gratuito y completamente personalizado.

          </p>


        </div>



        <div className="relative mt-12 grid gap-8 lg:grid-cols-3">


          {steps.map((step, index) => {

            const Icon = step.icon;


            return (

              <div
                key={step.number}
                className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-[#111C34]/80
                p-7
                lg:p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-500/30
                hover:shadow-[0_25px_70px_rgba(37,99,235,.18)]
                "
              >


                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl transition group-hover:scale-150" />


                <span className="absolute right-8 top-6 text-6xl font-black text-white/5">

                  {step.number}

                </span>



                <div className="relative">


                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-600/30">

                    <Icon className="h-8 w-8 text-white" />

                  </div>



                  <h3 className="mt-8 text-2xl font-bold text-white">

                    {step.title}

                  </h3>



                  <p className="mt-5 leading-8 text-slate-400">

                    {step.description}

                  </p>


                </div>



                {index < steps.length - 1 && (

                  <ArrowRight
                    className="
                    absolute
                    -right-4
                    top-1/2
                    hidden
                    h-8
                    w-8
                    -translate-y-1/2
                    text-blue-500
                    xl:block
                    "
                  />

                )}


              </div>

            );

          })}


        </div>


      </Container>


    </Section>
  );
}