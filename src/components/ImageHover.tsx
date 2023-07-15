import React from 'react'
import Image from 'next/image'
type Props = {
    src: string,
    text: string
}

export default function ImageHover(props: Props) {
    return (
        <div>
            <Image src={props.src}
                alt={props.text}
                width={100}
                height={100}
                className='w-full'
            />
            <div className='text-white bg-black bg-opacity-50 rounded-full w-full h-full items-center justify-center inset-0 flex flex-col text-4xl hover:visible invisible'>
                {props.text}
                <hr/>
                <span className='italic text-2xl'>Learn more</span>
            </div>
        </div>
    )
}