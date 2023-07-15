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
        <img src={props.avatar} width={16} height={16} alt='avatar' className='rounded-full'/>
        <span>{props.author}</span>
        <img src={props.picture} className='w-full' alt='picture'/>
        <div>{props.content}</div>
        <ButtonCustomized type='green' label='Read More' handleClick={() => { alert("Not implemented yet!")}}/>
      </div>}
    </div>
  )
}

export default BlogComponent