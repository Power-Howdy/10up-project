import React from 'react'

type Props = {}

const RecentBlog = (props: Props) => {
  return (
    <div className='bg-gray-300'>
      <div className='w-64 bg-red-900 text-white italic text-5xl'>Blog</div>
      <div className='grid grid-cols-2 gap-10 mx-10 justify-center'>
          <div className='bg-white text-black p-12'>On Monday, June 26th, I’ll be presenting at Boston’s WordPress Meetup on ways Artificial Intelligence (AI) can integrate with WordPress. The presentation, “You Got Your AI In My WP: WordPress and Artificial Intelligence”, will explore a few tools available that utilize AI to assist content creators on WordPress — including 10up’s own ClassifAI and Jetpack’s AI Assistant. The Boston WordPress […]
            <button className='w-full bg-gray-700 text-white'>Read More</button>
          </div>
          <div className='bg-white text-black p-12'>
            <a className='text-5xl hover:underline'>Introducing HeadstartWP: An Open Source, Nimble Framework for Headless WordPress Sites</a>
            Drawing from lessons learned building and supporting dozens of headless sites for our clients, 10up architected HeadstartWP: a jumping-off point for decoupled builds, powered by WordPress and Next.js. HeadstartWP delivers premium 10up craftsmanship with time-saving efficiencies for developers. In keeping with our commitment to giving back to the open web ecosystem, HeadstartWP is now available as a free and open […]
            <button className='w-full bg-gray-700 text-white'>Read More</button>
          </div>
      </div>
    </div>
  )
}

export default RecentBlog