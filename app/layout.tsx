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
  metadataBase: new URL("https://www.isaprecotizainteligente.cl"),

  title: {
    default: "Isapre Cotiza Inteligente | Compara las principales Isapres de Chile",
    template: "%s | Isapre Cotiza Inteligente",
  },

  description:
    "Compara las principales Isapres de Chile y encuentra el plan ideal para ti con asesoría gratuita.",

  alternates: {
    canonical: "/",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-white">

        {children}

        <WhatsAppButton />

      </body>

      <GoogleTagManager gtmId="GTM-T67LJSHF" />

    </html>
  );
}