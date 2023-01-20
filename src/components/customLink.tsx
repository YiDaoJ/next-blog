import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { UrlObject } from "url";

interface CustomLinkProps {
  href: UrlObject | string;
  as?: UrlObject | string;
}

const CustomLink: FC<PropsWithChildren<CustomLinkProps>> = ({
  href,
  as,
  children,
}) => {
  return (
    <Link as={as} href={href}>
      <a
        target="_blank"
        className={clsx(
          "text-black dark:text-white",
          "font-semibold no-underline",
          "border-b-2 border-dotted border-sky-600 dark:border-highlight",
          linkHoverEffect
        )}
      >
        {children}
      </a>
    </Link>
  );
};

const linkHoverEffect = clsx(
  "visited:no-underline hover:border-b-2 hover:border-solid hover:border-sky-600",
  "dark:hover:border-highlight",
  "transition-all"
);

export default CustomLink;
