import { useMemo } from "react";
import { POSTS } from "../../content";

import { CATEGORY_STYLES } from "@/shared/category";

import { RightBarItem } from "./components/RightBarItem";
import { RightBarFooter } from "./components/RightBarFooter";
import { RightBarHeader } from "./components/RightBarHeader";

const getRandom = (arr: typeof POSTS, count: number, cat?: string) => {
  const f = cat ? arr.filter((a) => a.category === cat) : arr;
  return [...f].sort(() => 0.5 - Math.random()).slice(0, count);
};

export function RightBar() {
  const data = useMemo(() => {
    return {
      others: getRandom(POSTS, 5),
      resources: getRandom(POSTS, 5, "resources"),
      production: getRandom(POSTS, 5, "music-production"),
    };
  }, []);

  if (!data) {
    return null;
  }

  return (
    <aside className="w-full h-full flex flex-col overflow-y-auto [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col min-h-full px-8 pb-8">
        <div className="flex-1 space-y-12">
          <section>
            <RightBarHeader
              title="Publicaciones"
              color={CATEGORY_STYLES.guitar.color}
              bgColor={CATEGORY_STYLES.guitar.bgColor}
            />
            <div className="space-y-1">
              {data.others.map((post) => (
                <RightBarItem
                  key={post.id}
                  title={post.title}
                  href={`/${post.id}`}
                  category={post.category}
                  color={CATEGORY_STYLES[post.category].bgColor}
                />
              ))}
            </div>
          </section>

          {/* <section>
            <RightBarHeader
              title={CATEGORY_STYLES["music-production"].name}
              color={CATEGORY_STYLES["music-production"].color}
              bgColor={CATEGORY_STYLES["music-production"].bgColor}
            />
            <div className="space-y-1">
              {data.production.map((post) => (
                <RightBarItem
                  key={post.id}
                  title={post.title}
                  href={`/${post.id}`}
                  category={post.category}
                  color={CATEGORY_STYLES["music-production"].bgColor}
                />
              ))}
            </div>
          </section> */}

          <section>
            <RightBarHeader
              title={CATEGORY_STYLES.resources.name}
              color={CATEGORY_STYLES.resources.color}
              bgColor={CATEGORY_STYLES.resources.bgColor}
            />
            <div className="space-y-1">
              {data.resources.map((post) => (
                <RightBarItem
                  key={post.id}
                  title={post.title}
                  href={`/${post.id}`}
                  category={post.category}
                  color={CATEGORY_STYLES.resources.bgColor}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="pt-12">
          <RightBarFooter />
        </div>
      </div>
    </aside>
  );
}
