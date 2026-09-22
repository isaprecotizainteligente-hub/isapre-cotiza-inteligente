import type { Metadata } from "next";

import Link from "next/link";
import {
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileSearch,
  HeartPulse,
  Search,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTA from "@/components/home/CTA";

import QuoteForm from "@/components/forms/QuoteForm";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cotizador de Isapres | Compara Planes de Salud en Chile",
  description:
    "Usa nuestro cotizador de Isapres para comparar alternativas de planes de salud en Chile según tu renta, edad, cargas, cobertura y necesidades. Revisión gratuita.",
  keywords: [
    "cotizador de isapres",
    "cotizador isapre",
    "cotizar isapre online",
    "comparador de isapres",
    "comparar planes de isapre",
    "cotizador de planes de salud",
    "planes de isapre",
    "cotizar isapre",
    "isapres chile",
  ],
  alternates: {
    canonical: "https://isaprecotizainteligente.cl/cotizador-isapre/",
  },
  openGraph: {
    title: "Cotizador de Isapres | Compara Planes de Salud",
    description:
      "Compara alternativas de planes de Isapre según tu situación, presupuesto y necesidades de cobertura.",
    url: "https://isaprecotizainteligente.cl/cotizador-isapre/",
    siteName: "Isapre Cotiza Inteligente",
    locale: "es_CL",
    type: "website",
  },
};

const comparisonPoints = [
  {
    icon: SlidersHorizontal,
    title: "Según tu situación",
    text: "La comparación considera antecedentes personales y económicos relevantes para encontrar alternativas que puedan ajustarse a tu situación.",
  },
  {
    icon: HeartPulse,
    title: "Según tus necesidades",
    text: "No todas las personas necesitan el mismo tipo de cobertura. Revisamos los aspectos que son importantes para ti.",
  },
  {
    icon: ShieldCheck,
    title: "Cobertura",
    text: "Es importante considerar bonificaciones, topes, prestaciones y prestadores asociados al plan.",
  },
  {
    icon: Search,
    title: "Precio",
    text: "El valor mensual es solo uno de los elementos que conviene revisar al comparar alternativas.",
  },
];

const steps = [
  {
    number: "01",
    title: "Ingresa tus datos",
    text: "Entrega los antecedentes básicos necesarios para iniciar la comparación.",
  },
  {
    number: "02",
    title: "Revisamos alternativas",
    text: "Analizamos opciones disponibles considerando tu situación y necesidades.",
  },
  {
    number: "03",
    title: "Comparamos planes",
    text: "Revisamos diferencias de precio, cobertura, prestadores y condiciones.",
  },
  {
    number: "04",
    title: "Recibes orientación",
    text: "Te explicamos las alternativas para que puedas evaluarlas con información clara.",
  },
];

const dataToConsider = [
  "Renta imponible",
  "Edad del titular",
  "Cantidad de cargas",
  "Edad de las cargas",
  "Cobertura que necesitas",
  "Clínicas y prestadores de interés",
  "Presupuesto disponible",
  "Situación actual de salud previsional",
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
    question: "¿Qué es un cotizador de Isapres?",
    answer:
      "Es una herramienta o proceso que permite reunir antecedentes de una persona y comparar alternativas de planes de salud de Isapre considerando variables como renta, edad, cargas, cobertura y presupuesto.",
  },
  {
    question: "¿El cotizador de Isapres entrega un precio definitivo?",
    answer:
      "La cotización final depende de los antecedentes de cada persona y de las condiciones y alternativas disponibles al momento de realizarla. Por eso es importante revisar la información específica antes de contratar.",
  },
  {
    question: "¿Qué datos necesito para usar el cotizador?",
    answer:
      "Entre los antecedentes que pueden ser necesarios se encuentran la renta imponible, edad, cargas y sus edades, además de información relacionada con tus necesidades de cobertura.",
  },
  {
    question: "¿Puedo usar el cotizador si ya tengo Isapre?",
    answer:
      "Sí. También puedes comparar tu situación actual con otras alternativas para revisar diferencias de precio, cobertura y prestadores.",
  },
  {
    question: "¿Puedo cotizar una Isapre si estoy en Fonasa?",
    answer:
      "Sí. Una persona actualmente afiliada a Fonasa puede solicitar información y revisar alternativas de planes de Isapre.",
  },
  {
    question: "¿El cotizador tiene algún costo?",
    answer:
      "La revisión inicial y orientación para comparar alternativas es gratuita y no implica obligación de contratar.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://isaprecotizainteligente.cl/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Cotizador de Isapres",
      item: "https://isaprecotizainteligente.cl/cotizador-isapre/",
    },
  ],
};

