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
          "border-dotted border-b-2 border-sky-600 dark:border-high-light",
          linkHoverEffect
        )}
      >
        {children}
      </a>
    </Link>
  );
};

const linkHoverEffect = clsx(
  "hover:border-solid hover:border-b-2 hover:border-sky-600 visited:no-underline",
  "dark:hover:border-high-light",
  "transition-all"
);

export default CustomLink;
