import { IBlogPost } from "@/types/type";
import Link from "next/link";
import { FC, forwardRef } from "react";

export const PostItem: FC<{ post: IBlogPost }> = ({ post }) => {
  const { slug, title, date, content, language } = post;

  return (
    <PostOverview
      title={title}
      date={date}
      content={content}
      slug={slug}
      language={language}
    />
  );
};

const PostOverview: FC<Omit<IBlogPost, "contentHtml">> = forwardRef(
  ({ title, slug, content, date, language }, ref) => {
    return (
      <Link href={`/posts/${encodeURIComponent(slug)}`}>
        <li className="post-item-container flex flex-col gap-2 cursor-pointer">
          <h3>{title}</h3>
          <div>
            <time>{date}</time>
            <span>{language}</span>
          </div>
        </li>
      </Link>
    );
  }
);

PostOverview.displayName = "PostOverview";
