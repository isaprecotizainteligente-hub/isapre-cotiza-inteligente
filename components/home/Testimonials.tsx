import { Quote, Star } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const instagramPostUrl =
  "https://www.instagram.com/p/DWly5uHgCjP/?stkn=MWdzYTNjNXRqemVvcQ==";

const testimonials = [
  {
    text: "Buena asesoría y atención, 100% recomendados!",
  },
  {
    text: "Muy buena asesoría, 100% personalizado y profesional.",
  },
  {
    text: "Trabajé con ellos y la verdad me ayudaron y asesoraron en todo el proceso para mejorar mi plan... 100% recomendado.",
  },
];

export default function Testimonials() {
  return (
    <Section
      className="
        border-y
        border-[#E7EDF2]
        bg-[#F5F9FC]
        !py-12
        lg:!py-14
      "
    >
      <Container>
        {/* ENCABEZADO */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#16A66A]
                sm:text-xs
              "
            >
              Opiniones
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-black
                leading-tight
                tracking-tight
                text-[#123B63]
                sm:text-4xl
                lg:text-[38px]
              "
            >
              Lo que dicen nuestros clientes
            </h2>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-[#60758A]
                sm:text-base
              "
            >
              Opiniones sobre nuestra asesoría y acompañamiento.
            </p>
          </div>

          <a
            href={instagramPostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              shrink-0
              items-center
              text-sm
              font-bold
              text-[#1769C2]
              transition-colors
              hover:text-[#123B63]
            "
          >
            Opiniones publicadas en Instagram
            <span className="ml-2">→</span>
          </a>
        </div>

        {/* TESTIMONIOS */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.text}
              className="
                rounded-xl
                border
                border-[#DCE5EC]
                bg-white
                p-6
                shadow-[0_8px_24px_rgba(16,42,67,0.04)]
              "
            >
              {/* ESTRELLAS */}
              <div className="flex items-center gap-1 text-[#F2B84B]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-current"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* CITA */}
              <div className="mt-5 flex items-start gap-3">
                <Quote
                  className="
                    mt-0.5
                    h-5
                    w-5
                    shrink-0
                    text-[#16A66A]
                  "
                  strokeWidth={2}
                />

                <p
                  className="
                    text-sm
                    leading-6
                    text-[#344E68]
                    sm:text-[15px]
                  "
                >
                  “{testimonial.text}”
                </p>
              </div>

              {/* FUENTE */}
              <div
                className="
                  mt-6
                  border-t
                  border-[#E7EDF2]
                  pt-4
                "
              >
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#16A66A]
                  "
                >
                  Opinión publicada en Instagram
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CIERRE */}
        <div
          className="
            mx-auto
            mt-9
            max-w-3xl
            border-t
            border-[#D7E2EA]
            pt-6
            text-center
          "
        >
          <p
            className="
              text-sm
              leading-6
              text-[#60758A]
              sm:text-base
            "
          >
            Una buena asesoría empieza por entender tu situación y acompañarte
            durante todo el proceso.
          </p>
        </div>
      </Container>
    </Section>
  );
}