import { Post } from "./types";

import { pentatonicFusionLick01 } from "./posts/01-pentatonic-fusion-lick";
import { porQueNoMejoramos } from "./posts/02-por-que-no-mejoramos-en-la-guitarra";
import { aloneBackingTrack } from "./posts/03-alone-backing-track";
import { twoWorldsBackingTrack } from "./posts/04-two-worlds-backing-track";
import { tiposDeGuitarrista } from "./posts/05-tipos-de-guitarrista";

export const POSTS: Post[] = [
  twoWorldsBackingTrack,
  aloneBackingTrack,
  pentatonicFusionLick01,
  porQueNoMejoramos,
  tiposDeGuitarrista,
].sort((a, b) => b.date.getTime() - a.date.getTime());
