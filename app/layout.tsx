import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

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



export const metadata: Metadata = {


  metadataBase: new URL(
    "https://isaprecotizainteligente.cl"
  ),



  title: {

    default:
      "Isapre Cotiza Inteligente | Compara planes de salud en Chile",

    template:
      "%s | Isapre Cotiza Inteligente",

  },



  description:

    "Compara tu plan de Isapre gratis. Te ayudamos a encontrar una alternativa más conveniente según tu renta, edad y necesidades en Chile.",



  keywords: [

    "isapre",

    "cotizar isapre",

    "comparar isapres",

    "planes de salud",

    "isapre chile",

    "cambiarse de isapre",

    "mejor isapre",

    "asesor isapre",

  ],



  alternates: {

    canonical:
      "https://isaprecotizainteligente.cl/",

  },



  openGraph: {

    title:
      "Isapre Cotiza Inteligente | Compara tu plan de salud",

    description:
      "Revisamos tu plan actual y buscamos una alternativa más conveniente para ti.",

    url:
      "https://isaprecotizainteligente.cl/",

    siteName:
      "Isapre Cotiza Inteligente",

    locale:
      "es_CL",

    type:
      "website",

  },



  twitter: {

    card:
      "summary_large_image",

    title:
      "Isapre Cotiza Inteligente | Compara planes de salud",

    description:
      "Asesoría gratuita para encontrar una mejor alternativa de Isapre.",

  },

};





export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (


    <html

      lang="es"

      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}

    >



      <body

        className="
          min-h-full
          bg-slate-950
          text-white
        "

      >



        {children}



        <WhatsAppButton />





        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{

            __html: JSON.stringify({


              "@context":
                "https://schema.org",



              "@type":
                "LocalBusiness",



              "name":
                "Isapre Cotiza Inteligente",



              "url":
                "https://isaprecotizainteligente.cl/",



              "description":
                "Asesoría gratuita para comparar planes de Isapre en Chile y encontrar alternativas de cobertura según las necesidades de cada persona.",



              "areaServed": {

                "@type":
                  "Country",

                "name":
                  "Chile"

              },



              "serviceType":
                "Asesoría y comparación de planes de Isapre",



              "priceRange":
                "Gratis",



              "contactPoint": {

                "@type":
                  "ContactPoint",

                "contactType":
                  "customer service",

                "availableLanguage":
                  "Spanish"

              },



              "sameAs": [

                "https://www.instagram.com/isaprecotizainteligente.cl/"

              ]



            })

          }}



        />



      </body>



      <GoogleTagManager

        gtmId="GTM-T67LJSHF"

      />



    </html>


  );

}