import { clsx } from "@mantine/core";
import { PropsWithChildren } from "react";

export function SdkSectionFlex({
  children,
  reverse,
  breakpoint,
}: PropsWithChildren<{ reverse?: boolean; breakpoint?: "lg" }>) {
  return (
    <div
      className={clsx("flex flex-col relative gap-4 sm:gap-20", {
        ["sm:gap-20"]: breakpoint !== "lg",
        ["lg:gap-20"]: breakpoint === "lg",
        ["lg:flex-row-reverse"]: breakpoint === "lg" && reverse,
        ["lg:flex-row"]: breakpoint === "lg" && !reverse,
        ["sm:flex-row"]: breakpoint !== "lg" && !reverse,
        ["sm:flex-row-reverse"]: breakpoint !== "lg" && reverse,
      })}
    >
      {children}
    </div>
  );
}
