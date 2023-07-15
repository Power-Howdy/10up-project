import React from 'react'

type Props = {
  imageUrl: string,
  title: string
}

const TopBanner = (props: Props) => {
  return (
    <div className='w-full relative'>
      <img
        src={props.imageUrl}
        className='w-full h-64'
        alt={props.title}
      />
      <div className='absolute flex flex-col inset-0 justify-center text-center align-middle text-white text-5xl'>{props.title}</div>
    </div>
  )
}

export default TopBanner