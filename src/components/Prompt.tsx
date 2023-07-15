import React from 'react'
import Image from "next/image"
type Props = {}

const Prompt = (props: Props) => {
  return (
    <div className='w-full relative'>
      <img  src={"https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_1116,h_366/prod/wp-content/themes/10up-sept2016/assets/img/tagline-bg.jpg"} alt="prompt background image" className='w-full'/>
      <div className='absolute w-full overflow-hidden bg-[hsl(0,0%,5%)] bg-fixed opacity-70 items-center justify-center inset-0 flex flex-col text-4xl text-white'>
        <div className='italic text-white text-5xl my-12'>Let&apos;s build something great</div>
        <div className='grid grid-cols-2 gap-10'>
          <button className='border-2 p-8 border-white bg-white bg-opacity-0 hover:bg-opacity-60'>HIRE US</button>
          <button className='border-2 p-8 border-white bg-white bg-opacity-0 hover:bg-opacity-60'>APPLY</button>
        </div>
      </div>
    </div>
  )
}

export default Prompt