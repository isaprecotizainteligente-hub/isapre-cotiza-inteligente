import type { MetadataRoute } from "next";

import { contenidos } from "@/data/contenidos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://isaprecotizainteligente.cl";

  const paginasPrincipales: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contenidos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const paginasContenido: MetadataRoute.Sitemap = contenidos.map(
    (contenido) => ({
      url: `${baseUrl}/contenidos/${contenido.slug}`,
      lastModified: new Date(contenido.date),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...paginasPrincipales, ...paginasContenido];
}