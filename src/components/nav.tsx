import clsx from "clsx";
import Link from "next/link";
import { FC, ReactNode } from "react";

const Routes: { path: string; title: string }[] = [
  { path: "/", title: "Home" },
  { path: "/posts", title: "Blog" },
  // { path: "/en-posts", title: "English posts" },
  // { path: "/zh-posts", title: "中文文章" },
];

export const Navigation: FC = () => {
  return (
    <div
      className={clsx([
        "navigation",
        "flex justify-end items-center gap-8",
        "py-8 px-0 w-full text-lg",
      ])}
    >
      {Routes.map((route) => (
        <NavItem key={route.title} path={route.path} title={route.title} />
      ))}
    </div>
  );
};

interface NavItemProps {
  path: string;
  title: string;
  icon?: ReactNode;
}

const NavItem: FC<NavItemProps> = ({ path, title }) => (
  <Link href={path}>
    <a
      className={clsx(
        "no-underline transition-colors",
        "hover:text-sky-600 dark:hover:text-high-light",
        "text-main-dark dark:text-main-light"
      )}
    >
      {title}
    </a>
  </Link>
);
