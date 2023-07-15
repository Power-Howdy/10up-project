import Checkout from "@/components/contactPage/Checkout";
import ContactForm from "@/components/contactPage/ContactForm";
import OurLocation from "@/components/OurLocation";
export default function ContactPage() {
    return (
      <>
        <div className="w-full px-12 py-10 text-center">
          <div className="text-3xl italic my-5">Let's Build Something Great</div>
          <div>Seeking a partner to help conceptualize, refine, execute, and/or support your digital strategy? We’re always looking for new opportunities to apply our white glove service, craftsmanship, and creativity</div>
        </div>
        <ContactForm/>
        <Checkout/>
        <OurLocation/>
      </>
    )
  }
  