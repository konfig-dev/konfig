import React from "react";

export function LogoBox({ logo, company }: { logo: string; company: string }) {
  return (
    <div className="my-5 p-4 shadow-xl rounded-sm w-fit bg-gradient-to-br relative from-white to-slate-300">
      <img className="sm:h-16" src={logo} alt={`${company} logo`} />
    </div>
  );
}
