'use client'


/* Instruments */
import NavLink from "./NavLink"

export const Nav = () => {

  return (
    <nav className="text-center pt-5 bg-black pb-2">
      <NavLink title={"About"} pathname={"/about"}/>
      <NavLink title={"Our work"} pathname={"/work"}/>     
      <NavLink title={"Blog"} pathname={"/blog"}/>     
      <NavLink title={"10up"} pathname={"/"}/>     
      <NavLink title={"Career"} pathname={"/career"}/>     
      <NavLink title={"Giving back"} pathname={"/giving"}/>      
      <NavLink title={"Contact"} pathname={"/contact"}/>
    </nav>
  )
}
