
import React, { useEffect, useState, useRef } from 'react'
import Image from "next/image"
import useOnScreen from "../useOnScreen";

type Props = {
  avatar: string,
  name: string,
  role: string
}

const MemberCard = (props: Props) => {
  const childRef = useRef<HTMLDivElement>(null);
  const childRefValue = useOnScreen(childRef);
  const [isChildRef, setIsChildRef] = useState(false);
  useEffect(() => {
    if (!isChildRef)
      setIsChildRef(childRefValue);
  }, [childRefValue])
  return (
    <div ref={childRef}>
      {childRefValue && <>
        <Image width={600} height={600} src={props.avatar} alt={props.name} />
        <div className='bg-teal-500 text-white text-center p-3'>
          <div className='uppercase text-lg'>{props.name}</div>
          <div className='text-md'>{props.role}</div>
        </div>
      </>}
    </div>
  )
}

export default MemberCard