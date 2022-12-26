import { IBlogPost } from "@/types/type";
import { FC } from "react";
import { Post } from "./post";

export const Posts: FC<{ blogPosts: IBlogPost[] }> = ({ blogPosts }) => {
  return (
    <ul>
      {blogPosts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </ul>
  );
};
