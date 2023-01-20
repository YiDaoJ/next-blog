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
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={clsx([
        "navigation",
        "flex items-center justify-end gap-8",
        "w-full py-8 px-0 text-lg",
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
        active && "text-sky-600 dark:text-highlight",
        "no-underline transition-colors",
        "hover:text-sky-600 dark:hover:text-highlight"
      )}
    >
      {title}
    </a>
  </Link>
);
