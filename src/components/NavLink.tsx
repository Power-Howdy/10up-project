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
        className={`p-4  hover:underline-offset-8 hover:underline ${props.pathname === currentPath ? 'underline-offset-8 underline text-green-800 bg-slate-200': 'text-white'}`}
        href={props.pathname}
      >
        {props.pathname === "/" && 
        <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 inline-block' viewBox="0 0 235.84 269.94"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M60.93,4.5,0,34.5,12.08,48.92V186.13l48.85-48.87Z" fill="#df2b26"></path><path d="M117.5,215.8c0,7.53-5.09,10.75-10.75,10.75-7.51,0-9.26-4.57-9.26-9.54V173.88h-.32L73,198v24.64c0,13.57,7.26,25.52,24,25.52A30.65,30.65,0,0,0,117.5,240v6.58H142V173.88H117.5Zm84.25-43.4a28.58,28.58,0,0,0-20.69,8.33v-6.85H156.48v96.06h24.58V240a29.6,29.6,0,0,0,20.69,8.19c20.29,0,32.93-16.25,32.93-37.88,0-21.36-12.64-37.89-32.93-37.89Zm-6.58,54.82c-9.4,0-14.11-7.8-14.11-17.06s4.58-16.93,14.11-16.93c9.28,0,13.57,7.78,13.57,16.93C208.74,219.16,204.45,227.22,195.17,227.22Z" fill="#fff"></path><path d="M157.09,0A78.6,78.6,0,0,0,85.93,112.26l.82.86L135.4,64.47,120.1,49.18h66.56v66.56l-15.3-15.3-48.92,48.92A78.71,78.71,0,1,0,157.09,0Z" fill="#df2b26"></path></g></g></svg>
        }
        {props.pathname !== "/" && props.title}
      </Link>
  )
}

export default NavLink;