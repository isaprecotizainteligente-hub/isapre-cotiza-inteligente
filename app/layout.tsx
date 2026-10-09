
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.isaprecotizainteligente.cl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Isapre Cotiza Inteligente | Compara planes de salud en Chile",
    template: "%s | Isapre Cotiza Inteligente",
  },

  description:
    "Compara planes de Isapre en Chile y encuentra alternativas según tu renta, edad, cobertura y necesidades. Recibe asesoría para evaluar tus opciones.",

  openGraph: {
    siteName: "Isapre Cotiza Inteligente",
    locale: "es_CL",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Isapre Cotiza Inteligente",
  url: `${SITE_URL}/`,
  description:
    "Servicio de asesoría para comparar planes de Isapre en Chile y evaluar alternativas de cobertura.",
  sameAs: [
    "https://www.instagram.com/isaprecotizainteligente.cl/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-white">
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {
                if(f.fbq)return;
                n=f.fbq=function(){
                  n.callMethod ?
                  n.callMethod.apply(n,arguments) :
                  n.queue.push(arguments)
                };
                if(!f._fbq)f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(
                window,
                document,
                'script',
                'https://connect.facebook.net/en_US/fbevents.js'
              );
              fbq('init', '2257622715018696');
              fbq('track', 'PageView');
            `,
          }}
        />

        {children}

        <WhatsAppButton />

        {/* Datos estructurados de la organización */}
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-T67LJSHF" />
      </body>
    </html>
  );
}
