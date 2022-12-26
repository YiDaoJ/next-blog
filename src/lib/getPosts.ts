import { IBlogPost } from "@/types/type";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "/src/posts");

function getPostsPaths(): string[] {
  // get file names under posts
  return fs.readdirSync(postsDirectory);
}

type postSlugType = {
  params: { slug: string };
};

function getPostsSlugs(): postSlugType[] {
  const allPostsSlugs = getPostsPaths().map((post: string) => {
    // Remove ".md" from file name to get id
    return post.replace(/\.mdx$/, "");
  });

  return allPostsSlugs.map((slug: string) => {
    return {
      params: { slug },
    };
  });
}

function getPostBySlug(fileName: string, dataField?: string[]): IBlogPost {
  // Remove ".md" from file name to get slug
  const slug = fileName.replace(/\.md$/, "");
  // Read markdown file as string
  const fullPath = path.join(postsDirectory, `${fileName}`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContent);

  // console.log({ matterResult });

  return {
    slug,
    ...matterResult.data,
    content: matterResult.content,
  } as IBlogPost;
}

export function getSortedPosts(): IBlogPost[] {
  const postSlugs = getPostsPaths();

  const posts = postSlugs
    .map((slug: string) => {
      return getPostBySlug(slug);
    })
    .sort((postA, postB) => {
      return new Date(postA.date) < new Date(postB.date) ? 1 : -1;
    });

  return posts;
}
