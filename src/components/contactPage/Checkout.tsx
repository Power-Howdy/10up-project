import React from 'react'

type Props = {}

const Checkout = (props: Props) => {
  return (
    <div className='px-32 py-8'>
      <div className='text-center leading-loose text-2xl py-4'>
        <p>Looking to join our team? Check out our careers page.</p>
        <p>For press inquiries, email pr@10up.com</p>
      </div>
      <div className='grid grid-cols-3 leading-loose py-8'>
        <div className='text-center flex align-middle justify-center items-center flex-col inset-0 h-32 border-2 mt-8 border-r-0 border-gray-500'>
          <p>NORTH AMERICA</p>
          <p>+1 (888) 571 7130</p>
        </div>
        <div className='text-center flex align-middle justify-center items-center flex-col inset-0 h-48 border-2  border-gray-500'>
          <p>GENERAL INQUIRIES</p>
          <p>SALES@10UP.COM</p>
          <p>PR@10UP.COM</p>
        </div>
        <div className='text-center flex align-middle justify-center items-center flex-col inset-0 h-32 border-2 mt-8 border-l-0 border-gray-500'>
          <p>EUROPE</p>
          <p>+44 (0) 20 8123 4326</p>
        </div>
      </div>
    </div>
  )
}

export default Checkout