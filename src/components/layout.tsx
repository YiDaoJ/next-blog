import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import CustomLink from "./customLink";
import { Navigation } from "./nav";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={clsx(
        "layout",
        "flex flex-col items-center justify-start",
        "h-screen w-full px-6 sm:px-6"
      )}
    >
      <Navigation />
      <main
        className={clsx(
          "container mx-auto",
          "flex flex-1 flex-col items-center justify-start py-2 md:py-6"
        )}
      >
        {children}
      </main>
      <footer
        className={clsx([
          "py-8 px-0 opacity-60",
          "flex items-center justify-center",
          "text-base md:text-lg",
        ])}
      >
        <span className="mr-1.5">Present by</span>
        <CustomLink href="https://yidaoyidao.cc/">YiDaoJ</CustomLink>
      </footer>
    </div>
  );
};
