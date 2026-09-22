import type { Metadata } from "next";

import Link from "next/link";
import {
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  HeartPulse,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTA from "@/components/home/CTA";

import QuoteForm from "@/components/forms/QuoteForm";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cotizar Isapre Online | Compara Planes de Salud en Chile",
  description:
    "Cotiza tu Isapre online y compara alternativas de planes de salud en Chile según tu renta, edad, cargas, cobertura y necesidades. Asesoría gratuita y sin compromiso.",
  keywords: [
    "cotizar isapre",
    "cotiza isapre",
    "cotización isapre",
    "cotizar isapre online",
    "cotizador de isapres",
    "comparar isapres",
    "planes de isapre",
    "plan de salud",
    "isapre chile",
  ],
  alternates: {
    canonical: "https://isaprecotizainteligente.cl/cotiza-isapre/",
  },
  openGraph: {
    title: "Cotizar Isapre Online | Compara Planes de Salud",
    description:
      "Compara alternativas de Isapre según tu situación y encuentra un plan de salud que se adapte a tus necesidades.",
    url: "https://isaprecotizainteligente.cl/cotiza-isapre/",
    siteName: "Isapre Cotiza Inteligente",
    locale: "es_CL",
    type: "website",
  },
};

const factors = [
  {
    icon: HeartPulse,
    title: "Tu renta imponible",
    text: "La renta imponible es uno de los antecedentes que se consideran al momento de evaluar alternativas de planes de salud.",
  },
  {
    icon: Stethoscope,
    title: "Tus necesidades de salud",
    text: "Consultas, exámenes, hospitalizaciones y otros servicios pueden ser relevantes al comparar la cobertura de un plan.",
  },
  {
    icon: ShieldCheck,
    title: "Cobertura y prestadores",
    text: "Es importante revisar porcentajes de cobertura, topes y los prestadores que forman parte de cada alternativa.",
  },
  {
    icon: Search,
    title: "Precio del plan",
    text: "El valor que pagarás debe analizarse junto con la cobertura y no solamente por su precio mensual.",
  },
];

const steps = [
  {
    number: "01",
    title: "Cuéntanos tu situación",
    text: "Completa tus datos básicos y antecedentes necesarios para revisar alternativas.",
  },
  {
    number: "02",
    title: "Analizamos alternativas",
    text: "Revisamos las opciones disponibles considerando tus necesidades y presupuesto.",
  },
  {
    number: "03",
    title: "Comparamos la cobertura",
    text: "Te ayudamos a entender diferencias de cobertura, prestadores y valores.",
  },
  {
    number: "04",
    title: "Tú decides",
    text: "Recibes la información necesaria para evaluar si alguna alternativa te conviene.",
  },
];

const isapres = [
  "Cruz Blanca",
  "Colmena",
  "Consalud",
  "Banmédica",
  "Vida Tres",
  "Nueva Masvida",
  "Esencial",
];

const faqs = [
  {
    question: "¿Cuánto cuesta cotizar una Isapre?",
    answer:
      "La revisión inicial y orientación para comparar alternativas es gratuita y no requiere compromiso de contratación.",
  },
  {
    question: "¿Qué necesito para cotizar una Isapre?",
    answer:
      "Normalmente se necesitan antecedentes como edad, renta imponible, cargas y otros datos relacionados con tu situación de salud y cobertura actual.",
  },
  {
    question: "¿Puedo cotizar si actualmente estoy en Fonasa?",
    answer:
      "Sí. Una persona afiliada a Fonasa puede revisar alternativas de Isapre y comparar cómo sería su situación bajo un plan de salud privado.",
  },
  {
    question: "¿Puedo cotizar si ya tengo Isapre?",
    answer:
      "Sí. Si ya tienes Isapre, puedes revisar tu plan actual y compararlo con otras alternativas para evaluar diferencias de precio y cobertura.",
  },
  {
    question: "¿La Isapre más barata siempre es la mejor alternativa?",
    answer:
      "No necesariamente. El valor debe analizarse junto con la cobertura, prestadores, topes, bonificaciones y necesidades personales.",
  },
  {
    question: "¿Cuánto demora una cotización?",
    answer:
      "La revisión inicial puede comenzar rápidamente una vez que entregas los antecedentes necesarios. El tiempo final depende de la información disponible y de la alternativa que se esté evaluando.",
  },
];

