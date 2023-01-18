import { IBlogPost } from "@/types/type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { Prose } from "./prose";

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
          "relative cursor-pointer",
          "rounded-xl bg-gradient-to-r p-0.5 shadow-sm transition hover:shadow-md dark:from-yellow-600 dark:to-red-600",
          "from-sky-300 to-cyan-700"
        )}
      >
        <Prose>
          <div className="rounded-[10px] bg-gray-50 p-4 !pt-5 dark:bg-gray-900 sm:p-6">
            <h3>{title}</h3>
            <div className={clsx("flex flex-row items-center gap-4")}>
              <time className="text-sm">{date}</time>
              {isChinese && (
                <span
                  className={clsx(
                    "rounded-md bg-sky-200 py-0.5 px-1.5 text-sm text-black dark:bg-high-light dark:text-white"
                  )}
                >
                  中文
                </span>
              )}
            </div>
          </div>
        </Prose>
      </li>
    </Link>
  );
};
