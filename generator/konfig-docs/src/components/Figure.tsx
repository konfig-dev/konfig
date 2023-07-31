import React, { PropsWithChildren, ReactNode } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import innerText from "react-innertext";

export function Figure({
  src,
  caption,
  children,
}: PropsWithChildren<{ src?: string; caption: ReactNode }>) {
  return (
    <figure className="flex flex-col">
      {src && (
        <img
          src={useBaseUrl(src)}
          alt={typeof caption === "string" ? caption : innerText(caption)}
        />
      )}
      {children && <div className="mb-[-5px]">{children}</div>}
      <b>
        <figcaption style={{ textAlign: "center" }}>{caption}</figcaption>
      </b>
    </figure>
  );
}
