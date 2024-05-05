import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Home, Info, Mail, Phone, Send } from "lucide-react"



function Contact() {
  return (
    <>
    <Meta title={"Contact us"}/>
    <BreadCrumb title="Contact us"/>
    <div className="contact-wrapperr py-5 Home-wrapper-2">
      <div className="container">
        <div className="flex flex-col">
           <div className="w-full">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127591.73873235245!2d45.22426164447214!3d2.0591986721644533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58425955ce6b53%3A0xbb20eaaa52cc59d9!2sMogadishu!5e0!3m2!1sen!2sso!4v1714665546887!5m2!1sen!2sso" width="600" height="250" className="border-0 w-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
           <div className="w-full">
              <div className="container flex bg-white shadow-md rounded-md mt-4">
                <div className="contact-details w-6/12 p-5">
                  <h1  className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Contact</h1>
                  <div className="details space-y-3 mt-4">
                  <Input type="text" placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                  <Input type="text" placeholder="Phone number" />
                  <Textarea placeholder="Type your message here." />
                  <Button>
                    <Send className="mr-2 h-4 w-4" /> Send
                  </Button>
                  </div>
                </div>
                <div className="our-contact w-6/12 p-5">
                  <h1  className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Get In Touch With Us</h1>

                  <div className="our-details space-y-3 mt-4">
                  <p className="text-sm font-medium leading-none"> <Home className="mr-2 h-4 w-4 inline-block"/>KM4, Hoddan</p>
                  <p className="text-sm font-medium leading-none"> <Phone className="mr-2 h-4 w-4 inline-block"/> (+252)6-1718-2497</p>
                  <p className="text-sm font-medium leading-none"> <Mail className="mr-2 h-4 w-4 inline-block"/> maxamedcabdifitaax33@gmail.com</p>
                  <p className="text-sm font-medium leading-none"> <Info className="mr-2 h-4 w-4 inline-block"/> Saturday - Wednesday - 10 AM - 8 PM</p>
                  </div>

                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact