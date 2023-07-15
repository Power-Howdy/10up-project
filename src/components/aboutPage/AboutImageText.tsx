import React from 'react'
import Image from "next/image"
type Props = {
    imageUrl: any,
    title: any,
    content: any
}

const AboutImageText = (props: Props) => {
  return (
    <div>
        <Image width={200} height={200} src={props.imageUrl} className='mx-auto hover:shadow-2xl rounded-full' alt=""/>
        <div className='text-white text-3xl my-5 italic underline underline-offset-8'>{props.title}</div>
        <div className='text-white text-md'>{props.content}</div>
    </div>
  )
}

export default AboutImageText