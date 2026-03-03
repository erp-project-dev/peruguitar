import { MetadataRoute } from "next";
import { POSTS } from "./content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://peruguitar.com";

  const postEntries: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${baseUrl}/${post.id}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}
