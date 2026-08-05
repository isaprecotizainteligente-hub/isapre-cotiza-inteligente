"use client";

import { ArrowRight, ShieldCheck, Clock3 } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";


export default function CTA() {


  function goToQuote() {

    document
      .getElementById("cotizacion")
      ?.scrollIntoView({
        behavior: "smooth",
      });

  }




  return (


    <Section

      className="
      relative
      overflow-hidden
      bg-[#081B35]
      "

    >





      {/* Glow */}



      <div

        className="
        absolute
        left-1/2
        top-1/2
        -z-10
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-emerald-500/15
        blur-[180px]
        "

      />





      <div

        className="
        absolute
        right-0
        top-0
        -z-10
        h-80
        w-80
        rounded-full
        bg-blue-500/10
        blur-[150px]
        "

      />






      <Container>





        <div

          className="
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#102B4E]
          to-[#081B35]
          p-10
          lg:p-16
          "

        >






          <div

            className="
            mx-auto
            max-w-4xl
            text-center
            -mt-8
            "

          >





            <span

              className="
              inline-flex
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-400/10
              px-5
              py-2
              text-sm
              font-semibold
              text-emerald-300
              "

            >

              Revisión gratuita


            </span>








            <h2

              className="
              mt-8
              text-4xl
              font-black
              tracking-tight
              text-white
              lg:text-6xl
              "

            >

              Descubre si hoy mismo puedes
              mejorar tu plan de salud.


            </h2>









            <p

              className="
              mx-auto
              mt-8
              max-w-2xl
              text-xl
              leading-9
              text-slate-300
              "

            >

              Revisamos tu situación y te ayudamos a encontrar una mejor
              alternativa según tu edad, renta y necesidades.


            </p>









            <div

              className="
              mt-12
              flex
              flex-wrap
              justify-center
              gap-4
              "

            >





              <Button

                onClick={goToQuote}

                className="
                px-10
                py-5
                text-lg
                "

              >


                Revisar mi plan


                <ArrowRight className="ml-2 h-5 w-5"/>


              </Button>






            </div>









            <div

              className="
              mt-12
              flex
              flex-wrap
              justify-center
              gap-8
              text-slate-400
              "

            >





              <div

                className="
                flex
                items-center
                gap-2
                "

              >

                <ShieldCheck
                  className="
                  h-5
                  w-5
                  text-emerald-400
                  "
                />

                100% gratuito


              </div>







              <div

                className="
                flex
                items-center
                gap-2
                "

              >

                <Clock3
                  className="
                  h-5
                  w-5
                  text-emerald-400
                  "
                />

                Respuesta rápida


              </div>







            </div>





          </div>






        </div>






      </Container>





    </Section>


  );

}