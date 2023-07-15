import React from 'react'

type Props = {}

const RecentBlog = (props: Props) => {
  return (
    <div className='bg-gray-300 px-32 pb-12'>
      <div className='w-64 bg-red-900 text-white italic text-5xl h-24 text-center flex flex-col align-middle inset-0 justify-center mb-12'>Blog</div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 justify-center'>
          <div >
            <p className='bg-white text-black p-12 text-2xl leading-loose'>On Monday, June 26th, I’ll be presenting at Boston’s WordPress Meetup on ways Artificial Intelligence (AI) can integrate with WordPress. The presentation, “You Got Your AI In My WP: WordPress and Artificial Intelligence”, will explore a few tools available that utilize AI to assist content creators on WordPress — including 10up’s own ClassifAI and Jetpack’s AI Assistant. The Boston WordPress […]
              </p>
              <button className='w-full bg-gray-700 text-white text-2xl p-6'>Read More</button>
          </div>
          <div >
            <p className='bg-white text-black pt-12 px-12 leading-loose text-3xl hover:underline'>Introducing HeadstartWP: An Open Source, Nimble Framework for Headless WordPress Sites</p>
            
            <p className='bg-white text-black px-12 text-2xl pb-12 leading-loose'>
            Drawing from lessons learned building and supporting dozens of headless sites for our clients, 10up architected HeadstartWP: a jumping-off point for decoupled builds, powered by WordPress and Next.js. HeadstartWP delivers premium 10up craftsmanship with time-saving efficiencies for developers. In keeping with our commitment to giving back to the open web ecosystem, HeadstartWP is now available as a free and open […]
            </p>
            <button className='w-full bg-gray-700 text-white text-2xl p-6'>Read More</button>
          </div>
            
            
      </div>
    </div>
  )
}

export default RecentBlog