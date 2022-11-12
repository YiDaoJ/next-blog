import clsx from "clsx";
import { FC } from "react";
import { Navigation } from "../Navigation";

export const Layout: FC = ({ children }) => {
  return (
    <div
      className={clsx(
        "layout",
        "flex flex-col justify-start",
        "h-full w-full py-4 px-16",
        "bg-silver dark:bg-dark"
      )}
    >
      <Navigation />
      <main
        className={clsx(
          "main",
          "flex  flex-initial flex-col items-center justify-center ",
          "h-full p-32"
        )}
      >
        {children}
      </main>
      <footer
        className={clsx([
          "footer",
          "py-8 px-0",
          "flex justify-center items-center",
        ])}
      >
        Present by YiDaoJ
      </footer>
    </div>
  );
};
