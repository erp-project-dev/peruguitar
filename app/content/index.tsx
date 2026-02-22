import { Post, PostAuthor, PostCategory } from "./types";

import { TwoWorldsBackingTrack } from "./posts/resources/01-two-worlds-backing-track";
import { AloneBackingTrack } from "./posts/resources/02-alone-backing-track";
import { PentatonicFusionLick01 } from "./posts/guitar/01-pentatonic-fusion-lick";
import { PorQueNoMejoramosEnLaGuitarra } from "./posts/guitar/02-por-que-no-mejoramos-en-la-guitarra";

export const POSTS: Post[] = [
  {
    category: PostCategory.Resources,
    id: "two-worlds-backing-track",
    title: "Two Worlds Backing Track",
    description:
      "Versión definitiva de mi primer tema instrumental. Ideal para practicar fraseo técnico y melódico.",
    content: TwoWorldsBackingTrack,
    date: new Date("2026-02-11"),
    author: PostAuthor.ErpProject,
  },
  {
    category: PostCategory.Resources,
    id: "alone-backing-track",
    title: "Alone Backing Track",
    description:
      "Track melancólico de armonía rica. Combina pasajes introspectivos con un cierre de alta exigencia técnica.",
    content: AloneBackingTrack,
    date: new Date("2026-02-21"),
    author: PostAuthor.ErpProject,
  },
  {
    category: PostCategory.Guitar,
    id: "pentatonic-fusion-lick-01",
    title: "Pentatonic Fusion Lick 01",
    description:
      "Mezcla de pentatónica menor y escala mayor. Enfocado en desarrollar fraseo y lenguaje.",
    content: PentatonicFusionLick01,
    date: new Date("2026-02-21"),
    author: PostAuthor.ErpProject,
  },
  {
    category: PostCategory.Guitar,
    id: "por-que-no-mejoramos-en-la-guitarra",
    title: "¿Por qué no mejoramos en la guitarra?",
    description:
      "Explicaremos porque a veces sentimos que no avanzamos o nos estancamos en la guitarra.",
    content: PorQueNoMejoramosEnLaGuitarra,
    date: new Date("2026-02-21"),
    author: PostAuthor.ErpProject,
  },
].reverse();
