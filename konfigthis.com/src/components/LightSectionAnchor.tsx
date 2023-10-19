import { PropsWithChildren } from "react";

export function LightSectionAnchor({
  href,
  children,
}: PropsWithChildren<{ href: string }>) {
  return (
    <a
      className="text-black font-semibold border-b border-yellow-600 break-words hover:border-b-2"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
}
