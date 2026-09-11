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

            <div className="mt-16 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8">
              <h2 className="text-2xl font-bold text-white">
                ¿Quieres revisar tu plan de salud?
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Recibe orientación personalizada para comparar alternativas
                según tu renta, edad y necesidades.
              </p>

              <Link
                href="/#cotizacion"
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