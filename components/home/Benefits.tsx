import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import {
    ShieldCheck,
    Stethoscope,
    Clock3,
    Wallet,
    Users,
    Smartphone,
} from "lucide-react";

const benefits = [
    {
        icon: ShieldCheck,
        title: "Todas las Isapres",
        text: "Comparamos todas las alternativas del mercado para encontrar la mejor opción para ti.",
    },
    {
        icon: Stethoscope,
        title: "Asesoría Experta",
        text: "Más de 10 años ayudando a personas y empresas a elegir correctamente.",
    },
    {
        icon: Wallet,
        title: "100% Gratuito",
        text: "Nuestro servicio no tiene costo para ti y no existe ningún compromiso.",
    },
    {
        icon: Clock3,
        title: "Respuesta Rápida",
        text: "Normalmente respondemos en pocos minutos vía WhatsApp.",
    },
    {
        icon: Users,
        title: "Atención Personalizada",
        text: "Cada cotización se realiza según tu situación y necesidades reales.",
    },
    {
        icon: Smartphone,
        title: "Todo Online",
        text: "Cotiza desde cualquier lugar de Chile sin salir de tu casa.",
    },
];

export default function Benefits() {
    return (
        <Section className="bg-slate-950">

            <Container>

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-blue-900/40 px-4 py-2 text-blue-300">
                        ¿Por qué elegir Isapre Cotiza Inteligente?
                    </span>

                    <h2 className="mt-6 text-5xl font-bold text-white">
                        Todo lo que necesitas para tomar la mejor decisión.
                    </h2>

                    <p className="mt-6 text-lg text-slate-400">
                        Comparamos todas las Isapres para recomendarte el plan que realmente te conviene.
                    </p>

                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {benefits.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="
                                group
                                rounded-3xl
                                border
                                border-slate-800
                                bg-slate-900
                                p-8
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-blue-500
                                hover:shadow-2xl
                                hover:shadow-blue-900/30
                            "
                            >

                                <div className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-2xl
                                bg-blue-600/10
                                text-blue-500
                                transition
                                group-hover:bg-blue-600
                                group-hover:text-white
                            ">

                                    <Icon size={34} />

                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-400">
                                    {item.text}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </Container>

        </Section>
    );
}