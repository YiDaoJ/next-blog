import { IBlogPost } from "@/types/type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

export const PostItem: FC<{ post: IBlogPost }> = ({ post }) => {
  const { slug, title, date, content, language } = post;

  const isChinese = language === "zh";

  return (
    <Link href={`/posts/${encodeURIComponent(slug)}`}>
      <li
        className={clsx(
          "cursor-pointer relative",
          "prose prose-stone dark:prose-invert",
          "rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 hover:shadow-xl transition shadow-sm"
        )}
      >
        <div className="rounded-[10px] dark:bg-main-dark bg-main-light p-4 !pt-5 sm:p-6">
          <h2>{title}</h2>
          <div className={clsx("flex flex-row gap-4 items-center")}>
            <time>{date}</time>
            {isChinese && (
              <span
                className={clsx(
                  "py-0.5 px-1.5 bg-high-light dark:bg-tag text-sm rounded-md text-black dark:text-white"
                )}
              >
                中文
              </span>
            )}
          </div>
        </div>
      </li>
    </Link>
  );
};
