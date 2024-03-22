import React from "react";

export function LogoBox({
  logo,
  company,
  onLoad,
}: {
  logo: string;
  company: string;
  onLoad?: () => void;
}) {
  return (
    <div className="my-5 p-4 shadow-xl bg-white rounded-md w-fit ">
      <img
        className="sm:h-16"
        src={logo}
        alt={`${company} logo`}
        onLoad={onLoad}
      />
    </div>
  );
}
