import type { MetadataRoute } from "next";
import { contenidos } from "@/data/contenidos";
import { SITE_URL } from "@/lib/site";

const MAIN_PAGE_DATES = {
  home: "2026-09-28",
  cotizador: "2026-09-22",
  clinicaAlemana: "2026-09-27",
  contenidos: "2026-09-11",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const paginasPrincipales: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: MAIN_PAGE_DATES.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/cotizador-isapre`,
      lastModified: MAIN_PAGE_DATES.cotizador,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/isapre-clinica-alemana`,
      lastModified: MAIN_PAGE_DATES.clinicaAlemana,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/contenidos`,
      lastModified: MAIN_PAGE_DATES.contenidos,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const paginasContenido: MetadataRoute.Sitemap = contenidos.map((contenido) => ({
    url: `${SITE_URL}/contenidos/${contenido.slug}`,
    lastModified: contenido.date,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...paginasPrincipales, ...paginasContenido];
}
