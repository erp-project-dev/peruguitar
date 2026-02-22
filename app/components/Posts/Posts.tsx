import { Post } from "@/content/types";
import Link from "next/link";
import { CategoryTag } from "./components/CategoryTag";

export function Posts({ posts }: { posts: Post[] }) {
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-col w-full">
      {posts.map((post, index) => (
        <div key={post.id} className="w-full">
          <Link
            href={`/${post.id}`}
            className={`group relative flex flex-col py-10 px-4 -mx-4 transition-all duration-400 rounded-3xl hover:bg-zinc-800/20 ${
              index === 0 ? "pt-2" : ""
            }`}
          >
            <div>
              <div className="flex items-center gap-3 text-[10px] tracking-widest font-bold mb-4">
                <CategoryTag category={post.category} />
                <span className="text-zinc-400">•</span>
                <time className="text-zinc-400 uppercase">
                  {formatDate(post.date?.toString())}
                </time>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-blue-400 transition-colors leading-tight mb-2">
                {post.title}
              </h3>

              <p className="md:text-base leading-relaxed line-clamp-2 font-light text-zinc-400 italic">
                {post.description}
              </p>
            </div>
          </Link>

          {index !== posts.length - 1 && (
            <div className="h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent my-2" />
          )}
        </div>
      ))}
    </div>
  );
}
