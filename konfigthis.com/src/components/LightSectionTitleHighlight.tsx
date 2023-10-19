import { PropsWithChildren } from "react";

export function LightSectionTitleHighlight({
  children,
}: PropsWithChildren<{}>) {
  return (
    <span className="text-black font-bold border-b-4 border-solid border-blue-900">
      {children}
    </span>
  );
}
