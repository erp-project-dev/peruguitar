import { POST_CATEGORIES } from "@/content/categories";
import { PostCategory } from "@/content/types";

const CATEGORY_EXTENDED: Record<
  PostCategory,
  { color: string; bgColor: string }
> = {
  guitar: { color: "text-blue-400", bgColor: "bg-blue-500" },
  theory: { color: "text-amber-400", bgColor: "bg-amber-500" },
  reflections: { color: "text-rose-400", bgColor: "bg-rose-500" },
  production: { color: "text-purple-400", bgColor: "bg-purple-500" },
  resources: { color: "text-emerald-400", bgColor: "bg-emerald-500" },
};

export const CATEGORY_STYLES = (
  Object.keys(POST_CATEGORIES) as PostCategory[]
).reduce(
  (acc, key) => {
    acc[key] = {
      ...POST_CATEGORIES[key],
      ...CATEGORY_EXTENDED[key],
    };
    return acc;
  },
  {} as Record<
    PostCategory,
    (typeof POST_CATEGORIES)[PostCategory] &
      (typeof CATEGORY_EXTENDED)[PostCategory]
  >,
);
