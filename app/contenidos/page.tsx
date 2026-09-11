import Link from "next/link";
import type { Metadata } from "next";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Container from "@/components/ui/Container";

import { contenidos } from "@/data/contenidos";

export const metadata: Metadata = {
  title: "Guías de salud y consejos sobre Isapres",
  description:
    "Encuentra guías sobre Isapres, planes de salud, coberturas, renta imponible y consejos para elegir una alternativa conveniente en Chile.",
  alternates: {
    canonical: "/contenidos",
  },
};

export default function ContenidosPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#081B35] pt-20">
        <section className="px-4 pb-24 pt-16 md:pt-20">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Centro de información
              </span>

              <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.08] text-white md:text-6xl">
                Guías para elegir mejor tu plan de salud
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                Información clara sobre Isapres, planes de salud, coberturas y
                alternativas para tomar mejores decisiones en Chile.
              </p>
            </div>

            <div className="mx-auto mt-14 flex max-w-7xl flex-wrap justify-center gap-6">
              {contenidos.map((contenido) => (
                <article
                  key={contenido.slug}
                  className="group flex min-h-[330px] w-full max-w-md flex-col rounded-3xl border border-white/10 bg-[#102542] p-7 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-blue-950/40"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider">
                    <span className="text-emerald-400">
                      {contenido.category}
                    </span>

                    <span className="text-slate-500">
                      {contenido.readingTime}
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-bold leading-tight text-white">
                    {contenido.title}
                  </h2>

                  <p className="mt-4 flex-1 text-base leading-7 text-slate-400">
                    {contenido.description}
                  </p>

                  <Link
                    href={`/contenidos/${contenido.slug}`}
                    className="mt-8 inline-flex items-center self-start rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-3 font-bold text-blue-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300"
                  >
                    Leer guía
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}