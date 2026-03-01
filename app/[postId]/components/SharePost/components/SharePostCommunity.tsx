import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { whatsAppBlogUrl } from "@/settings.json";

export function SharePostCommunity() {
  return (
    <div className="flex items-center">
      <a
        href={whatsAppBlogUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:border-[#25D366] hover:bg-zinc-800/50 transition-all duration-300 group"
      >
        <div className="flex flex-col items-end">
          <span className="text-[10px] uppercase tracking-wider font-medium opacity-60">
            Entérate De
          </span>
          <span className="text-sm font-bold">Las Novedades</span>
        </div>
        <SiWhatsapp className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