export default function CotizadorIsaprePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#081B35] text-white">
        {/* SCHEMA FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* SCHEMA BREADCRUMB */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

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
              {/* LEFT */}
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

                  Cotizador de Isapres en Chile
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
                  Cotizador de Isapres:
                  <span
                    className="
                      mt-2
                      block
                      bg-gradient-to-r
                      from-emerald-400
                      via-green-500
                      to-teal-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    compara tu plan de salud
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
                  Comparamos alternativas de Isapre considerando tu renta,
                  edad, cargas, cobertura y necesidades para ayudarte a
                  entender qué opciones puedes evaluar.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Comparación personalizada.",
                    "Revisión de distintas alternativas.",
                    "Análisis de precio y cobertura.",
                    "Orientación gratuita y sin compromiso.",
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

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#cotizador"
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
                    🔎 Usar cotizador
                  </a>

                  <a
                    href="#como-funciona"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-7
                      py-4
                      font-semibold
                      text-white
                      transition
                      hover:border-emerald-400
                    "
                  >
                    Cómo funciona
                  </a>
                </div>
              </div>

              {/* FORM */}
              <div
                id="cotizador"
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
                Comparador de planes
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                ¿Cómo funciona un cotizador de Isapres?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Un cotizador permite reunir información relevante y utilizarla
                para comparar alternativas de planes de salud. El objetivo no
                es mirar solamente el precio, sino entender qué ofrece cada
                alternativa y cómo se relaciona con tus necesidades.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {comparisonPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
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
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* COMO FUNCIONA */}
        <Section
          id="como-funciona"
          className="bg-[#081B35] py-20"
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Proceso
                </p>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  Compara tu Isapre paso a paso
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Queremos que puedas entender las diferencias entre las
                  alternativas antes de tomar una decisión.
                </p>

                <div className="mt-7 flex items-center gap-3 text-sm text-slate-300">
                  <ClipboardCheck className="h-5 w-5 text-emerald-400" />
                  Proceso simple y orientado a tus necesidades
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

        {/* DATOS */}
        <Section className="bg-slate-950 py-20">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                    Información necesaria
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                    ¿Qué datos se consideran al cotizar una Isapre?
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-400">
                    Para realizar una comparación es necesario contar con
                    antecedentes que permitan entender tu situación y las
                    características del grupo familiar.
                  </p>

                  <div className="mt-7 flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                    <FileSearch className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />

                    <p className="text-sm leading-6 text-slate-300">
                      La información solicitada puede variar dependiendo de
                      la situación de cada persona y del tipo de comparación
                      que se quiera realizar.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-7
                  "
                >
                  <div className="space-y-3">
                    {dataToConsider.map((item) => (
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
            </div>
          </Container>
        </Section>

        {/* ISAPRES */}
        <Section className="bg-[#081B35] py-20">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Alternativas
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Compara alternativas de Isapre en Chile
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                La disponibilidad de planes y alternativas depende de las
                condiciones vigentes y de los antecedentes de cada persona.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
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
            </div>
          </Container>
        </Section>

        {/* DIFERENCIA CON COTIZA */}
        <Section className="bg-slate-950 py-20">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div
                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-8
                  sm:p-10
                "
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Cotización inteligente
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  Comparar un plan requiere mirar más que el precio
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  Dos planes pueden tener valores diferentes y ofrecer
                  coberturas distintas. Por eso, al comparar una Isapre,
                  conviene revisar también las prestaciones, porcentajes,
                  topes y prestadores que sean relevantes para ti.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Precio mensual",
                    "Cobertura ambulatoria",
                    "Cobertura hospitalaria",
                    "Porcentajes de bonificación",
                    "Topes de cobertura",
                    "Prestadores y clínicas",
                    "Necesidades familiares",
                    "Presupuesto disponible",
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
                        bg-slate-950/50
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
          className="bg-[#081B35] py-20"
        >
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Preguntas frecuentes
                </p>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  Preguntas sobre el cotizador de Isapres
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

        {/* ENLACES INTERNOS */}
        <Section className="bg-slate-950 py-16">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-black text-white">
                Sigue comparando información
              </h2>

              <p className="mt-3 text-slate-400">
                También puedes revisar nuestra guía para cotizar una Isapre y
                conocer más sobre planes de salud.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  href="/cotiza-isapre/"
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
                  Cotizar Isapre
                </Link>

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