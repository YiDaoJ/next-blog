import clsx from "clsx";
import { FC } from "react";

export const ScrollToTop: FC<{ onClick(): void }> = ({ onClick }) => {
  return (
    <button
      className={clsx(
        "fixed right-6 bottom-6 h-9 w-9 ",
        "rounded-full bg-highlight opacity-60",
        "hover:opacity-100"
      )}
      onClick={onClick}
    >
      ⬆️
    </button>
  );
};
