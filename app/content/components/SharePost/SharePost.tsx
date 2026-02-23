import { SiWhatsapp, SiFacebook, SiX } from "@icons-pack/react-simple-icons";
import { SharePostCommunity } from "./components/SharePostCommunity";

interface SharePostProps {
  url: string;
  title: string;
}

export function SharePost({ url, title }: SharePostProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const iconStyle = "w-5 h-5 transition-colors duration-200";

  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-6 py-4 border-y border-zinc-800 my-8">
      <div className="flex flex-col gap-3 items-center md:items-start">
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
          Comparte este post
        </span>
        <div className="flex gap-6">
          <a
            href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-[#25D366]"
            aria-label="WhatsApp"
          >
            <SiWhatsapp className={iconStyle} />
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-[#1877F2]"
            aria-label="Facebook"
          >
            <SiFacebook className={iconStyle} />
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white"
            aria-label="X"
          >
            <SiX className={iconStyle} />
          </a>
        </div>
      </div>

      <SharePostCommunity />
    </section>
  );
}
