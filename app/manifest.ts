import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Isapre Cotiza Inteligente",
    short_name: "Cotiza Isapre",
    description:
      "Compara las principales Isapres de Chile y encuentra el plan que mejor se adapta a ti.",

    start_url: "/",

    display: "standalone",

    background_color: "#050816",

    theme_color: "#050816",

    lang: "es-CL",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}