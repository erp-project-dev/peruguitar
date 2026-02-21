import { POST_CATEGORIES } from "@/content/categories";
import { PostCategory } from "@/content/types";
import { CATEGORY_STYLES } from "@/shared/category";

interface CategoryTagProps {
  category: PostCategory;
}

export function CategoryTag({ category }: CategoryTagProps) {
  const { color } = CATEGORY_STYLES[category];
  const { name } = POST_CATEGORIES[category];

  return (
    <span className={`font-bold tracking-[0.15em] uppercase ${color}`}>
      {name}
    </span>
  );
}
