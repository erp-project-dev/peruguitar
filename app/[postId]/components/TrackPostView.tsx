"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";

type TrackPostViewProps = {
  id: string;
  category: string;
  title: string;
  author: string;
};

export function TrackPostView({
  id,
  category,
  title,
  author,
}: TrackPostViewProps) {
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
