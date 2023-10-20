import { clsx } from "@mantine/core";
import { PropsWithChildren } from "react";

export function DarkSectionWrapper({
  children,
  direction,
}: PropsWithChildren<{ direction?: "bl" }>) {
  return (
    <div
      className={clsx(
        {
          ["bg-gradient-to-br"]: direction !== "bl",
          ["bg-gradient-to-bl"]: direction === "bl",
        },
        `px-4 sm:px-12 from-[rgb(8,17,25)] to-[rgb(9,7,48)] overflow-hidden`
      )}
    >
      {children}
    </div>
  );
}
