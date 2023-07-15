import React from 'react'

const OurLocation = () => {
  return (
    <div className='bg-teal-300 text-white justify-center text-center p-32'>
      <div className='text-7xl'>Where is 10up?</div>
      <div className='w-1/2 mx-auto'>
        <button className='mx-8 bg-teal-800'>USA</button>
        <button className='mx-8 bg-teal-500'>Canada</button>
        <button className='mx-8 bg-teal-500'>Europe</button>
        <button className='mx-8 bg-teal-500'>India</button>
      </div>
      <div>
        Google Map Area
      </div>
      <div className='text-3xl italic'>We're wherever you are, with 10uppers in most major cities—and everywhere in between.</div>
    </div>
  )
}

export default OurLocation