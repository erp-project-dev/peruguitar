/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ImageVisualizerProps {
  src: string;
  alt: string;
  caption?: string;
}

export const ImageVisualizer: React.FC<ImageVisualizerProps> = ({
  src,
  alt,
  caption,
}) => {
  return (
    <figure className="w-full my-10 flex justify-center">
      <div className="max-w-fit bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-md">
        <img
          src={src}
          alt={alt}
          className="max-w-full h-auto block rounded-t-xl  dark:border-zinc-800 mt-0 mb-0 m-auto"
        />

        {caption && (
          <figcaption className="border-t border-zinc-800 px-4 py-3 dark:bg-zinc-900 text-xs text-zinc-500 dark:text-zinc-400 text-center mt-0">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
};
