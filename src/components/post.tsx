import { IBlogPost } from "@/types/type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

export const PostItem: FC<{ post: IBlogPost }> = ({ post }) => {
  const { slug, title, date, content, language } = post;

  const isChinese = language === "zh";
  // TODO:
  const addPrefix = (prefix: string, arr: string[]): string => {
    const newArr = arr.map((elm) => `${prefix}:${elm}`);
    return newArr.join(" ");
  };

  return (
    <Link href={`/posts/${encodeURIComponent(slug)}`}>
      <li
        className={clsx(
          "cursor-pointer relative",
          "prose prose-stone dark:prose-invert",
          "md:prose-md lg:prose-lg tracking-wide w-full font-light",
          "rounded-xl bg-gradient-to-r dark:from-yellow-600 dark:to-red-600 p-0.5 hover:shadow-md transition shadow-sm",
          "from-sky-300 to-cyan-700"
        )}
      >
        <div className="rounded-[10px] dark:bg-main-dark bg-main-light p-4 !pt-5 sm:p-6">
          <h2>{title}</h2>
          <div className={clsx("flex flex-row gap-4 items-center")}>
            <time>{date}</time>
            {isChinese && (
              <span
                className={clsx(
                  "py-0.5 px-1.5 bg-sky-200 dark:bg-high-light dark:text-white   text-sm rounded-md text-black dark:text-white"
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
