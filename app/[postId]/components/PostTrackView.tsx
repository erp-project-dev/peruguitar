"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";

type PostTrackViewProps = {
  id: string;
  category: string;
  title: string;
  author: string;
};

export function PostTrackView({
  id,
  category,
  title,
  author,
}: PostTrackViewProps) {
  useEffect(() => {
    ReactGA.event("post_view", {
      post_id: id,
      post_title: title,
      post_category: category,
      post_author: author,
    });
  }, [id, title, category, author]);

  return null;
}
