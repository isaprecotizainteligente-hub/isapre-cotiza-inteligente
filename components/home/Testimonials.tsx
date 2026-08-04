import { Star, Quote } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const testimonials = [
  {
    initials: "JP",
    city: "Santiago",
    text: "Me ayudaron a comparar distintas alternativas de Isapre y encontré un plan que se ajustaba mucho mejor a lo que necesitaba. Todo fue rápido y muy claro.",
  },
  {
    initials: "CM",
    city: "Concepción",
    text: "Respondieron mi consulta por WhatsApp muy rápido. Me explicaron las diferencias entre los planes y pude tomar una decisión con mucha más tranquilidad.",
  },
  {
    initials: "AR",
    city: "Viña del Mar",
    text: "Pensé que el proceso sería complicado, pero fue todo lo contrario. La asesoría fue clara, personalizada y completamente gratuita.",
  },
];

export default function Testimonials() {
  return (
    <Section className="relative overflow-hidden bg-[#08101f]">

      {/* Glow */}

      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

            Opiniones

          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white lg:text-5xl">

            La confianza se gana
            con resultados.

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">

            Nuestro compromiso es ayudarte a encontrar el plan que mejor se
            adapte a tus necesidades, con una asesoría clara, cercana y sin
            costo.

          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <article
              key={item.initials}
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-[#111C34]/80
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-500/30
                hover:shadow-[0_25px_70px_rgba(37,99,235,.18)]
              "
            >

              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">

                <div className="flex items-center justify-between">

                  <div className="flex gap-1">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}

                  </div>

                  <Quote className="h-8 w-8 text-blue-400/40" />

                </div>

                <p className="mt-8 leading-8 text-slate-300">

                  "{item.text}"

                </p>

                <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-lg font-bold text-white">

                    {item.initials}

                  </div>

                  <div>

                    <h3 className="font-bold text-white">

                      Cliente verificado

                    </h3>

                    <p className="text-sm text-slate-400">

                      {item.city}

                    </p>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </Container>

    </Section>
  );
}