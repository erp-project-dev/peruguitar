/* eslint-disable react-hooks/purity */
import { useMemo } from "react";
import { POSTS } from "../../content";
import { CATEGORY_STYLES } from "@/shared/category";
import { RightBarItem } from "./components/RightBarItem";
import { RightBarFooter } from "./components/RightBarFooter";
import { RightBarHeader } from "./components/RightBarHeader";

export function RightBar() {
  const data = useMemo(() => {
    const reflections = POSTS.filter((p) => p.category === "reflections")
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const resources = POSTS.filter((p) => p.category === "resources")
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const usedIds = new Set([...reflections, ...resources].map((p) => p.id));

    const others = POSTS.filter((p) => !usedIds.has(p.id))
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    return { reflections, resources, others };
  }, []);

  if (!data) return null;

  return (
    <aside className="w-full h-full flex flex-col overflow-y-auto [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col min-h-full px-8 pb-8">
        <div className="flex-1 space-y-12">
          <section>
            <RightBarHeader
              title={CATEGORY_STYLES.reflections.name}
              color={CATEGORY_STYLES.reflections.color}
              bgColor={CATEGORY_STYLES.reflections.bgColor}
            />
            <div className="space-y-1">
              {data.reflections.map((post) => (
                <RightBarItem
                  key={post.id}
                  title={post.title}
                  href={`/${post.id}`}
                  color={CATEGORY_STYLES.reflections.bgColor}
                />
              ))}
            </div>
          </section>

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
                  color={CATEGORY_STYLES.resources.bgColor}
                />
              ))}
            </div>
          </section>

          <section>
            <RightBarHeader
              title="Más Publicaciones"
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
                  color={
                    CATEGORY_STYLES[post.category]?.bgColor ||
                    CATEGORY_STYLES.guitar.bgColor
                  }
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
