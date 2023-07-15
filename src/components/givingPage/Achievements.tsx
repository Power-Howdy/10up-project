import React from 'react'

type Props = {}

const Achievements = (props: Props) => {
  return (
    <div className='grid grid-cols-3 gap-10 bg-gray-200 py-12 px-36'>
      <div className='bg-white'>
        <img src={"https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/uploads/2021/07/wordpress-logo-300x140.png"} className='w-full bg-gray-300' alt="wordpress "/>
        <p className='p-8'>2 of the 18 people who hold the keys to WordPress work at 10up. We've contributed thousands of patches, have 40+ credited contributors, and employ one of the 6 lead developers.</p>
      </div>
      <div className='bg-white'>
        <img src={"https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/uploads/2021/07/vagrant-logo-300x140.png"} className='w-full bg-gray-300' alt="wordpress "/>
        <p className='p-8'>We rethought local WordPress development with Varying Vagrant Vagrants. When the project took off, we released VVV to its community.</p>
      </div>
      <div className='bg-white'>
        <img src={"https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/uploads/2021/07/jquery-logo-300x140.png"} className='w-full bg-gray-300' alt="wordpress "/>
        <p className='p-8'>We made core contributions to the ubiquitous jQuery project, and sponsored the jQuery Foundation by supporting their WordPress powered website.</p>
      </div>
    </div>
  )
}

export default Achievements