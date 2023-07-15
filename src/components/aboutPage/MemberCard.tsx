
import React, {useEffect, useState, useRef, RefObject} from 'react'
import Image from "next/image"
import useOnScreen from "../useOnScreen";

type Props = {
    avatar: string,
    name: string,
    role: string
}

const MemberCard = (props: Props) => {
  const child3Ref = useRef<HTMLDivElement>(null);
   const child3RefValue = useOnScreen(child3Ref);
   const [isChild3Ref, setIsChild3Ref] =  useState(false);
useEffect(() => {
      if (!isChild3Ref)
          setIsChild3Ref(child3RefValue);
   }, [child3RefValue])
  return (
    <div ref={child3Ref}>
      {child3RefValue && <>
        <Image width={600} height={600} src={props.avatar} alt={props.name}/>
        <div className='bg-teal-500 text-white text-center p-3'>
            <div className='uppercase text-lg'>{props.name}</div>
            <div className='text-md'>{props.role}</div>
        </div>
        </>}
    </div>
  )
}

export default MemberCard