import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Planes de Isapre con cobertura en Clínica Alemana",
  description:
    "Conoce qué revisar al elegir un plan de Isapre con cobertura en Clínica Alemana y compara alternativas según tu renta, grupo familiar y necesidades de atención.",
  keywords: [
    "Isapre Clínica Alemana",
    "planes Isapre Clínica Alemana",
    "cobertura Clínica Alemana",
    "Isapre con cobertura en Clínica Alemana",
    "plan de salud Clínica Alemana",
    "cotizar Isapre Clínica Alemana",
  ],
  alternates: {
    canonical: "https://isaprecotizainteligente.cl/isapre-clinica-alemana",
  },
  openGraph: {
    title: "Planes de Isapre con cobertura en Clínica Alemana",
    description:
      "Revisa qué aspectos debes comparar al elegir un plan de Isapre si Clínica Alemana es uno de tus prestadores de preferencia.",
    url: "https://isaprecotizainteligente.cl/isapre-clinica-alemana",
    siteName: "Isapre Cotiza Inteligente",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planes de Isapre con cobertura en Clínica Alemana",
    description:
      "Compara alternativas de Isapre considerando cobertura, prestadores, topes y presupuesto.",
  },
};

const faqs = [
  {
    question: "¿Cualquier Isapre cubre Clínica Alemana?",
    answer:
      "No necesariamente. La existencia de un convenio entre una Isapre y Clínica Alemana no significa que todos los planes de esa Isapre tengan las mismas condiciones de cobertura. Debes revisar específicamente el plan contratado, sus prestadores y las condiciones de cobertura.",
  },
  {
    question: "¿Qué debo revisar si quiero atenderme en Clínica Alemana?",
    answer:
      "Conviene revisar la cobertura hospitalaria y ambulatoria, los porcentajes de bonificación, los topes, los copagos, la modalidad del plan y las condiciones asociadas a Clínica Alemana como prestador.",
  },
  {
    question: "¿Qué significa que Clínica Alemana sea un prestador preferente?",
    answer:
      "Significa que el plan puede establecer condiciones de cobertura asociadas a un prestador o red de prestadores determinados. Por eso es importante revisar las condiciones específicas que aparecen en el plan antes de contratar.",
  },
  {
    question: "¿Esencial tiene alternativas relacionadas con Clínica Alemana?",
    answer:
      "Sí. Esencial ofrece actualmente el Plan Alemana Integral, diseñado para cobertura en Clínica Alemana de Santiago. Las condiciones específicas, prestaciones y excepciones deben revisarse antes de contratar.",
  },
  {
    question: "¿Puedo cotizar un plan considerando Clínica Alemana como prioridad?",
    answer:
      "Sí. Al momento de comparar alternativas puedes indicar que Clínica Alemana es uno de tus prestadores preferidos y revisar las condiciones de cobertura de los planes disponibles para tu situación.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://isaprecotizainteligente.cl/isapre-clinica-alemana#webpage",
      url: "https://isaprecotizainteligente.cl/isapre-clinica-alemana",
      name: "Planes de Isapre con cobertura en Clínica Alemana",
      description:
        "Guía para revisar y comparar planes de Isapre cuando Clínica Alemana es uno de tus prestadores de preferencia.",
      inLanguage: "es-CL",
      isPartOf: {
        "@type": "WebSite",
        name: "Isapre Cotiza Inteligente",
        url: "https://isaprecotizainteligente.cl",
      },
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://isaprecotizainteligente.cl/isapre-clinica-alemana#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function IsapreClinicaAlemanaPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#081B35] pt-20">
        {/* HERO */}
        <section className="px-4 pb-20 pt-16 md:pb-24 md:pt-24">
          <Container>
            <div className="mx-auto max-w-5xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Clínica Alemana y planes de salud
              </span>

              <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-black leading-[1.08] text-white md:text-6xl">
                Planes de Isapre con cobertura en Clínica Alemana
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 md:text-xl">
                Si Clínica Alemana es uno de tus prestadores de preferencia,
                antes de contratar una Isapre es importante revisar la
                cobertura real del plan, los prestadores, los topes y el costo
                mensual.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/cotiza-isapre/"
                  className="inline-flex items-center rounded-xl bg-emerald-500 px-7 py-4 font-bold text-white transition hover:bg-emerald-600"
                >
                  Cotizar mi plan
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="#que-revisar"
                  className="inline-flex items-center rounded-xl border border-blue-400/30 bg-blue-500/10 px-7 py-4 font-bold text-blue-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300"
                >
                  Qué debo revisar
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* INTRO CARDS */}
        <section className="px-4 pb-24">
          <Container>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-[#102542] p-7 shadow-xl">
                <div className="text-3xl">🏥</div>

                <h2 className="mt-5 text-xl font-bold text-white">
                  Cobertura
                </h2>

                <p className="mt-3 leading-7 text-slate-400">
                  Revisa qué porcentaje, topes y condiciones aplican a las
                  atenciones que realizas habitualmente.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#102542] p-7 shadow-xl">
                <div className="text-3xl">📍</div>

                <h2 className="mt-5 text-xl font-bold text-white">
                  Prestadores
                </h2>

                <p className="mt-3 leading-7 text-slate-400">
                  Comprueba si Clínica Alemana forma parte de los prestadores
                  asociados a las mejores condiciones de tu plan.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#102542] p-7 shadow-xl">
                <div className="text-3xl">💳</div>

                <h2 className="mt-5 text-xl font-bold text-white">
                  Costo y copagos
                </h2>

                <p className="mt-3 leading-7 text-slate-400">
                  No mires solamente el precio mensual. Compara cuánto podrías
                  pagar realmente al utilizar las prestaciones.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* MAIN CONTENT */}
        <section id="que-revisar" className="px-4 pb-24">
          <Container>
            <article className="mx-auto max-w-4xl">
              <header className="border-b border-white/10 pb-10">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Guía para comparar
                </span>

                <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
                  ¿Qué debes revisar antes de elegir un plan?
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Si tu prioridad es atenderte en Clínica Alemana, la
                  comparación debe comenzar por el plan específico y no
                  solamente por el nombre de la Isapre.
                </p>
              </header>

              <div className="mt-12 space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    1. Cobertura hospitalaria
                  </h3>

                  <p className="mt-5 text-lg leading-9 text-slate-300">
                    Revisa qué cobertura entrega el plan para hospitalizaciones
                    y procedimientos de mayor complejidad cuando utilizas
                    Clínica Alemana. Los porcentajes de cobertura deben
                    analizarse junto con los topes y demás condiciones del
                    plan.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    2. Cobertura ambulatoria
                  </h3>

                  <p className="mt-5 text-lg leading-9 text-slate-300">
                    También es importante revisar las condiciones para
                    consultas médicas, exámenes, procedimientos y otras
                    prestaciones ambulatorias. Si utilizas Clínica Alemana con
                    frecuencia, este punto puede tener un impacto importante
                    en tus gastos de salud.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    3. Prestadores preferentes
                  </h3>

                  <p className="mt-5 text-lg leading-9 text-slate-300">
                    Algunos planes establecen condiciones particulares cuando
                    utilizas determinados prestadores o redes. La
                    Superintendencia de Salud señala que, en los planes con
                    prestador preferente, los prestadores institucionales y
                    las condiciones correspondientes deben estar identificados
                    en el plan.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    4. Topes de cobertura
                  </h3>

                  <p className="mt-5 text-lg leading-9 text-slate-300">
                    Un porcentaje alto de bonificación no necesariamente
                    significa que el copago será bajo. También debes revisar
                    los topes por prestación, los límites establecidos y cómo
                    se aplican a las atenciones que probablemente utilizarás.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    5. Costo mensual
                  </h3>

                  <p className="mt-5 text-lg leading-9 text-slate-300">
                    El precio del plan debe analizarse junto con la cobertura
                    que realmente necesitas. Una cotización personalizada
                    permite evaluar el presupuesto disponible y compararlo con
                    las condiciones de distintas alternativas.
                  </p>
                </section>
              </div>
            </article>
          </Container>
        </section>

        {/* ESENCIAL */}
        <section className="px-4 pb-24">
          <Container>
            <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-8 md:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Isapre Esencial y Clínica Alemana
              </span>

              <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
                Una alternativa especialmente vinculada con Clínica Alemana
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
                <p>
                  Isapre Esencial ofrece actualmente el{" "}
                  <strong className="text-white">
                    Plan Alemana Integral
                  </strong>
                  , diseñado para cobertura en Clínica Alemana de Santiago.
                </p>

                <p>
                  Según la información oficial vigente de Esencial, este plan
                  contempla atención en Clínica Alemana de Santiago y establece
                  condiciones específicas para situaciones como urgencias y
                  casos en que no sea posible recibir atención en los plazos
                  establecidos.
                </p>

                <p>
                  Antes de contratar cualquier plan, es importante revisar sus
                  condiciones vigentes, cobertura, topes y prestadores para
                  determinar si realmente se ajusta a tus necesidades.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/cotiza-isapre/"
                  className="inline-flex items-center rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-600"
                >
                  Revisar alternativas
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* WHO IS IT FOR */}
        <section className="px-4 pb-24">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                  ¿Para quién puede ser relevante?
                </span>

                <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                  Cuando Clínica Alemana es parte importante de tu decisión
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                  La elección del plan debe considerar tus hábitos de atención,
                  tu grupo familiar y el presupuesto que quieres destinar a
                  salud.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-[#102542] p-7">
                  <h3 className="text-xl font-bold text-white">
                    Personas con Clínica Alemana como prestador habitual
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    Si ya utilizas médicos, especialistas o servicios de
                    Clínica Alemana, conviene incorporar ese antecedente desde
                    el inicio de la comparación.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#102542] p-7">
                  <h3 className="text-xl font-bold text-white">
                    Familias
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    En un grupo familiar debes considerar las necesidades de
                    cada integrante y los centros médicos que prefieren
                    utilizar.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#102542] p-7">
                  <h3 className="text-xl font-bold text-white">
                    Personas que buscan mayor cobertura
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    Cuando el presupuesto disponible es mayor, puedes poner
                    especial atención en cobertura hospitalaria, especialistas,
                    prestadores y topes de prestaciones de mayor costo.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* RELATED ARTICLE */}
        <section className="px-4 pb-24">
          <Container>
            <div className="mx-auto max-w-4xl rounded-3xl border border-blue-400/20 bg-blue-500/5 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-400">
                También puede interesarte
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                ¿Qué Isapre cubre Clínica Alemana?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Conoce la diferencia entre convenio, prestador preferente y
                cobertura, y qué aspectos deberías revisar antes de contratar
                un plan.
              </p>

              <Link
                href="/contenidos/que-isapre-cubre-clinica-alemana"
                className="mt-6 inline-flex items-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-3 font-bold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white"
              >
                Leer la guía
                <span className="ml-2">→</span>
              </Link>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="px-4 pb-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Preguntas frecuentes
                </span>

                <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                  Preguntas sobre Isapres y Clínica Alemana
                </h2>
              </div>

              <div className="mt-12 space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-3xl border border-white/10 bg-[#102542] p-7"
                  >
                    <h3 className="text-xl font-bold text-white">
                      {faq.question}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 pb-24">
          <Container>
            <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8 text-center md:p-12">
              <h2 className="text-3xl font-black text-white md:text-4xl">
                ¿Buscas un plan de Isapre con foco en Clínica Alemana?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Cuéntanos tu situación, renta, edad y grupo familiar para
                revisar alternativas de planes de salud que se ajusten a tus
                necesidades.
              </p>

              <Link
                href="/cotiza-isapre/"
                className="mt-8 inline-flex rounded-xl bg-emerald-500 px-8 py-4 font-bold text-white transition hover:bg-emerald-600"
              >
                Cotizar gratis
                <span className="ml-2">→</span>
              </Link>
            </div>
          </Container>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </main>

      <Footer />
    </>
  );
}