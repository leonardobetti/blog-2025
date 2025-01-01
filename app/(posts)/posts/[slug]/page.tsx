import type { Post } from "@/types";

import { Layout } from "@/components/screens/posts";
import { getPosts } from "@/lib/mdx";
import { OpenGraph } from "@/lib/og";

import { Metadata } from "next";
import { notFound } from "next/navigation";

const route = "posts";

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const Posts = await getPosts(route);
  return Posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const Posts = await getPosts(route);
  const post = Posts.find((post) => post.slug === params.slug);
  
  const title = post ? post.title : "";
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

export default async function Page({ params, searchParams }: Props) {
  const Posts = await getPosts(route);
  const post = Posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <Layout post={post} route={route} />;
}
