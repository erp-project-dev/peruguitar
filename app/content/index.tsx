import { Post, PostAuthor, PostCategory } from "./types";
import { TwoWorldsBackingTrack } from "./posts/01-two-worlds-backing-track";
import { AloneBackingTrack } from "./posts/02-alone-backing-track";

export const POSTS: Post[] = [
  {
    category: PostCategory.Resources,
    id: "two-worlds-backing-track",
    title: "Two Worlds Backing Track",
    description:
      "Backing Track de primer tema instrumental grabado. Esta es la versión definitiva y es ideal para practicar frases técnicos como melódicos.",
    content: TwoWorldsBackingTrack,
    date: new Date("2024-06-01"),
    author: PostAuthor.ErpProject,
  },
  {
    category: PostCategory.Resources,
    id: "alone-backing-track",
    title: "Alone Backing Track",
    description:
      "Backing Track del segundo tema instrumental que grabé. Un track melancólico y armónicamente rico, con pasajes que invitan a la introspección y un cierre de alta exigencia técnica.",
    content: AloneBackingTrack,
    date: new Date("2024-06-01"),
    author: PostAuthor.ErpProject,
  },
].reverse();
