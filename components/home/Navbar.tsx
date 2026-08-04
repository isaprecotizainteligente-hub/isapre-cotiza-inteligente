"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/80 shadow-2xl backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}

          <a
            href="#"
            className="group flex items-center gap-4"
          >
            <Image
              src="/logos/logo.png"
              alt="Isapre Cotiza Inteligente"
              width={52}
              height={52}
              style={{
                width: "52px",
                height: "auto",
              }}
              priority
            />

            <div>

              <h2 className="text-xl font-black tracking-tight text-white transition group-hover:text-blue-300">

                Isapre

              </h2>

              <p className="text-sm font-medium text-blue-400">

                Cotiza Inteligente

              </p>

            </div>

          </a>

          {/* Menú */}

          <nav className="hidden items-center gap-10 lg:flex">

            {[
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
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="
                relative
                text-sm
                font-medium
                text-slate-300
                transition-colors
                duration-300
                hover:text-white
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-blue-500
                after:transition-all
                after:duration-300
                hover:after:w-full
                "
              >
                {item.title}
              </a>
            ))}

          </nav>

          {/* Desktop */}

          <div className="hidden lg:block">

            <Button>

              🚀 Cotizar gratis

            </Button>

          </div>

          {/* Mobile */}

          <button
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
            backdrop-blur-xl
            transition
            hover:border-blue-500/40
            lg:hidden
            "
          >

            <Menu className="h-6 w-6" />

          </button>

        </div>
      </Container>
    </header>
  );
}