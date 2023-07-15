"use client"
import React from 'react'
import VideoBackground from '@/components/firstPage/VideoBackground'
import WorkIntro from '@/components/firstPage/WorkIntro'
import ClientReview from '@/components/firstPage/ClientReview'
import OurLocation from '@/components/firstPage/OurLocation'
import RecentBlog from '@/components/firstPage/RecentBlog'
import Prompt from '@/components/Prompt'

export default function Home() {

  return (
    <main className="">
      <VideoBackground/>
      <WorkIntro/>
      <ClientReview/>
      <OurLocation/>
      <RecentBlog/>
      <Prompt/>
    </main>
  )
}
