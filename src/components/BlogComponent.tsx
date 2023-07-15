import React, { useEffect, useState, useRef } from 'react'
import Image from "next/image"
import useOnScreen from "./useOnScreen";
import ButtonCustomized from './ButtonCustomized';

type Props = {
  title: string,
  author: string,
  avatar: string,
  picture: string,
  content: string
}

const BlogComponent = (props: Props) => {
  const childRef = useRef<HTMLDivElement>(null);
  const childRefValue = useOnScreen(childRef);
  const [isChildRef, setIsChildRef] = useState(false);
  useEffect(() => {
    if (!isChildRef)
      setIsChildRef(childRefValue);
  }, [childRefValue])

  return (
    <div ref={childRef}>
      {childRefValue && <div className='px-12 py-8'>
        <div className='text-3xl my-3'>{props.title}</div>
        <div className='my-5 inline-block flex flex-auto'>
          <img src={props.avatar} width={32} height={32} alt='avatar' className='rounded-full'/>
          <span className='mx-8 text-2xl'>{props.author}</span>
        </div>
        <img src={props.picture} className='w-full' alt='picture'/>
        <div className='my-8 text-lg'>{props.content}</div>
        <ButtonCustomized type='green' label='Read More' handleClick={() => { alert("Not implemented yet!")}}/>
      </div>}
    </div>
  )
}

export default BlogComponent