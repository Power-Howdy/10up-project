import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Team = () => {
  const [members, setMembers] = useState([]);

  return (
    <div className='w-full'>
        <div className='w-full relative'>
            <Image src="https://10up.com/wp-content/themes/10up-sept2016/dist/img/header-page-about.jpg" className='w-full' width={1024} height={100} alt='Team header image'/>
            <div className='absolute inset-0 flex flex-col items-center justify-center '>
                <div className='text-white bg-black bg-opacity-50 rounded-full w-64 h-64 items-center justify-center inset-0 flex flex-col text-4xl'>
                    Our Team
                </div>
            </div>
        </div>
        <div className='w-full bg-black'>
            <div className='w-1/2 mx-auto text-white'>
                <a href=''>All</a>
                <a href=''>All</a>
                <a href=''>All</a>
                <a href=''>All</a>
            </div>
        </div>
    </div>
  )
}

export default Team;