import React from 'react'
/* Core */
import Link from 'next/link'
/* Instruments */
import { usePathname } from 'next/navigation'

type Props = {
    pathname: any,
    title: any
}

const NavLink = (props: Props) => {
    const currentPath = usePathname()
  return (
    <Link
        className={`p-4  hover:underline-offset-8 hover:underline ${props.pathname === currentPath ? 'underline-offset-8 underline text-green-800 bg-slate-200': 'text-white'} ${props.pathname === "/" ? 'h-80 w-80': ''}`}
        href={props.pathname}
      >
        {props.title}
      </Link>
  )
}

export default NavLink;