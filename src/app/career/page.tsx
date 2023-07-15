import VideoBackground from "@/components/firstPage/VideoBackground"
import TextImageBlock from "@/components/TextImageBlock"
import Tips from "@/components/careerPage/Tips"
import Vacancy from "@/components/careerPage/Vacancy"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import Benefits from "@/components/careerPage/Benefits"
import Prompt from "@/components/Prompt"
export default function CareerPage() {
  type FocusType = {
    picture: string,
    picturePosition: string,
    title: string,
    content: string
  }
  type VacancyType = {
    title: string
  }
  const [vacancies, setVacancies] = useState<VacancyType[]>([]);
  const [focuses, setFocuses] = useState<FocusType[]>([]);
  useEffect(() => {
    //get vacancies and focuses
    setVacancies([
      { title: "Senior Frontend Engineer" },
      { title: "Senior Backend Engineer" },
      { title: "Senior Full Stack Engineer" },
      { title: "Senior PHP Engineer" },
      { title: "Senior React Engineer" },
      { title: "Senior Vue Engineer" }
    ]);
    setFocuses([
      {
        picture: "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/uploads/2019/11/10up-talking.jpg",
        picturePosition: "left",
        title: "A focus on service",
        content: "The most important user experience at 10up is the way others experience us. We are motivated by helping our clients, colleagues, and community achieve success through a culture built on empathy and teamwork."
      },
      {
        picture: "https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/uploads/2019/11/10up-snorkeling.jpg",
        picturePosition: "right",
        title: "Challenge yourself",
        content: "We’re not known because our team is big—we’re known because our team thinks big. We’re constantly challenging ourselves to grow and exceed our own expectations, individually and collectively. Nothing is more satisfying than finding the solution to a complex problem and then making it happen."
      },
    ])
  }, [])
    return (
      <>
        <h1>Career page</h1>
        <VideoBackground/>
        <div className="py-8">
          { focuses.map(focus => <TextImageBlock key={nanoid()} picturePosition={focus.picturePosition} picture={focus.picture} title={focus.title} content={focus.content}/>)}
        </div>
        <Tips/>
        <Benefits/>
        <div className="py-8 grid grid-cols-3 gap-8">
          { vacancies.map(item => <Vacancy key={nanoid()} title={item.title}/>)}
        </div>
        <Prompt/>
      </>
    )
  }
  