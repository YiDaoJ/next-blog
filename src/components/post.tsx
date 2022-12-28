import { IBlogPost } from "@/types/type";
import Link from "next/link";
import { FC } from "react";

export const Post: FC<{ post: IBlogPost }> = ({ post }) => {
  const { slug, title, date, content } = post;

  return (
    <Link href={`/blog/${encodeURIComponent(slug)}`}>
      <PostOverview title={title} date={date} content={content} slug={slug} />
    </Link>
  );
};

const PostOverview: FC<Omit<IBlogPost, "contentHtml">> = ({
  title,
  slug,
  content,
  // description,
  date,
  // tags,
}) => {
  return (
    <div className="post-item-container flex flex-col gap-3">
      <h3>{title}</h3>
      {/* <p>{description}</p> */}
      <div>
        <time>{date}</time>
        {/* <div>{tags.join(", ")}</div> */}
      </div>
    </div>
  );
};
