import { PostCategory } from "@/content/types";

export const POST_CATEGORIES: Record<
  PostCategory,
  { name: string; description: string }
> = {
  guitar: {
    name: "Guitarra",
    description: "Técnicas, ejercicios y guías para dominar las seis cuerdas.",
  },
  theory: {
    name: "Teoría Musical",
    description:
      "Conceptos fundamentales, armonía y análisis para entender la música.",
  },
  "music-production": {
    name: "Producción",
    description:
      "Tips de mezcla, mastering y herramientas de software musical.",
  },
  resources: {
    name: "Recursos",
    description:
      "Descargables, presets y herramientas gratuitas para tu flujo creativo.",
  },
};
