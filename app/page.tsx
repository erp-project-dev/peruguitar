import { Posts } from "./components/Posts/Posts";
import { POSTS } from "./content";

export default function Home() {
  const posts = [...POSTS].slice(0, 20);

  return (
    <section className="flex flex-col">
      <header className="border-b border-white/5 mb-8">
        <h2 className="text-5xl font-extrabold text-white tracking-tighter leading-none">
          Últimas{" "}
          <span className="text-zinc-400 font-medium">Publicaciones</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 auto-rows-fr">
        <Posts posts={posts} />
      </div>
    </section>
  );
}
