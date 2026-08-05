import {
  BadgeCheck,
  Clock3,
  Globe2,
  HeartHandshake,
  Scale,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";


const items = [
  {
    icon: BadgeCheck,
    title: "+10 años",
    subtitle: "de experiencia",
    text: "Más de una década ayudando a personas y familias a elegir el plan de salud adecuado.",
  },
  {
    icon: Scale,
    title: "Todas las Isapres",
    subtitle: "en un solo lugar",
    text: "Analizamos las distintas alternativas disponibles para ayudarte a tomar una decisión informada.",
  },
  {
    icon: HeartHandshake,
    title: "Asesoría personalizada",
    subtitle: "para cada caso",
    text: "No trabajamos con respuestas genéricas. Cada recomendación considera tu situación particular.",
  },
  {
    icon: ShieldCheck,
    title: "100% gratuito",
    subtitle: "sin compromiso",
    text: "Nuestro servicio de orientación y cotización no tiene costo para ti.",
  },
  {
    icon: Clock3,
    title: "<15 minutos",
    subtitle: "respuesta promedio",
    text: "Normalmente revisamos tu información y te contactamos muy rápidamente.",
  },
  {
    icon: Globe2,
    title: "Todo Chile",
    subtitle: "atención online",
    text: "Puedes cotizar desde cualquier región sin necesidad de asistir presencialmente.",
  },
];



export default function WhyUs() {

  return (

    <Section

      id="beneficios"

      className="
      relative
      overflow-hidden
      bg-[#081B35]
      "

    >



      {/* GLOW */}


      <div

        className="
        absolute
        left-1/2
        top-0
        -z-10
        h-96
        w-96
        -translate-x-1/2
        rounded-full
        bg-emerald-400/10
        blur-[140px]
        "

      />



      <div

        className="
        absolute
        right-0
        bottom-0
        -z-10
        h-[350px]
        w-[350px]
        rounded-full
        bg-blue-400/10
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

            ¿Por qué elegirnos?


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

            Una forma más simple de encontrar
            <br />
            tu próximo plan de salud.


          </h2>






          <p

            className="
            mt-6
            text-lg
            leading-8
            text-slate-400
            "

          >

            Nuestro objetivo es ayudarte a comparar las distintas alternativas
            disponibles para que puedas tomar una decisión con tranquilidad,
            acompañado durante todo el proceso.


          </p>




        </div>









        <div

          className="
          mt-20
          grid
          gap-7
          md:grid-cols-2
          xl:grid-cols-3
          "

        >



          {items.map((item)=>{


            const Icon = item.icon;



            return (


              <div

                key={item.title}

                className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-[#102B4E]/80
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-emerald-400/30
                hover:shadow-[0_25px_70px_rgba(16,185,129,.15)]
                "

              >





                <div

                  className="
                  absolute
                  right-0
                  top-0
                  h-28
                  w-28
                  rounded-full
                  bg-emerald-400/10
                  blur-3xl
                  transition
                  group-hover:scale-125
                  "

                />







                <div className="relative">





                  <div

                    className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-emerald-500
                    to-green-600
                    shadow-lg
                    shadow-emerald-500/30
                    "

                  >


                    <Icon className="h-8 w-8 text-white" />


                  </div>







                  <h3

                    className="
                    mt-7
                    text-3xl
                    font-black
                    text-white
                    "

                  >

                    {item.title}


                  </h3>







                  <p

                    className="
                    mt-1
                    font-medium
                    text-emerald-300
                    "

                  >

                    {item.subtitle}


                  </p>








                  <p

                    className="
                    mt-6
                    leading-8
                    text-slate-400
                    "

                  >

                    {item.text}


                  </p>




                </div>





              </div>


            );


          })}



        </div>





      </Container>



    </Section>


  );

}