import React from 'react'

type Props = {
    title: string
}

const Vacancy = (props: Props) => {
  return (
    <div className='bg-gray-50 p-10 hover:border-green-300 hover:cursor-pointer border-gray-300 border-2' >
      <div className='text-3xl'>{props.title}</div>
      <div className='hover:text-green-300 mt-16 hover:cursor-pointer'>Apply Now</div>
    </div>
  )
}

export default Vacancy