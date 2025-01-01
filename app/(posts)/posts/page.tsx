import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { OpenGraph } from "@/lib/og";

import React from "react";

export function generateMetadata() {
  const title = "posts";
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

  return {
    ...OpenGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

export default async function Page() {
  // Initial data will be fetched by the client component
  return (
    <React.Fragment>
      <FadeIn.Item>
        <Posts category="posts" />
      </FadeIn.Item>
    </React.Fragment>
  );
}
