"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const whatsappUrl = "https://wa.me/56974171917";

  const menuItems = [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Isapres",
      href: "/#isapres",
    },
    {
      title: "Cotizador",
      href: "/#cotizacion",
    },
    {
      title: "Guías y contenidos",
      href: "/contenidos",
    },
    {
      title: "Cómo funciona",
      href: "/#como-funciona",
    },
    {
      title: "Contacto",
      href: "/#cotizacion",
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
        border-[#E7EDF2]
        bg-white
      "
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="
              flex
              shrink-0
              items-center
              gap-2.5
            "
          >
            <div className="flex h-[48px] w-[48px] items-center justify-center overflow-visible">
              <Image
                src="/android-chrome-512x512.png"
                alt="Isapre Cotiza Inteligente"
                width={512}
                height={512}
                priority
                className="
                  h-[48px]
                  w-[48px]
                  object-contain
                  scale-[1.12]
                "
              />
            </div>

            <div className="leading-none">
              <div
                className="
                  text-[18px]
                  font-black
                  tracking-[-0.02em]
                  text-[#123B63]
                "
              >
                Isapre
              </div>

              <div
                className="
                  mt-1
                  text-[11px]
                  font-bold
                  tracking-[-0.01em]
                  text-[#16A66A]
                "
              >
                Cotiza Inteligente
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="
              hidden
              items-center
              gap-7
              lg:flex
            "
          >
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="
                  whitespace-nowrap
                  text-[13px]
                  font-medium
                  text-[#274C6E]
                  transition-colors
                  duration-200
                  hover:text-[#123B63]
                "
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* WHATSAPP DESKTOP */}
          <div className="hidden lg:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="
                  min-h-10
                  rounded-lg
                  px-5
                  py-2.5
                  text-[13px]
                  font-bold
                "
              >
                Hablar por WhatsApp
                <span className="ml-2">→</span>
              </Button>
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-[#DCE5EC]
              bg-white
              text-[#123B63]
              lg:hidden
            "
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="
              border-t
              border-[#E7EDF2]
              bg-white
              py-5
              lg:hidden
            "
          >
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    rounded-lg
                    px-3
                    py-3
                    text-sm
                    font-semibold
                    text-[#274C6E]
                    transition-colors
                    hover:bg-[#F5F9FC]
                    hover:text-[#123B63]
                  "
                >
                  {item.title}
                </Link>
              ))}

              <div className="mt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  <Button className="w-full">
                    Hablar por WhatsApp
                    <span className="ml-2">→</span>
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}