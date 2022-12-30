import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { Navigation } from "./nav";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={clsx(
        "layout",
        "flex flex-col justify-start items-center",
        "h-screen w-full py-4 px-16",
        "bg-silver dark:bg-dark"
      )}
    >
      <Navigation />
      <main
        className={clsx(
          "container mx-auto",
          "flex flex-initial flex-col items-center justify-start"
        )}
      >
        {children}
      </main>
      <footer
        className={clsx([
          "py-8 px-0 opacity-60",
          "flex justify-center items-center",
        ])}
      >
        Present by YiDaoJ
      </footer>
    </div>
  );
};
