import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Container from "@/components/ui/Container";

import { contenidos } from "@/data/contenidos";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type InternalLinkConfig = {
  href: string;
  title: string;
  text: string;
};

export function generateStaticParams() {
  return contenidos.map((contenido) => ({
    slug: contenido.slug,
  }));
}

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getInternalLink(slug: string): InternalLinkConfig {
  const links: Record<string, InternalLinkConfig> = {
    "como-elegir-un-plan-de-isapre": {
      href: "/cotizador-isapre/",
      title: "¿Quieres comparar planes de Isapre?",
      text:
        "Puedes utilizar nuestro cotizador de Isapres para revisar alternativas según tu renta, edad, cargas y necesidades de cobertura.",
    },

    "que-es-la-renta-imponible-para-cotizar-isapre": {
      href: "/cotiza-isapre/",
      title: "¿Quieres cotizar una Isapre?",
      text:
        "Conoce las alternativas disponibles y revisa una cotización considerando tu renta imponible y las características de tu situación.",
    },

    "isapre-o-fonasa-cual-conviene": {
      href: "/cotiza-isapre/",
      title: "¿Quieres conocer alternativas de Isapre?",
      text:
        "Puedes solicitar una cotización y comparar alternativas de planes de salud según tu situación actual.",
    },

    "como-comparar-planes-de-isapre": {
      href: "/cotizador-isapre/",
      title: "Compara planes de Isapre",
      text:
        "Nuestro cotizador te permite iniciar una comparación considerando precio, cobertura, prestadores y tus necesidades.",
    },

    "cuando-conviene-cambiarse-de-isapre": {
      href: "/cotiza-isapre/",
      title: "¿Estás evaluando cambiarte de Isapre?",
      text:
        "Antes de tomar una decisión puedes cotizar y comparar otras alternativas de planes de salud.",
    },

    "que-revisar-antes-de-contratar-un-plan-de-salud": {
      href: "/cotizador-isapre/",
      title: "¿Quieres comparar un plan de salud?",
      text:
        "Revisa alternativas mediante nuestro cotizador de Isapres y considera cobertura, precio, prestadores y necesidades personales.",
    },
  };

  return (
    links[slug] ?? {
      href: "/cotiza-isapre/",
      title: "¿Quieres cotizar una Isapre?",
      text:
        "Puedes revisar alternativas de planes de salud y solicitar una cotización personalizada.",
    }
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const contenido = contenidos.find((item) => item.slug === slug);

  if (!contenido) {
    return {};
  }

  const articleUrl = `https://isaprecotizainteligente.cl/contenidos/${contenido.slug}`;

  return {
    title: contenido.title,
    description: contenido.description,
    keywords: contenido.keywords,

    alternates: {
      canonical: articleUrl,
    },

    openGraph: {
      title: contenido.title,
      description: contenido.description,
      url: articleUrl,
      siteName: "Isapre Cotiza Inteligente",
      locale: "es_CL",
      type: "article",
      publishedTime: contenido.date,
      modifiedTime: contenido.date,
      authors: ["Isapre Cotiza Inteligente"],
    },

    twitter: {
      card: "summary_large_image",
      title: contenido.title,
      description: contenido.description,
    },
  };
}

export default async function ContenidoPage({ params }: PageProps) {
  const { slug } = await params;

  const contenido = contenidos.find((item) => item.slug === slug);

  if (!contenido) {
    notFound();
  }

  const articleUrl = `https://isaprecotizainteligente.cl/contenidos/${contenido.slug}`;

  const internalLink = getInternalLink(contenido.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",

    "@id": articleUrl,

    headline: contenido.title,
    description: contenido.description,

    url: articleUrl,

    datePublished: contenido.date,
    dateModified: contenido.date,

    inLanguage: "es-CL",

    articleSection: contenido.category,
    keywords: contenido.keywords.join(", "),

    author: {
      "@type": "Organization",
      name: "Isapre Cotiza Inteligente",
      url: "https://isaprecotizainteligente.cl",
    },

    publisher: {
      "@type": "Organization",
      name: "Isapre Cotiza Inteligente",
      url: "https://isaprecotizainteligente.cl",
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#081B35] pb-20 pt-32">
        <Container>
          <article className="mx-auto max-w-4xl">
            <Link
              href="/contenidos"
              className="inline-flex items-center text-sm font-semibold text-blue-400 transition hover:text-emerald-400"
            >
              ← Volver a las guías
            </Link>

            <header className="mt-10 border-b border-white/10 pb-10">
              <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-emerald-400">
                  {contenido.category}
                </span>

                <span className="text-slate-500">
                  {contenido.readingTime}
                </span>

                <time
                  dateTime={contenido.date}
                  className="text-slate-500"
                >
                  {formatDate(contenido.date)}
                </time>
              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
                {contenido.title}
              </h1>

              <p className="mt-6 text-xl leading-9 text-slate-300">
                {contenido.description}
              </p>
            </header>

            <div className="mt-12 space-y-12">
              {contenido.content.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={`${section.heading}-${index}`}
                        className="text-lg leading-9 text-slate-300"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* ENLACE INTERNO SEO */}
            <div
              className="
                mt-16
                rounded-3xl
                border
                border-blue-400/20
                bg-blue-500/5
                p-8
              "
            >
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-400">
                También puede interesarte
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white">
                {internalLink.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                {internalLink.text}
              </p>

              <Link
                href={internalLink.href}
                className="
                  mt-6
                  inline-flex
                  items-center
                  rounded-xl
                  border
                  border-emerald-400/30
                  bg-emerald-500/10
                  px-5
                  py-3
                  font-bold
                  text-emerald-300
                  transition
                  hover:border-emerald-400
                  hover:bg-emerald-500/20
                  hover:text-white
                "
              >
                Ver cotización
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8">
              <h2 className="text-2xl font-bold text-white">
                ¿Quieres revisar tu plan de salud?
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Recibe orientación personalizada para comparar alternativas
                según tu renta, edad y necesidades.
              </p>

              <Link
                href="/cotiza-isapre/"
                className="
                  mt-6
                  inline-flex
                  rounded-xl
                  bg-emerald-500
                  px-6
                  py-3
                  font-bold
                  text-white
                  transition
                  hover:bg-emerald-600
                "
              >
                Cotizar gratis
              </Link>
            </div>
          </article>
        </Container>

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