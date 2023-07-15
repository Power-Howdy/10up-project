import React from 'react'
import Image from "next/image"
type Props = {}

const Prompt = (props: Props) => {
  return (
    <div className='w-full static'>
      <Image width={100} height={100} src={""} alt="prompt background image" className='w-full'/>
      <div className='text-white bg-red-900 bg-opacity-50 w-full h-full items-center justify-center inset-0 flex flex-col text-4xl'>
        <div className='italic text-white'>Let's build something great</div>
        <div className='grid grid-cols-2 gap-10'>
          <button className='border-2 border-white bg-opacity-100 hover:bg-opacity-60'>HIRE US</button>
          <button className='border-2 border-white bg-opacity-100 hover:bg-opacity-60'>APPLY</button>
        </div>
      </div>
    </div>
  )
}

export default Prompt