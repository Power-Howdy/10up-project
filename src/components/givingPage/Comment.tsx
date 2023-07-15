import React from 'react'

type Props = {}

const Comment = (props: Props) => {
  return (
    <div className='p-8 grid grid-cols-3'>
      <div>
        <div className='text-3xl my-12'>What we Believe</div>
        <button className='p-6 bg-teal-500 text-white hover:bg-teal-700 text-2xl'>HIRE US</button>
      </div>
      <div className='col-span-2'>
        <p>We believe that an open, collaborative Internet and the democratization of publishing – making the tools for building and telling stories simple and affordable – have been the engine of a web renaissance. The values of openness we espouse and the platforms that embody them are only as strong as the community behind them. We think it is incumbent upon those who succeed on the backs of these platforms to ensure their success. And do we: by donating hundreds of thousands of dollars annually by way of code contributions, material sponsorships, community organizing, our own projects, and sharing our expertise.</p>
        <p>It’s not just good citizenship: it’s good business. Our leadership in support of projects like WordPress demands a mastery of these platforms like no other team. Our culture attracts leaders that share our values and passions, and see their work as more than a paycheck. Our clients know that part of every dollar they spend goes to the free platforms their businesses depend on.</p>
        <p>When you work with us, you’re not just building a website. You help build the Internet.</p>
      </div>
    </div>
  )
}

export default Comment