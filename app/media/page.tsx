/* eslint-disable @next/next/no-img-element */
import { SiSpotify } from "@icons-pack/react-simple-icons";
import { youtube, spotify } from "./data.json";

export const metadata = {
  title: "Collabs, entrevistas y mucho más",
  description: "Videos de la comunidad, entrevistas y mucho más.",
};

export default async function Media() {
  return (
    <section className="flex flex-col">
      <header className="border-b border-white/5 mb-12 pb-4">
        <h1 className="text-5xl font-extrabold text-white tracking-tighter leading-none">
          Media
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl font-medium mt-4">
          Videos de la comunidad, entrevistas y mucho más.
        </p>
      </header>

      <div className="flex flex-col gap-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtube.map((item) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all group cursor-pointer block"
              >
                <article>
                  <div className="aspect-video bg-zinc-800 overflow-hidden relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                        <svg
                          className="w-6 h-6 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-zinc-200 leading-tight mb-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            Podcasts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spotify.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 flex gap-5 hover:border-zinc-600 transition-colors group cursor-pointer items-center"
              >
                <article className="flex w-full gap-5 items-center">
                  <div className="w-24 h-24 bg-linear-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 rounded-xl shrink-0 flex items-center justify-center text-zinc-500 group-hover:bg-[#1DB954]/5 group-hover:text-[#1DB954] transition-all duration-300 shadow-sm">
                    <SiSpotify
                      size={40}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-zinc-500 mb-1 uppercase tracking-wider">
                      Episodio {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-200 leading-tight mb-1 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
