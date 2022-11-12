import { FC, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

const Routes: { path: string; title: string }[] = [
  { path: "/", title: "Home" },
  { path: "/archives", title: "Archives" },
  { path: "/categories", title: "Categories" },
  { path: "/tags", title: "Tags" },
];

export const Navigation: FC = () => {
  return (
    <>
      {Routes.map((route) => (
        <NavItem key={route.title} path={route.path} title={route.title} />
      ))}
    </>
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
        "hover:text-red",
        "text-black dark:text-white"
      )}
    >
      {title}
    </a>
  </Link>
);
