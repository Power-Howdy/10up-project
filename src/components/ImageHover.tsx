import React from 'react'
type Props = {
    src: string,
    text: string
}

export default function ImageHover(props: Props) {
    return (
        <div className='w-full relative'>
            <img src={props.src}
                alt={props.text}
                className='w-full h-full'
            />
            <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,5%)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 items-center justify-center inset-0 flex flex-col text-4xl text-white'>
                <div className='text-center'>{props.text}</div>
                <hr/>
                <span className='italic text-2xl'>Learn more</span>
            </div>
        </div>
    )
}