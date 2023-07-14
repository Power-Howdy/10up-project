'use client'
import React, { useState } from "react"
import AboutImageText from "../../components/AboutImageText"
import {
  useSelector,
  selectAbout
} from '@/lib/redux'
import { nanoid } from "nanoid"
import Boundary from "./boundary"
import Team from "./Team"
export default function AboutPage() {
  const abouts = useSelector(selectAbout);
  return (
    <>
      <div className="text-center w-3/4 mx-auto mt-5">
        <h1 className="text-3xl my-5">We make a better web with finely crafted websites and tools for content creators</h1>
        <hr />
        <p className="mt-5">
          We make the internet better with consultative creative and engineering services, innovative tools, and dependable products that take the pain out of content creation and management, in service of digital experiences that advance business and marketing objectives. We’re a group of people built to solve problems, made to create, wired to delight.</p>
        <p>
          A customer-centric service model that covers every base, unrivaled leadership and investment in open platforms and tools for digital makers and content creators, and a forward-looking remote work culture make for a refreshing agency experience.
        </p>
        <p>
          With ~200 experts in digital strategy and management, software engineering, user experience and interactive design, cloud infrastructure, and audience and revenue optimization, we’re big enough to conquer any challenge, and small enough to care. Cross-discipline teams of 6-8 specialists organize around qualified project and product managers, putting customer delivery front and center. Whether your ads are down, your visitor bounce rate is up, or your database server is sideways, we’re a partner who never says, “We don’t know how to help,” and can always say, “The President would be happy to speak with you.”
        </p>
        <button className="h-14 p-3 text-2xl text-white bg-green-600  hover:bg-green-700 my-10">Hire us</button>
      </div>
      <div className="bg-pink-600">
        <div className="w-3/4 mx-auto py-10 flex">
          {
            abouts.map(item => <div key={nanoid()} className="w-1/3 px-5 text-center">
              <AboutImageText imageUrl={item.imageUrl} title={item.title} content={item.content} />
            </div>)
          }
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <Boundary />
      </div>
      <div>
        <Team />
      </div>
    </>
  )
}
