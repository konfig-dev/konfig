import { clsx } from "@mantine/core";
import { PropsWithChildren } from "react";

export function SdkSectionFlex({
  children,
  reverse,
}: PropsWithChildren<{ reverse?: boolean }>) {
  return (
    <div
      className={clsx("flex flex-col sm:flex-row gap-4 sm:gap-20", {
        ["sm:flex-row"]: !reverse,
        ["sm:flex-row-reverse"]: reverse,
      })}
    >
      {children}
    </div>
  );
}
