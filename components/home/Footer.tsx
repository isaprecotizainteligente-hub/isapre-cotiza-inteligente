import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Isapres", href: "/#isapres" },
  { label: "Cotizador", href: "/#cotizacion" },
  { label: "Guías y contenidos", href: "/contenidos" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Contacto", href: "/#cotizacion" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#DCE5EC] bg-white">
      <Container>
        <div className="grid gap-6 py-6 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10 lg:py-7">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Isapre Cotiza Inteligente"
            >
              <Image
                src="/android-chrome-512x512.png"
                alt="Isapre Cotiza Inteligente"
                width={512}
                height={512}
                className="h-11 w-11 object-contain"
              />

              <div>
                <div className="text-base font-black leading-none text-[#123B63]">
                  Isapre
                </div>

                <div className="mt-1 text-xs font-semibold text-[#16A66A]">
                  Cotiza Inteligente
                </div>
              </div>
            </Link>

            <p className="mt-3 max-w-sm text-xs leading-5 text-[#60758A]">
              Te ayudamos a comparar alternativas de Isapre según tu renta,
              edad, cargas, necesidades y prestadores preferidos.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.14em] text-[#123B63]">
              Navegación
            </h3>

            <nav className="mt-3 grid gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-xs font-medium text-[#60758A] transition-colors hover:text-[#123B63]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.14em] text-[#123B63]">
              Contacto
            </h3>

            <div className="mt-3 space-y-3">
              <a
                href="https://wa.me/56974171917"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit text-xs font-medium text-[#60758A] transition-colors hover:text-[#16A66A]"
              >
                WhatsApp
              </a>

              <a
                href="https://wa.me/56974171917"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-[#16A66A] px-3 py-2 text-xs font-bold text-[#16A66A] transition-colors hover:bg-[#16A66A] hover:text-white"
              >
                Hablar con un asesor
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E7EDF2] py-3.5 pr-24 text-[10px] text-[#7B8794] sm:flex sm:items-center sm:justify-between sm:gap-6 sm:pr-24">
          <p>
            © {new Date().getFullYear()} Isapre Cotiza Inteligente. Todos los
            derechos reservados.
          </p>

          <p className="mt-1.5 sm:mt-0">
            Asesoría gratuita y personalizada.
          </p>
        </div>
      </Container>
    </footer>
  );
}