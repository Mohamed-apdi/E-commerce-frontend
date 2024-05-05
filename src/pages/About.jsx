import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { BsPinterest, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

function About() {
  return (
    <>
      <Meta title="About Us"/>
      <BreadCrumb title="About Us"/>

      <div className="refund-wrapper py-5 Home-wrapper-2">
          <div className="container">
          <div className="w-8/12 mx-auto">
          <h1 className="scroll-m-20 text-2xl mb-5 text-center font-semibold tracking-tight">About Us</h1>
          <div className="flex flex-col gap-5">
          <div className="">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">About Themoh</h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6">Welcome to Themoh! We are dedicated to providing high-quality products and exceptional customer service to shoppers from around the world. Our mission is to offer an unparalleled shopping experience that exceeds our customers' expectations.</p>
          </div>

          <div className="">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Our Story</h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6">Themoh was founded with a simple yet ambitious goal: to create an online destination where customers can discover a wide range of products that inspire and enrich their lives. Our journey began 2023 when Mohamed Apdifitah started selling products from his garage. Since then, we have grown into a thriving e-commerce platform with a global customer base.</p>
          </div>

          <div className="">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Our Values</h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6">At themoh, we are guided by a set of core values that shape everything we do:</p>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                      <li><span className=' font-bold'>Quality:</span> We are committed to offering only the highest quality products sourced from trusted suppliers and manufacturers.</li>
                      <li><span className=' font-bold'>Integrity:</span> We believe in honesty, transparency, and ethical business practices in all aspects of our operations.</li>
                      <li><span className=' font-bold'>Innovation:</span> We embrace innovation and continuously seek new ways to enhance our products, services, and customer experience.</li>
                      <li><span className=' font-bold'>Customer Satisfaction:</span> We prioritize customer satisfaction above all else and strive to exceed our customers' expectations with every interaction.</li>
                  </ul>
          </div>

          <div className="">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Our Products</h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6">Explore our curated selection of products across various categories, including 6. From fashion and beauty to home decor and electronics, we offer something for everyone. Whether you're shopping for yourself or searching for the perfect gift, you'll find it at themoh.</p>
              
          </div>
          <div className="">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Why Choose Us?</h4>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                      <li><span className=' font-bold'>Wide Selection: </span> We offer a diverse range of products to suit every style, budget, and occasion.</li>
                      <li><span className=' font-bold'>Convenience: </span> Shop from the comfort of your home and enjoy hassle-free shopping with secure payment options and fast shipping.</li>
                      <li><span className=' font-bold'>Exceptional Customer Service: </span> Our dedicated team is here to assist you every step of the way, from product inquiries to after-sales support.</li>
                      <li><span className=' font-bold'>Quality Guarantee:</span> We stand behind the quality of our products and offer a satisfaction guarantee on every purchase.</li>
                  </ul>
          </div>
          <div className="">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Contact Us</h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6">Follow us on social media and subscribe to our newsletter to stay updated on the latest products, promotions, and exclusive offers.</p>
              <div className="social-icons flex gap-4">
                                  <FaFacebook/>
                                  <BsTwitterX/>
                                  <BsPinterest/>
                              </div>
              <p className="leading-7 [&:not(:first-child)]:mt-6">Thank you for choosing Themoh. We look forward to serving you and exceeding your expectations!</p>
          </div>
          </div>
          </div>
          </div>
      </div>
   </>
  )
}

export default About