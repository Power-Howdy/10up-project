import React from 'react'
import Image from "next/image"
type Props = {
    avatar: string,
    name: string,
    role: string
}

const MemberCard = (props: Props) => {
  return (
    <div>
        <Image width={600} height={600} src={props.avatar} alt={props.name}/>
        <div className='bg-teal-500 text-white'>
            <div className='uppercase text-lg'>{props.name}</div>
            <div className='text-md'>{props.role}</div>
        </div>
    </div>
  )
}

export default MemberCard