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
        block: "start",
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
      fixed
      inset-x-0
      top-0
      z-50
      border-b
      border-white/10
      bg-[#050816]/95
      backdrop-blur-xl
      "
    >

      <Container>

        <div
          className="
          flex
          min-h-24
          items-center
          justify-between
          py-3
          "
        >

          {/* Logo */}

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4"
          >

            <Image
              src="/logos/logo-v3.png"
              alt="Isapre Cotiza Inteligente"
              width={80}
              height={80}
              className="
              h-12
              w-12
              object-contain
              lg:h-16
              lg:w-16
              "
              priority
            />


            <div>

              <h2
                className="
                text-lg
                font-black
                tracking-tight
                text-white
                lg:text-xl
                "
              >
                Isapre
              </h2>

              <p
                className="
                text-xs
                font-medium
                text-blue-400
                lg:text-sm
                "
              >
                Cotiza Inteligente
              </p>

            </div>

          </a>



          {/* Desktop */}

          <nav className="hidden items-center gap-10 lg:flex">

            {menuItems.map((item) => (

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



          {/* CTA */}

          <div className="hidden lg:block">

            <Button onClick={goToQuote}>
              🚀 Cotizar gratis
            </Button>

          </div>



          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-white
            transition
            hover:border-blue-500/40
            lg:hidden
            "
          >

            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}

          </button>


        </div>



        {/* Menú móvil */}

        {open && (

          <div
            className="
            mb-4
            rounded-3xl
            border
            border-white/10
            bg-[#050816]
            p-6
            shadow-2xl
            backdrop-blur-xl
            lg:hidden
            "
          >

            <nav className="flex flex-col gap-3">


              {menuItems.map((item) => (

                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                  rounded-xl
                  px-4
                  py-3
                  text-base
                  font-semibold
                  text-slate-300
                  transition
                  hover:bg-white/5
                  hover:text-white
                  "
                >

                  {item.title}

                </a>

              ))}


              <Button
                onClick={goToQuote}
                className="mt-3 w-full"
              >

                🚀 Cotizar gratis

              </Button>


            </nav>

          </div>

        )}

      </Container>

    </header>
  );
}