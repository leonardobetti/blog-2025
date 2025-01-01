import type { Post } from "@/types/post";

import fs from "fs";
import path from "path";

import matter from "gray-matter";

async function readFile(filePath: string): Promise<Post | null> {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);
    const slug = path.basename(filePath, path.extname(filePath));

    return {
      ...data,
      slug,
      content,
    } as Post;
  } catch (error) {
    console.error(`Failed to read or parse the file at ${filePath}:`, error);
    return null;
  }
}

async function getFiles(dir: string): Promise<string[]> {
  try {
    const files = fs.readdirSync(dir);
    return files.filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error(`Failed to read directory at ${dir}:`, error);
    return [];
  }
}

export async function getPosts(directory: string): Promise<Post[]> {
  try {
    const postsDirectory = path.join(process.cwd(), "app", "(posts)", directory, "posts");
    const files = getFiles(postsDirectory);
    const posts = await Promise.all(
      (await files).map(async (file) => {
        const filePath = path.join(process.cwd(), "app", "(posts)", directory, "posts", file);
        return readFile(filePath);
      })
    );
    return posts.filter((post): post is Post => post !== null);
  } catch (error) {
    console.error("Error getting posts:", error);
    return [];
  }
}
