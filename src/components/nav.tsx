import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

const Routes: { path: string; title: string }[] = [
  { path: "/", title: "Home" },
  { path: "/posts", title: "Blog" },
  // { path: "/en-posts", title: "English posts" },
  // { path: "/zh-posts", title: "中文文章" },
];

export const Navigation: FC = () => {
  const router = useRouter();
  return (
    <div
      className={clsx([
        "navigation",
        "flex justify-end items-center gap-8",
        "py-8 px-0 w-full text-lg",
      ])}
    >
      {Routes.map((route) => (
        <NavItem
          key={route.title}
          path={route.path}
          title={route.title}
          active={router.pathname === route.path}
        />
      ))}
    </div>
  );
};

interface NavItemProps {
  path: string;
  title: string;
  icon?: ReactNode;
  active: boolean;
}

const NavItem: FC<NavItemProps> = ({ path, title, active }) => (
  <Link href={path}>
    <a
      className={clsx(
        active && "text-sky-600 dark:text-high-light",
        "no-underline transition-colors",
        "hover:text-sky-600 dark:hover:text-high-light"
      )}
    >
      {title}
    </a>
  </Link>
);
