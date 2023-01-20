import { IBlogPost } from "@/types/type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { Prose } from "./prose";

export const PostItem: FC<{ post: IBlogPost }> = ({ post }) => {
  const { slug, title, date, content, language } = post;

  const isChinese = language === "zh";

  return (
    <Link href={`/posts/${encodeURIComponent(slug)}`}>
      <li
        className={clsx(
          "relative cursor-pointer",
          "rounded-xl bg-gradient-to-r p-0.5",
          "from-sky-300 to-cyan-700 shadow-sm dark:from-yellow-400 dark:to-amber-600 ",
          "transition hover:shadow-md dark:hover:shadow-neutral-700"
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
                    "rounded-md bg-sky-200 py-0.5 px-1.5 text-xs text-black dark:bg-amber-600 dark:text-white"
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
