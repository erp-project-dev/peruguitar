import { POST_CATEGORIES } from "@/content/categories";
import { PostCategory } from "@/content/types";
import { CATEGORY_STYLES } from "@/shared/category";

interface ArticleHeaderProps {
  title: string;
  description: string;
  date: Date;
  category: PostCategory;
  author: string;
}

export function PostHeader({
  title,
  description,
  date,
  category,
  author,
}: ArticleHeaderProps) {
  const cat = CATEGORY_STYLES[category];

  const formattedDate = date
    .toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(".", "");

  return (
    <header className="pt-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95]">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 leading-snug max-w-3xl font-medium">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5">
          <span
            className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-[0.2em] border ${cat.color} border-current/30`}
          >
            {cat.name}
          </span>

          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] ml-auto">
            <time className="text-zinc-300">{formattedDate}</time>
            <span className="h-1 w-1 rounded-full bg-zinc-500" />
            <span className="text-zinc-400">
              Por <span className="text-zinc-200">{author}</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
