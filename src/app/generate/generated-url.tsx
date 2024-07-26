"use client";
import DBDataProps from "@/interfaces/db-data-props";
import dateFormatter from "@/utils/date-formatter";
import shortedUrlMaker from "@/utils/shorted-url-maker";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GeneratedUrls(props: {
  generatedUrlData: DBDataProps;
}) {
  const ogURL = props.generatedUrlData.og_url;
  const [shortedUrl, setShortedUrl] = useState<string>("");
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    setShortedUrl(
      shortedUrlMaker({
        shortedUrlID: props.generatedUrlData.shorted_url as string,
      }).replace("generate", "") as string
    );
    setFormattedDate(
      dateFormatter({
        dateValue: props.generatedUrlData.date_created as string,
      })
    );
  }, [props.generatedUrlData.shorted_url, props.generatedUrlData.date_created]);

  return (
    <tbody>
      <tr className="[&_#first-element]:hover:bg-transparent [&_#last-elements]:hover:bg-gray-200 [&_#last-elements]:transition-color [&_#last-elements]:duration-100">
        <th className="border" id="first-element">
          {formattedDate}
        </th>
        <th className="border" id="last-elements">
          {ogURL}
        </th>
        <th className="border" id="last-elements">
          <Link href={shortedUrl}>
            <p className="underline">{shortedUrl}</p>
          </Link>
        </th>
      </tr>
    </tbody>
  );
}
