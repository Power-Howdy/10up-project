import React from 'react'

type Props = {
    picture: string,
    picturePosition: string,
    title: string,
    content: string
}

const TextImageBlock = (props: Props) => {
  const PictureComponet = () => <img src={props.picture} alt={props.title} className='w-full h-full'/>;
  const TextBlock = () => <div className='bg-white text-black p-5 text-center justify-center align-middle inset-0 flex flex-col items-center'>
  <div className='text-2xl italic my-8'>{props.title}</div>
  <div className='text-md'>{props.content}</div>
</div>;
  return (
    <div className='grid grid-cols-2'>
      <div className='bg-white text-black text-center justify-center align-middle inset-0 flex flex-col items-center'>
        { props.picturePosition === "left" ? <PictureComponet/> : <TextBlock/> }
      </div>
      <div className='bg-white text-black text-center justify-center align-middle inset-0 flex flex-col items-center'>
      { props.picturePosition === "left" ? <TextBlock/> : <PictureComponet/> }
      </div>
    </div>
  )
}

export default TextImageBlock