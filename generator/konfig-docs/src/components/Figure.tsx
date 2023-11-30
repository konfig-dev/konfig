import React, { PropsWithChildren, ReactNode } from "react";

export function Figure({
  children,
  caption,
}: PropsWithChildren<{ caption: ReactNode }>) {
  const child = getChildImage(children);
  return (
    <figure className="flex flex-col items-center">
      {
        <div className="mb-[-5px] w-full text-center">
          {child ? child : children}
        </div>
      }
      <b>
        <figcaption className="text-center font-light text-sm">
          {caption}
        </figcaption>
      </b>
    </figure>
  );
}

export function getChildImage(children: ReactNode): ReactNode | undefined {
  if (!React.isValidElement(children)) return;
  if (children.props.type === "p") return;
  return children.props.children;
}
