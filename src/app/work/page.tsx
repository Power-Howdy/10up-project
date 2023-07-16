import TopBanner from "@/components/TopBanner"
import WorkIntro from "@/components/firstPage/WorkIntro"
import ClientReview from "@/components/firstPage/ClientReview"
import Prompt from "@/components/Prompt"

export default function WorkPage() {
    return (
      <>
        <TopBanner imageUrl="https://10up.com/wp-content/themes/10up-sept2016/dist/img/header-page-our-work.jpg" title="Our Work"/>
        <WorkIntro />
        <ClientReview/>
        <Prompt/>
      </>
    )
  }
  