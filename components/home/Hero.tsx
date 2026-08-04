"use client";

import { CheckCircle2 } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import QuoteForm from "@/components/forms/QuoteForm";
import TrustBar from "./TrustBar";

const benefits = [
  {
    title: "Revisión gratuita",
    text: "Analizamos tu situación sin costo ni compromiso.",
  },
  {
    title: "Comparamos las principales Isapres",
    text: "Buscamos la alternativa que mejor se adapte a ti.",
  },
  {
    title: "Respuesta rápida",
    text: "Normalmente por WhatsApp en menos de 15 minutos.",
  },
];

export default function Hero() {

  function goToQuote() {
    document
      .getElementById("cotizacion")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }


  return (
    <Section className="relative overflow-hidden bg-[#050816]">

      {/* Fondo */}

      <div className="absolute inset-0 -z-30 bg-[#050816]" />


      {/* Glow izquierda */}

      <div className="absolute left-[-250px] top-[-250px] -z-20 h-[650px] w-[650px] rounded-full bg-blue-600/20 blur-[180px]" />


      {/* Glow derecha */}

      <div className="absolute right-[-250px] bottom-[-250px] -z-20 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[180px]" />


      {/* Glow centro */}

      <div className="absolute left-1/2 top-56 -z-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-700/10 blur-[160px]" />


      {/* Grid */}

      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />


      <Container>

        <div className="grid items-center gap-24 lg:grid-cols-2">


          {/* Columna izquierda */}

          <div>


            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-300 backdrop-blur-xl">

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">

                ✓

              </span>

              Más de 10 años ayudando a personas en todo Chile

            </div>



            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-white lg:text-7xl">

              ¿Estás pagando de más por tu


              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">

                plan de salud?

              </span>


            </h1>



            <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">

              Descubre en menos de <strong className="text-white">2 minutos</strong>
              si puedes acceder a una mejor cobertura o pagar menos por tu plan.
              Comparamos las principales Isapres de Chile para ayudarte a tomar
              una mejor decisión.

            </p>



            <div className="mt-10 space-y-4">


              {benefits.map((item) => (

                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-600/30">

                    <CheckCircle2 className="h-5 w-5 text-white" />

                  </div>


                  <div>

                    <p className="font-semibold text-white">

                      {item.title}

                    </p>


                    <p className="text-sm text-slate-400">

                      {item.text}

                    </p>


                  </div>


                </div>

              ))}


            </div>




            <div className="mt-12 flex flex-wrap gap-4">


              <Button onClick={goToQuote}>

                🔎 Revisar mi plan

              </Button>



              <a
                href="#como-funciona"
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10"
              >

                Cómo funciona

              </a>


            </div>



            <TrustBar />


          </div>



          {/* Formulario */}

          <div
            id="cotizacion"
            className="relative lg:-mt-8"
          >


            <div className="absolute -inset-6 rounded-[40px] bg-blue-600/15 blur-3xl" />



            <div className="relative">

              <QuoteForm />

            </div>


          </div>



        </div>


      </Container>



      {/* Degradado inferior */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />


    </Section>
  );
}