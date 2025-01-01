import type { Post } from "@/types";

import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";
import { MDX } from "@/mdx-components";

import React, { Suspense } from "react";
import { readingTime } from "reading-time-estimator";

interface Props {
  post: Post;
  route: string;
}

const PostNavigationWrapper = async ({ route }: { route: string }) => {
  const posts = await getPosts(route);
  return <PostNavigation posts={posts} />;
};

export const Layout = ({ post, route }: Props) => {
  const Separator = () => {
    return <div>⋅</div>;
  };

  const PublishedTime = () => {
    return <div>Published {formatter.date(new Date(post.time.created))}</div>;
  };
  
  const UpdateTime = () => {
    return <div>Updated {formatter.date(new Date(post.time.updated))}</div>;
  };

  const ReadingTime = () => {
    return <div>{readingTime(post.content).minutes} minutes read</div>;
  };

  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div>
          <h1>{post.title}</h1>
        </div>
        <div className="mt-1 flex gap-2 text-muted text-small">
          <PublishedTime />
          <Separator />
          <UpdateTime />
          <Separator />
          <ReadingTime />
        </div>
      </div>

      <MDX source={post.content} />
      <Suspense fallback={<div>Loading navigation...</div>}>
        <PostNavigationWrapper route={route} />
      </Suspense>
      <TableOfContents />
    </React.Fragment>
  );
};
