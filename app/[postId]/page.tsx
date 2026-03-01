import { notFound } from "next/navigation";
import { POSTS } from "@/content";
import { PostHeader } from "./components/PostHeader";
import { Metadata } from "next";
import { PostTrackView } from "./components/PostTrackView";
import Donations from "@/components/Donations";
import { SharePost } from "./components/SharePost/SharePost";
import WhatsAppModal from "./components/WhatsAppModal";

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
    title: post.title,
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
      <WhatsAppModal />

      <PostHeader
        title={post.title}
        description={post.description}
        date={post.date}
        category={post.category}
        author={post.author}
      />

      <SharePost title={post.title} url={`https://peruguitar.com/${post.id}`} />

      <div className="prose prose-invert max-w-none">
        <post.content />
      </div>

      <PostTrackView
        id={post.id}
        title={post.title}
        author={post.author}
        category={post.category}
      />

      <SharePost title={post.title} url={`https://peruguitar.com/${post.id}`} />

      <Donations />
    </article>
  );
}
