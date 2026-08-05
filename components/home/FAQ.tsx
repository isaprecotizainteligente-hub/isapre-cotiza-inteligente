"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";


const questions = [
  {
    question: "¿La asesoría tiene algún costo?",
    answer:
      "No. Nuestro servicio es completamente gratuito. Analizamos tu situación y te orientamos para encontrar el plan que mejor se adapte a tus necesidades.",
  },
  {
    question: "¿Qué Isapres comparan?",
    answer:
      "Comparamos las principales Isapres disponibles para ayudarte a encontrar la alternativa más conveniente según tu edad, renta y cobertura requerida.",
  },
  {
    question: "¿Cuánto demora la cotización?",
    answer:
      "Normalmente respondemos por WhatsApp en menos de 15 minutos dentro del horario de atención.",
  },
  {
    question: "¿Puedo cambiarme desde Fonasa?",
    answer:
      "Sí. Revisamos tu caso y te explicamos si cambiarte a una Isapre puede ser una buena alternativa para ti y tu familia.",
  },
  {
    question: "¿Mis datos son confidenciales?",
    answer:
      "Sí. Toda la información que compartes con nosotros es confidencial y únicamente será utilizada para preparar tu cotización.",
  },
];



export default function FAQ() {


  const [open, setOpen] = useState<number | null>(0);



  return (


    <Section
      id="faq"
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
        left-0
        top-0
        -z-10
        h-96
        w-96
        rounded-full
        bg-emerald-500/10
        blur-[160px]
        "
      />


      <div
        className="
        absolute
        right-0
        bottom-0
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
          mx-auto
          max-w-3xl
          text-center
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

            Preguntas frecuentes


          </span>






          <h2
            className="
            mt-6
            text-4xl
            font-black
            tracking-tight
            text-white
            lg:text-5xl
            "
          >

            Respondemos las dudas
            más comunes.


          </h2>






          <p
            className="
            mt-6
            text-lg
            leading-8
            text-slate-400
            "
          >

            Antes de tomar una decisión, queremos que tengas toda la información
            necesaria para elegir con tranquilidad.


          </p>



        </div>







        <div
          className="
          mx-auto
          mt-20
          max-w-4xl
          space-y-5
          "
        >




          {questions.map((item,index)=>{


            const isOpen = open === index;



            return (



              <div

                key={item.question}

                className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#111C34]/80
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-emerald-400/30
                "

              >






                <button

                  onClick={()=>setOpen(isOpen ? null : index)}

                  className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-6
                  p-7
                  text-left
                  "

                >




                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >





                    <div

                      className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-emerald-500
                      to-teal-400
                      shadow-lg
                      shadow-emerald-500/30
                      "

                    >


                      <HelpCircle className="h-6 w-6 text-white"/>


                    </div>







                    <span
                      className="
                      text-lg
                      font-semibold
                      text-white
                      "
                    >

                      {item.question}


                    </span>




                  </div>







                  <ChevronDown

                    className={`
                    h-6
                    w-6
                    text-slate-400
                    transition-transform
                    duration-300
                    ${isOpen ? "rotate-180" : ""}
                    `}

                  />




                </button>








                <div

                  className={`
                  grid
                  transition-all
                  duration-300
                  ${
                    isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                  }
                  `}

                >



                  <div className="overflow-hidden">


                    <div
                      className="
                      border-t
                      border-white/10
                      px-7
                      py-6
                      leading-8
                      text-slate-400
                      "
                    >

                      {item.answer}


                    </div>


                  </div>


                </div>





              </div>



            );


          })}



        </div>





      </Container>





    </Section>


  );

}