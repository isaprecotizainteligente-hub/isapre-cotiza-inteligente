import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function Footer() {
  const links = [
    {
      title: "Inicio",
      href: "#",
    },
    {
      title: "Beneficios",
      href: "#beneficios",
    },
    {
      title: "Cómo funciona",
      href: "#como-funciona",
    },
    {
      title: "Preguntas frecuentes",
      href: "#faq",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <Container>

        <div className="grid gap-14 py-20 lg:grid-cols-4">

          {/* Marca */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-black text-white">

              Isapre Cotiza Inteligente

            </h2>

            <p className="mt-6 max-w-lg leading-8 text-slate-400">

              Te ayudamos a comparar las principales Isapres de Chile
              para encontrar un plan acorde a tus necesidades, con una
              asesoría personalizada, gratuita y sin compromiso.

            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">

              <ShieldCheck className="h-7 w-7 text-blue-400" />

              <p className="text-slate-300">

                Tus datos son tratados de forma confidencial y solo se utilizan
                para preparar tu cotización.

              </p>

            </div>

          </div>

          {/* Navegación */}

          <div>

            <h3 className="text-lg font-bold text-white">

              Navegación

            </h3>

            <div className="mt-6 space-y-4">

              {links.map((item) => (

                <a
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-2 text-slate-400 transition hover:text-white"
                >

                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />

                  {item.title}

                </a>

              ))}

            </div>

          </div>

          {/* Contacto */}

          <div>

            <h3 className="text-lg font-bold text-white">

              Contacto

            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3 text-slate-400">

                <Mail className="h-5 w-5 text-blue-400" />

                isaprecotizainteligente@gmail.com

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <Phone className="h-5 w-5 text-blue-400" />

                Atención por WhatsApp

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <MapPin className="h-5 w-5 text-blue-400" />

                Atención en todo Chile

              </div>

            </div>

          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-500 lg:flex-row">

          <p>

            © {new Date().getFullYear()} Isapre Cotiza Inteligente.
            Todos los derechos reservados.

          </p>

          <p>

            Diseñado para ayudarte a elegir el plan de salud más conveniente.

          </p>

        </div>

      </Container>

    </footer>
  );
}