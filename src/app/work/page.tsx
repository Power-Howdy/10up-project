import TopBanner from "@/components/TopBanner"
import Works from "@/components/workPage/Works"//as this may take some more time, let's put this off for later work
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
  