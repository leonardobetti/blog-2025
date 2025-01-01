import { Routes } from "@/types/routes";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { NextResponse } from "next/server";
import type { Post } from "@/types";

function readPostFile(filePath: string): Post | null {
  try {
    const rawContent = readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);
    const slug = filePath.split("/").pop()?.replace(".mdx", "") || "";

    return {
      ...data,
      slug,
      content,
    } as Post;
  } catch (error) {
    console.error(`Failed to read post at ${filePath}:`, error);
    return null;
  }
}

function getPostFiles(category: string): string[] {
  try {
    const postsDir = join(process.cwd(), Routes.Posts, category, "posts");
    return readdirSync(postsDir).filter(file => file.endsWith(".mdx"));
  } catch (error) {
    console.error(`Failed to read posts directory:`, error);
    return [];
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    if (!category) {
      return NextResponse.json({ error: "Category is required" }, { status: 400 });
    }

    const files = getPostFiles(category);
    const posts = files
      .map(file => {
        const filePath = join(process.cwd(), Routes.Posts, category, "posts", file);
        return readPostFile(filePath);
      })
      .filter((post): post is Post => post !== null)
      .sort((a, b) => new Date(b.time.created).getTime() - new Date(a.time.created).getTime());

    return NextResponse.json(posts);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}