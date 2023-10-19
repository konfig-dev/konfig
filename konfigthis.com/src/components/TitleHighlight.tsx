import { PropsWithChildren } from "react";

export function TitleHighlight({ children }: PropsWithChildren<{}>) {
  return (
    <span
      className={`font-bold text-white relative border-b-4 border-konfig-blue-light`}
    >
      {children}
    </span>
  );
}
