import React from 'react'

const OurLocation = () => {
  return (
    <div className='bg-teal-400 text-white justify-center text-center p-32'>
      <div className='text-7xl my-12'>Where is 10up?</div>
      <div className='text-3xl grid grid-cols-4 gap-8'>
        <button className=' bg-teal-800 p-6'>USA</button>
        <button className=' bg-teal-500 p-6'>Canada</button>
        <button className=' bg-teal-500 p-6'>Europe</button>
        <button className=' bg-teal-500 p-6'>India</button>
      </div>
      <div className='bg-slate-500 h-[300px] text-center align-middle justify-center inset-0 flex flex-col text-5xl my-5'>
        Google Map Area
      </div>
    <div className='text-3xl italic my-12'>We&apos;re wherever you are, with 10uppers in most major cities—and everywhere in between.</div>
    </div>
  )
}

export default OurLocation