export default function CotizaIsaprePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#081B35] text-white">
        {/* HERO */}
        <Section
          className="
            relative
            overflow-hidden
            bg-[#081B35]
            pb-16
            pt-32
            lg:pb-24
            lg:pt-36
          "
        >
          <div className="absolute inset-0 -z-30 bg-[#081B35]" />

          <div
            className="
              absolute
              left-[-250px]
              top-[-250px]
              -z-20
              h-[650px]
              w-[650px]
              rounded-full
              bg-blue-500/20
              blur-[180px]
            "
          />

          <div
            className="
              absolute
              bottom-[-250px]
              right-[-250px]
              -z-20
              h-[650px]
              w-[650px]
              rounded-full
              bg-emerald-400/10
              blur-[180px]
            "
          />

          <div
            className="
              absolute
              inset-0
              -z-10
              opacity-[0.035]
            "
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-emerald-300
                  "
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-500
                      text-white
                    "
                  >
                    ✓
                  </span>

                  Cotización gratuita y sin compromiso
                </div>

                <h1
                  className="
                    mt-6
                    text-4xl
                    font-black
                    leading-[1.05]
                    tracking-tight
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Cotiza tu Isapre y compara{" "}
                  <span
                    className="
                      bg-gradient-to-r
                      from-emerald-400
                      via-green-500
                      to-teal-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    planes de salud
                  </span>
                </h1>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-lg
                    leading-8
                    text-slate-300
                  "
                >
                  Revisamos tu situación y comparamos alternativas de Isapre
                  según tu renta, edad, cargas, cobertura y necesidades de
                  salud.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Revisión inicial gratuita.",
                    "Comparamos distintas alternativas de Isapre.",
                    "Te explicamos diferencias de precio y cobertura.",
                    "Sin obligación de contratar.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-slate-200"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="#cotizacion"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-2xl
                      bg-emerald-500
                      px-7
                      py-4
                      font-bold
                      text-white
                      shadow-lg
                      shadow-emerald-500/20
                      transition
                      hover:bg-emerald-400
                    "
                  >
                    🔎 Cotizar mi Isapre
                  </a>
                </div>
              </div>

              <div
                id="cotizacion"
                className="relative scroll-mt-28"
              >
                <div
                  className="
                    absolute
                    -inset-5
                    rounded-[40px]
                    bg-emerald-500/10
                    blur-3xl
                  "
                />

                <div className="relative">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* INTRO */}
        <Section className="bg-slate-950 py-20">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Cotización de Isapre
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Cotizar una Isapre no es solamente buscar el precio más bajo
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Al comparar planes de salud es importante revisar cuánto
                pagarás, qué cobertura entrega cada alternativa, cuáles son
                sus prestadores y si responde realmente a tus necesidades.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {factors.map((factor) => {
                const Icon = factor.icon;

                return (
                  <article
                    key={factor.title}
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-6
                      backdrop-blur-xl
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-emerald-500/10
                        text-emerald-400
                      "
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-white">
                      {factor.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {factor.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* COMO FUNCIONA */}
        <Section
          id="como-cotizar"
          className="bg-[#081B35] py-20"
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Cómo funciona
                </p>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  Cotiza tu Isapre de forma simple
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  La idea es que puedas entender tus alternativas antes de
                  tomar una decisión sobre tu plan de salud.
                </p>

                <div className="mt-7 flex items-center gap-3 text-sm text-slate-300">
                  <ClipboardCheck className="h-5 w-5 text-emerald-400" />
                  Información clara y personalizada
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {steps.map((step) => (
                  <article
                    key={step.number}
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-6
                    "
                  >
                    <span className="text-sm font-black text-emerald-400">
                      {step.number}
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* ISAPRES */}
        <Section className="bg-slate-950 py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Alternativas
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Comparamos distintas Isapres disponibles en Chile
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Las alternativas que pueden evaluarse dependen de tu situación
                y de la oferta disponible al momento de la cotización.
              </p>
            </div>

            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
              {isapres.map((isapre) => (
                <div
                  key={isapre}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    font-semibold
                    text-slate-200
                  "
                >
                  {isapre}
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* INFORMACION */}
        <Section className="bg-[#081B35] py-20">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Antes de cotizar
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  ¿Qué deberías revisar en un plan de Isapre?
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  Comparar un plan requiere mirar más de un número. Una
                  alternativa puede tener un precio atractivo, pero también
                  es necesario revisar cómo funciona su cobertura y qué
                  prestadores considera.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Valor mensual del plan",
                    "Cobertura ambulatoria",
                    "Cobertura hospitalaria",
                    "Porcentajes de bonificación",
                    "Topes de cobertura",
                    "Prestadores preferentes",
                    "Clínicas y centros médicos",
                    "Necesidades de tu grupo familiar",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-slate-950/40
                        p-4
                      "
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                      <span className="text-sm font-medium text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section
          id="preguntas-frecuentes"
          className="bg-slate-950 py-20"
        >
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Preguntas frecuentes
                </p>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  Preguntas sobre cotizar una Isapre
                </h2>
              </div>

              <div className="mt-10 space-y-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="
                      group
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-5
                    "
                  >
                    <summary
                      className="
                        flex
                        cursor-pointer
                        list-none
                        items-center
                        justify-between
                        gap-4
                        py-5
                        font-semibold
                        text-white
                      "
                    >
                      <span>{faq.question}</span>

                      <ChevronDown className="h-5 w-5 shrink-0 text-emerald-400 transition group-open:rotate-180" />
                    </summary>

                    <p className="pb-5 pr-8 text-sm leading-7 text-slate-400">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* LINKS SEO INTERNOS */}
        <Section className="bg-[#081B35] py-16">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-black text-white">
                También puedes revisar nuestras guías
              </h2>

              <p className="mt-3 text-slate-400">
                Conoce más sobre planes de salud, renta imponible y
                comparación de Isapres.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contenidos"
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:border-emerald-400
                  "
                >
                  Guías de salud
                </Link>

                <Link
                  href="/"
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:border-emerald-400
                  "
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}