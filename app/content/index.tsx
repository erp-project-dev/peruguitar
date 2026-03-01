import { Post } from "./types";

import { pentatonicFusionLick01 } from "./posts/01-pentatonic-fusion-lick";
import { porQueNoMejoramos } from "./posts/02-por-que-no-mejoramos-en-la-guitarra";
import { aloneBackingTrack } from "./posts/03-alone-backing-track";
import { twoWorldsBackingTrack } from "./posts/04-two-worlds-backing-track";
import { tiposDeGuitarrista } from "./posts/05-tipos-de-guitarrista";
import { conQuienEstudiarGuitarraEnPeru } from "./posts/06-con-quien-estudiar-guitarra-en-peru";
import { recomendacionParaGrabarGuitarras } from "./posts/07-recomendación-para-grabar-guitarras";
import { hazEstoCuandoNoSepasQuePracticar } from "./posts/08-haz-esto-cuando-no-sepas-que-practicar";
import { porqQueComponemosMalosSolos } from "./posts/09-por-que-componemos-malos-solos";
import { elProblemaDelGuitarristaModerno } from "./posts/10-el-guitarrista-moderno";

export const POSTS: Post[] = [
  twoWorldsBackingTrack,
  aloneBackingTrack,
  pentatonicFusionLick01,
  porQueNoMejoramos,
  tiposDeGuitarrista,
  conQuienEstudiarGuitarraEnPeru,
  recomendacionParaGrabarGuitarras,
  hazEstoCuandoNoSepasQuePracticar,
  porqQueComponemosMalosSolos,
  elProblemaDelGuitarristaModerno,
].sort((a, b) => b.date.getTime() - a.date.getTime());
