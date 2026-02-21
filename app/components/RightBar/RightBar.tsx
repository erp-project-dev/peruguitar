"use client";

import { POSTS } from "../../content";
import { ItemLink } from "./components/ItemLink";
import { ItemFooter } from "./components/ItemFooter";

import { CATEGORY_STYLES } from "@/shared/category";

const SectionHeader = ({
  title,
  color,
  bgColor,
}: {
  title: string;
  color: string;
  bgColor: string;
}) => (
  <div className="flex items-center gap-2 mb-5">
    <div className={`w-1 h-4 rounded-full ${bgColor}`} />
    <h3
      className={`text-[10px] font-bold ${color} uppercase tracking-[0.2em] leading-none`}
    >
      {title}
    </h3>
  </div>
);

export function RightBar() {
  const getRandom = (arr: typeof POSTS, count: number, category?: string) => {
    const filtered = category
      ? arr.filter((a) => a.category === category)
      : arr;
    return [...filtered].sort(() => 0.5 - Math.random()).slice(0, count);
  };

  const otherPosts = getRandom(POSTS, 5);
  const resourcePosts = getRandom(POSTS, 5, "resources");
  const productionPosts = getRandom(POSTS, 5, "music-production");

  return (
    <aside className="w-full h-full flex flex-col overflow-y-auto [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col min-h-full px-8 pb-8">
        <div className="flex-1 space-y-12">
          <section>
            <SectionHeader
              title="Publicaciones"
              color={CATEGORY_STYLES.guitar.color}
              bgColor={CATEGORY_STYLES.guitar.bgColor}
            />
            <div className="space-y-1">
              {otherPosts.map((post, i) => (
                <ItemLink
                  key={i}
                  title={post.title}
                  href={`/${post.id}`}
                  category={post.category}
                  color={CATEGORY_STYLES[post.category].bgColor}
                />
              ))}
            </div>
          </section>

          {/* <section>
            <SectionHeader
              title={CATEGORY_STYLES["music-production"].name}
              color={CATEGORY_STYLES["music-production"].color}
              bgColor={CATEGORY_STYLES["music-production"].bgColor}
            />
            <div className="space-y-1">
              {productionPosts.map((post, i) => (
                <ItemLink
                  key={i}
                  title={post.title}
                  href={`/${post.id}`}
                  color="bg-purple-500"
                />
              ))}
            </div>
          </section> */}

          {/* <section>
            <SectionHeader
              title={CATEGORY_STYLES.resources.name}
              color={CATEGORY_STYLES.resources.color}
              bgColor={CATEGORY_STYLES.resources.bgColor}
            />
            <div className="space-y-1">
              {resourcePosts.map((post, i) => (
                <ItemLink
                  key={i}
                  title={post.title}
                  href={`/${post.id}`}
                  color={CATEGORY_STYLES.resources.bgColor}
                />
              ))}
            </div>
          </section> */}
        </div>

        <div className="pt-12">
          <ItemFooter />
        </div>
      </div>
    </aside>
  );
}
