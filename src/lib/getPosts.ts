import { IBlogPost } from "@/types/type";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "/src/posts");

function getPostsPaths(): string[] {
  // get file names under posts
  return fs.readdirSync(postsDirectory);
}

type postSlugType = {
  params: { slug: string };
};

export function getPostsSlugs() {
  const allPostsSlugs = getPostsPaths().map((post: string) => {
    // Remove ".md" from file name to get id
    return post.replace(/\.md$/, "");
  });

  return allPostsSlugs.map((slug: string) => {
    return {
      params: { slug },
    };
  });
}

export async function getPostByFileName(fileName: string): Promise<IBlogPost> {
  // Remove ".md" from file name to get slug
  const slug = fileName.replace(/\.md$/, "");
  // Read markdown file as string
  const fullPath = path.join(postsDirectory, `${fileName}`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContent);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    ...matterResult.data,
    content: matterResult.content,
    contentHtml,
  } as IBlogPost;
}

type PostInfoType = Omit<IBlogPost, "content" | "contentHTML">;

export function getPostInfoByFileName(fileName: string): PostInfoType {
  // Read markdown file as string
  const fullPath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContent);
  return {
    slug: fileName.replace(/\.md$/, ""),
    ...matterResult.data,
  } as PostInfoType;
}

export function getSortedPosts(): PostInfoType[] {
  const postPaths = getPostsPaths();

  const posts = postPaths
    .map((path: string) => {
      return getPostInfoByFileName(path);
    })
    .sort((postA, postB) => {
      return new Date(postA.date) < new Date(postB.date) ? 1 : -1;
    });

  return posts;
}
