import { notFound } from "next/navigation";
import { Metadata } from "next"; // Importar tipo

import { Posts } from "@/components/Posts/Posts";
import { POSTS } from "@/content";
import { PostCategory } from "@/content/types";
import { POST_CATEGORIES } from "@/content/categories";

interface Props {
  params: Promise<{ id: PostCategory }>;
}

export async function generateStaticParams() {
  return Object.keys(POST_CATEGORIES).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const category = POST_CATEGORIES[id];

  if (!category) return { title: "Categoría no encontrada" };

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const filteredPosts = POSTS.filter((post) => post.category === id);

  if (filteredPosts.length === 0) {
    notFound();
  }

  const category = POST_CATEGORIES[id];

  return (
    <section className="flex flex-col">
      <header className="border-b border-white/5 mb-8 pb-4">
        <h2 className="text-5xl font-extrabold text-white tracking-tighter leading-none">
          {category.name}
        </h2>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl font-medium">
          {category.description}
        </p>
      </header>

      <div className="grid grid-cols-1 auto-rows-fr">
        <Posts posts={filteredPosts} />
      </div>
    </section>
  );
}
