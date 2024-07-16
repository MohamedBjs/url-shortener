"use client";

import { urlShortener } from "@/utils/url-shortener";
import { useEffect, useState } from "react";
import { ShortedUrl } from "./shorted-url";
import urlShortenedIDStore from "@/store/url-shortened-id-store";
import urlShortedQuantity from "@/utils/url-shorted-quantity";

export const Hero = () => {
  const [urlInputValue, setUrlInputValue] = useState("");
  const { urlID, setUrlID } = urlShortenedIDStore();
  const [urlShortedQuantityValue, seturlShortedQuantityValue] =
    useState<number>();

  useEffect(() => {
    const getUrlShortedQuantity = async () => {
      seturlShortedQuantityValue(await urlShortedQuantity());
    };
    getUrlShortedQuantity();
  }, []);

  return (
    <div className="h-lvh flex items-center justify-center">
      <div className="flex flex-col gap-3 text-center">
        <h1>Turbocharge your marketing with Short Links.</h1>
        <p>Shortener url, Big Impact</p>
        <input
          onChange={(event) => setUrlInputValue(event.currentTarget.value)}
          onKeyDown={async (event) =>
            event.key == "Enter" && urlInputValue.startsWith("http")
              ? setUrlID(
                  (await urlShortener(event.currentTarget.value)) as string
                )
              : ""
          }
          type="text"
          name=""
          id=""
        />
        {urlInputValue != "" && urlInputValue.startsWith("http") ? (
          <button
            className="bg-black text-white rounded-lg"
            onClick={async () =>
              setUrlID((await urlShortener(urlInputValue)) as string)
            }
          >
            Shorten
          </button>
        ) : null}
        {urlID != "" ? <ShortedUrl /> : null}
        <p>{`${urlShortedQuantityValue} links created`}</p>
      </div>
    </div>
  );
};
