import React from 'react'

export function LogoBox({ logo, company }: { logo: string; company: string }) {
  return (
    <div className="my-5 p-4 shadow-xl bg-white rounded-md w-fit ">
      <img className="sm:h-16" src={logo} alt={`${company} logo`} />
    </div>
  )
}
