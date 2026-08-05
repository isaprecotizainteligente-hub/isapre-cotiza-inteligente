"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";


export default function Navbar() {


  const [open, setOpen] = useState(false);




  function goToQuote() {

    document
      .getElementById("cotizacion")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });


    setOpen(false);

  }






  const menuItems = [

    {
      title: "Inicio",
      href: "#",
    },

    {
      title: "Cómo funciona",
      href: "#como-funciona",
    },

    {
      title: "Isapres",
      href: "#isapres",
    },

    {
      title: "Beneficios",
      href: "#beneficios",
    },

  ];






  return (



    <header

      className="
      relative
      z-50
      h-20
      border-b
      border-white/10
      bg-[#081B35]
      "

    >





      <Container>




        <div

          className="
          flex
          h-20
          items-center
          justify-between
          "

        >







          {/* LOGO */}



          <a

            href="#"

            className="
            flex
            items-center
            gap-3
            "

          >




            <Image

              src="/logos/logo-v3.png"

              alt="Isapre Cotiza Inteligente"

              width={70}

              height={70}

              className="
              h-14
              w-14
              object-contain
              "

              priority

            />






            <div>



              <h2

                className="
                text-xl
                font-black
                text-white
                "

              >

                Isapre


              </h2>






              <p

                className="
                text-sm
                font-medium
                text-emerald-400
                "

              >

                Cotiza Inteligente


              </p>






            </div>





          </a>









          {/* MENU DESKTOP */}



          <nav

            className="
            hidden
            items-center
            gap-10
            lg:flex
            "

          >



            {menuItems.map((item)=>(



              <a

                key={item.title}

                href={item.href}

                className="
                text-sm
                font-medium
                text-slate-300
                transition
                hover:text-white
                "

              >

                {item.title}


              </a>



            ))}



          </nav>









          {/* BOTON */}




          <div

            className="
            hidden
            lg:block
            "

          >



            <Button

              onClick={goToQuote}

            >

              🚀 Cotizar gratis


            </Button>



          </div>









          {/* MOBILE */}




          <button


            onClick={()=>setOpen(!open)}


            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-white
            lg:hidden
            "

          >



            {

              open

              ?

              <X className="h-5 w-5"/>

              :

              <Menu className="h-5 w-5"/>

            }



          </button>







        </div>






      </Container>






    </header>



  );

}