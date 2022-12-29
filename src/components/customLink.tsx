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
          linkHoverEffect,
          "transition-all"
        )}
      >
        {children}
      </a>
    </Link>
  );
};

const linkHoverEffect = clsx(
  "hover:border-dotted hover:border-b-2 hover:border-black visited:no-underline",
  "dark:hover:border-white"
);

export default CustomLink;
