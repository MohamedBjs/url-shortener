"use client";

import { useShortenLink } from "@/hooks/use-shorten-link";

export const Hero = () => {
  const { setUrlToShorten } = useShortenLink({ value: "" });

  return (
    <div className="h-lvh flex items-center justify-center">
      <div className="flex flex-col gap-3 text-center">
        <h1>Turbocharge your marketing with Short Links.</h1>
        <p>Shortener url, Big Impact</p>
        <input
          onKeyDown={(event) =>
            event.key == "Enter" ? setUrlToShorten({ value: "test" }) : ""
          }
          type="text"
          name=""
          id=""
        />
        <p>0 links created</p>
      </div>
    </div>
  );
};
