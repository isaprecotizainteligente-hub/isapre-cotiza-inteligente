import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const guides = [
  {
    category: "CLÍNICA ALEMANA",
    title: "¿Qué Isapre cubre Clínica Alemana? Guía para elegir tu plan",
    description:
      "¿Buscas una Isapre con cobertura en Clínica Alemana? Conoce cómo revisar prestadores, cobertura y condiciones antes de elegir.",
    image: "/images/articulo-clinica-alemana.png",
    slug: "que-isapre-cubre-clinica-alemana",
  },
  {
    category: "ISAPRES",
    title: "Cómo elegir un plan de Isapre según tu renta y necesidades",
    description:
      "Conoce los principales factores que debes revisar antes de elegir un plan de Isapre según tu situación.",
    image: "/images/articulo-comparar-planes-isapre.png",
    slug: "como-elegir-un-plan-de-isapre",
  },
  {
    category: "ISAPRES Y FONASA",
    title: "¿Isapre o Fonasa? Factores para tomar una mejor decisión",
    description:
      "Conoce las principales diferencias que debes analizar entre Isapre y Fonasa antes de decidir.",
    image: "/images/articulo-isapre-o-fonasa.png",
    slug: "isapre-o-fonasa-cual-conviene",
  },
];

export default function Guides() {
  return (
    <Section className="border-y border-[#E7EDF2] bg-[#F5F9FC] !py-11 sm:!py-13 lg:!py-14">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-4xl">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16A66A] sm:text-xs">
              Guías y contenidos
            </p>

            <h2 className="mt-2.5 max-w-4xl text-3xl font-black leading-[1.08] tracking-[-0.025em] text-[#123B63] sm:text-4xl lg:text-[40px]">
              Te ayudamos a entender mejor el mundo de las Isapres
            </h2>

            <p className="mt-2.5 max-w-2xl text-sm leading-6 text-[#60758A] sm:text-[15px]">
              Información clara para comparar planes, cobertura y alternativas
              según tu situación.
            </p>
          </div>

          <Link
            href="/contenidos"
            className="inline-flex shrink-0 items-center text-sm font-bold text-[#1769C2] transition-colors hover:text-[#123B63]"
          >
            Ver todos los artículos
            <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="group overflow-hidden rounded-xl border border-[#D5E1E9] bg-white shadow-[0_6px_20px_rgba(16,42,67,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2D3DF] hover:shadow-[0_14px_30px_rgba(16,42,67,0.075)]"
            >
              <Link
                href={`/contenidos/${guide.slug}`}
                className="block"
                aria-label={`Leer artículo: ${guide.title}`}
              >
                <div className="grid min-h-[158px] sm:min-h-[168px] lg:grid-cols-[38%_62%]">
                  <div className="relative min-h-[158px] overflow-hidden bg-[#EAF1F6]">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      sizes="(min-width: 1024px) 16vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-col justify-between p-4 sm:p-5">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#1769C2] sm:text-[10px]">
                        {guide.category}
                      </p>

                      <h3 className="mt-2 text-[15px] font-black leading-[1.18] tracking-[-0.01em] text-[#123B63] sm:text-[16px]">
                        {guide.title}
                      </h3>

                      <p className="mt-2.5 line-clamp-3 text-[11px] leading-5 text-[#60758A] sm:text-xs">
                        {guide.description}
                      </p>
                    </div>

                    <div className="mt-3 inline-flex items-center text-xs font-bold text-[#1769C2] transition-colors group-hover:text-[#123B63]">
                      Leer artículo
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}