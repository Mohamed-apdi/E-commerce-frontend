import { Button } from "./ui/button"
import { Input } from "./ui/input"

function Footer() {
  return (
   <>
   <footer className="py-3">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-row">
      <div className=" w-2/5">
        <div className="footer-top flex gap-28 items-center">
        <img src="/public/images/newsletter.png" alt="news-latter" />
        <h2 className="mb-0">Sign up for news latter</h2>
        </div>
      </div>
      <div className="w-5/12">
        <div className="input relative ">
        <Input className=" focus:outline-none" type="email" placeholder="Email" />
        <Button type="submit" className="text-white absolute right-0 top-0  bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</Button>
        </div>
      </div>
      </div>
    </div>
   </footer>
   <footer className="py-3"></footer>
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
