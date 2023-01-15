import clsx from "clsx";
import { FC } from "react";

export const Prose: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "prose prose-stone dark:prose-invert md:prose-md lg:prose-lg tracking-wide w-full font-light",
        className
      )}
    >
      {children}
    </div>
  );
};
