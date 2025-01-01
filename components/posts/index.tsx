'use client';

import { formatter } from "@/lib/formatter";
import type { Post } from "@/types";

import { Link as NextViewTransition } from "next-view-transitions";
import React, { useEffect, useState } from "react";

interface PostProps {
  category: string;
  initialPosts?: Post[];
}

export const Posts = ({ category, initialPosts }: PostProps) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts || []);
  const [isLoading, setIsLoading] = useState(!initialPosts);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      if (!initialPosts) {
        try {
          setIsLoading(true);
          setError(null);
          const response = await fetch(`/api/posts?category=${encodeURIComponent(category)}`);
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch posts');
          }
          const fetchedPosts = await response.json();
          setPosts(fetchedPosts);
        } catch (error) {
          console.error('Error loading posts:', error);
          setError(error instanceof Error ? error.message : 'Failed to load posts');
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadPosts();
  }, [category, initialPosts]);

  const Separator = () => <div className="border-border border-t" />;

  if (isLoading) {
    return <div className="mt-6">Loading posts...</div>;
  }

  if (error) {
    return <div className="mt-6 text-red-500">Error: {error}</div>;
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-col">
      <NextViewTransition href={`/${category}`} className="flex justify-between">
        <h2 className="py-2 text-muted capitalize">
          {category} {posts.length > 0 && `(${posts.length})`}
        </h2>
      </NextViewTransition>

      {posts.map((post) => (
        <React.Fragment key={post.slug}>
          <Separator />
          <NextViewTransition href={`/${category}/${post.slug}`} className="flex w-full justify-between py-2">
            <p>{post.title}</p>
            <p className="mt-0 text-muted">{formatter.date(new Date(post.time.created))}</p>
          </NextViewTransition>
        </React.Fragment>
      ))}
    </div>
  );
};
