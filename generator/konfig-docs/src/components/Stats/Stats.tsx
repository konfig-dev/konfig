import React from "react";
import { PropsWithChildren } from "react";

function Wrapper({ children }: PropsWithChildren<{}>) {
  return <div className="grid grid-col-1 sm:grid-cols-2 gap-4">{children}</div>;
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-md border border-solid border-gray-300 dark:border-black p-4 text-center bg-[rgb(156,163,175,0.05)] dark:bg-[rgb(255,255,255,0.05)]">
      <div className="text-2xl font-bold">{number}</div>
      <div className="text-[rgb(75,85,99)] dark:text-[rgb(209,213,219)] text-sm">
        {label}
      </div>
    </div>
  );
}

export const Stats = {
  Wrapper,
  Stat,
};
