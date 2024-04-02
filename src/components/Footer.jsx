import { FaFacebook,FaInstagram,FaLinkedin,FaYoutube  } from "react-icons/fa";
import { Link } from "react-router-dom"


function Footer() {
  return (
   <>
   <footer className="py-5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-row justify-around">
      <div className="">
        <div className="footer-top flex gap-4 items-center">
        <img className=" w-[20px]" src="/public/images/newsletter.png" alt="news-latter" />
        <h2 className="mb-0 latter-p-img font-bold text-2xl">Sign up for news latter</h2>
        </div>
      </div>
      <div className=" w-2/5">
        <div className="relative ">
        <input className="focus:outline-none w-full py-2 rounded-md px-2 text-black" type="email" placeholder="Enter your email" />
        <button type="submit" className="text-white absolute right-[2px] top-[3px] bottom-[3px] input-btn focus:outline-none font-medium rounded-md text-sm px-4 ">Subscribe</button>
        </div>
      </div>
      </div>
    </div>
   </footer>
   <footer className="py-7">
    <div className=" max-w-7xl mx-auto">
      <div className="flex flex-row justify-center mx-10">
        <div className=" w-4/5">
          <h4 className="mb-4 font-bold">Contact Us</h4>
          <div>
            <address>
              BN: 000 Near KM4, Hoddan <br />
              Mogadishu - Somalia
              <br />
              Postcode: 00000
              </address>
              <a href="tel:+252 617182497">+252 617182497</a>
              <br />
              <a href="mailto:maxamedcabdifitaax33@gmail.com">maxamedcabdifitaax33@gmail.com</a>
           
            <div className="flex gap-3 mt-2">
              <a href="#"> <FaFacebook className=" text-3xl" /></a>
              <a href="#"> <FaInstagram className=" text-3xl" /></a>
              <a href="#"> <FaLinkedin className=" text-3xl" /></a>
              <a href="#"> <FaYoutube className=" text-3xl" /></a>
            </div>
          </div>
        </div>
        <div className=" w-3/5">
          <h4 className="mb-4 font-bold">Information</h4>
          <div>
            <ul>
            <li><Link className=" hover:underline text-[14px]">Privacy Policy</Link></li>
            <li><Link className=" hover:underline text-[14px]">Refund Policy</Link></li>
            <li><Link className=" hover:underline text-[14px]">Shipping Policy</Link></li>
            <li><Link className=" hover:underline text-[14px]">Terms & Conditions</Link></li>
            <li><Link className=" hover:underline text-[14px]">Blogs</Link></li>
            </ul>
          </div>
        </div>
        <div className=" w-3/5">
          <h4 className="mb-4 font-bold">Account</h4>
          <div>
            <ul>
            <li><Link className=" hover:underline text-[14px]">About Us</Link></li>
            <li><Link className=" hover:underline text-[14px]">FAQ</Link></li>
            <li><Link className=" hover:underline text-[14px]">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className=" w-4/5">
          <h4 className="mb-4 font-bold">Quick Links</h4>
          <div>
            <ul>
            <li><Link className=" hover:underline text-[14px]">Laptops</Link></li>
            <li><Link className=" hover:underline text-[14px]">Mobiles</Link></li>
            <li><Link className=" hover:underline text-[14px]">Headphones</Link></li>
            <li><Link className=" hover:underline text-[14px]">Tablets</Link></li>
            <li><Link className=" hover:underline text-[14px]">Smart Watches</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </footer>
   <footer className="py-4">
    <div className="max-w-7xl mx-auto">
    <div className="flex flex-row">
      <div className=" w-full">
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Powered by codewithmoha
          </p>
      </div>
    </div>
    </div>
   </footer>
   </>
  )
}

export default Footer
