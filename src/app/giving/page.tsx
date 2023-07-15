'use client'
import TopBanner from "@/components/TopBanner"
import TextImageBlock from "@/components/TextImageBlock"
import Prompt from "@/components/Prompt"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import Comment from "@/components/givingPage/Comment"
import Achievements from "@/components/givingPage/Achievements"
import Plugins from "@/components/givingPage/Plugins"
export default function GivingPage() {
  type dataType = {
    picture: string,
    picturePosition: string,
    title: string,
    content: string
  }
  const [data, setData] = useState<dataType[]>([]);
  useEffect(() => {
    //get data from server or ...
    setData([
      {
        picture: "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/uploads/2014/04/1.jpg",
        picturePosition: "right",
        title: "40+Conference Speakers",
        content: "Every year, 10uppers travel the globe to volunteer, speak at, and organize dozens of industry events. Whether its a local WordCamp or national jsConf, a niche Write the Docs or expansive CMS Expo, we make the time to share our expertise."
      },
      {
        picture: "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/uploads/2014/04/1.jpg",
        picturePosition: "left",
        title: "40+Conference Speakers",
        content: "Every year, 10uppers travel the globe to volunteer, speak at, and organize dozens of industry events. Whether its a local WordCamp or national jsConf, a niche Write the Docs or expansive CMS Expo, we make the time to share our expertise."
      },
      {
        picture: "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/uploads/2014/04/1.jpg",
        picturePosition: "right",
        title: "40+Conference Speakers",
        content: "Every year, 10uppers travel the globe to volunteer, speak at, and organize dozens of industry events. Whether its a local WordCamp or national jsConf, a niche Write the Docs or expansive CMS Expo, we make the time to share our expertise."
      },
      {
        picture: "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/uploads/2014/04/1.jpg",
        picturePosition: "left",
        title: "40+Conference Speakers",
        content: "Every year, 10uppers travel the globe to volunteer, speak at, and organize dozens of industry events. Whether its a local WordCamp or national jsConf, a niche Write the Docs or expansive CMS Expo, we make the time to share our expertise."
      }
    ])
  }, [])
  return (
    <>
      <TopBanner imageUrl="https://10up.com/wp-content/themes/10up-sept2016/dist/img/givingback/header.jpg" title="Giving Back" />
      <div>
        {data.map(item => <TextImageBlock key={nanoid()} picturePosition={item.picturePosition} picture={item.picture} title={item.title} content={item.content} />)}
      </div>
      <Comment />
      <Achievements />
      <Plugins />
      <Prompt />
    </>
  )
}
