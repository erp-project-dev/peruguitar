import { notFound } from "next/navigation";
import { POSTS } from "@/content";
import { PostHeader } from "./components/PostHeader";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ postId: string }>;
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { postId } = await params;
  const post = POSTS.find((p) => p.id === postId);

  if (!post) return { title: "Post no encontrado" };

  return {
    title: `${post.title} | Mi Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date?.toString(),
      authors: post.author,
    },
  };
}

export default async function Post({ params }: PageProps) {
  const { postId } = await params;
  const post = POSTS.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pb-20">
      <PostHeader
        title={post.title}
        description={post.description}
        date={post.date}
        category={post.category}
        author={post.author}
      />

      <div className="prose prose-invert max-w-none">
        <post.content />
      </div>
    </article>
  );
}
