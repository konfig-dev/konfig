import React, { PropsWithChildren, ReactElement, ReactNode } from "react";

export function Figure({
  children,
  caption,
}: PropsWithChildren<{ caption: ReactNode }>) {
  const child = getChildImage(children);
  const childExists = child !== undefined;
  const className = childExists ? child.props.className || "" : "";
  const classNameWithMxAuto = className + " mx-auto";
  const newChild = childExists
    ? React.cloneElement(child, {
        className: classNameWithMxAuto,
      })
    : children;
  return (
    <figure className="mb-4">
      {/* w-full is to ensure putting a code block inside figure doesn't overflow off the page */}
      {/* flex flex-col items-center is to center the inner div */}
      {<div className="mb-2">{childExists ? newChild : children}</div>}
      <b>
        <figcaption className="text-center font-light text-sm">
          {caption}
        </figcaption>
      </b>
    </figure>
  );
}

export function getChildImage(children: ReactNode): ReactElement | undefined {
  if (!React.isValidElement(children)) return;
  if (children.props.type === "p") return;
  return children.props.children;
}
