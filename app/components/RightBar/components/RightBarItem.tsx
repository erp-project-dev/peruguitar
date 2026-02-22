import Link from "next/link";

import { POST_CATEGORIES } from "@/content/categories";
import { PostCategory } from "@/content/types";

interface RightBarItemProps {
  title: string;
  href?: string;
  category?: PostCategory;
  color?: string;
}

export function RightBarItem({
  title,
  href = "#",
  category,
  color = "bg-zinc-500",
}: RightBarItemProps) {
  return (
    <Link href={href} className="flex items-start gap-3 group py-1 w-full">
      <div
        className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-all duration-200 
          ${color} opacity-70 group-hover:opacity-100 group-hover:scale-125 shadow-[0_0_8px_rgba(255,255,255,0.1)]`}
      />

      <div className="flex flex-col min-w-0">
        <p className="text-sm text-zinc-300 group-hover:text-white transition-colors line-clamp-2 leading-snug font-semibold">
          {title}
        </p>

        {category && (
          <span className="text-[10px] italic text-white font-bold mt-1 uppercase tracking-wider opacity-90">
            {POST_CATEGORIES[category].name}
          </span>
        )}
      </div>
    </Link>
  );
}
