import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export const Prose: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "prose prose-stone w-full font-light tracking-wide dark:prose-invert lg:prose-lg",
        className
      )}
    >
      {children}
    </div>
  );
};
