import {  Link } from 'react-router-dom'
import {BsSearch} from "react-icons/bs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import {
  CirclePlus,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import { FaCaretDown } from "react-icons/fa";

function Header() {
  return (
   <>
   <header className="header-top-strip py-2">
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-row justify-between px-4'>
          <div>
            <p className=' text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
          </div>
          <div>
          <p className=' text-end text-white mb-0'>Hotline: <a href="tel:+252 617182497">+252 617182497</a></p>
          </div>
        </div>
      </div>
   </header>
   <header className="header-upper ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-around items-center">
          <div className=" items-center text-center">
            <h2 className='text-xl text-white font-bold'>
              <img className='w-[30px] inline-block mr-2' src="/public/images/logo-22.png" alt="" />
              <Link>Themoh</Link>
            </h2>
          </div>
          <div className=" text-white flex  w-full max-w-sm items-center py-2">
          <input className=" rounded-tr-none rounded-br-none text-black w-full py-2 focus:outline-none rounded-sm px-2" type="text" placeholder="Search product here..." />
          <span className="hover:bg-[#febd69] p-3 rounded-sm input-group-text rounded-tl-none rounded-bl-none" type="submit"><BsSearch className='text-black'/></span>
          </div>
          <div className="header-upper-links text-white flex items-center justify-between gap-4">
            <div>
              <Link to="/compare-product" className='flex items-center gap-[10px]'>
              <img src="/public/images/compare.svg" alt="Compare" />
              <p className='text-xs'>Compare <br /> Products</p>
              </Link>
            </div>
            <div>
              <Link to="/wishlist" className='flex items-center gap-[10px]'>
              <img src="/public/images/hearts.svg" alt="Wishlist" />
              <p className='text-xs'>Favourite <br /> Wishlist</p>
              </Link>
            </div>
            <div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Link  className='flex items-center gap-[10px]'>
                  <img src="/public/images/users.svg" alt="Login" /> 
                  <p className='text-xs'>Login <br /> My Account</p>
                </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-2056 mt-3 transition-all">
                  <DropdownMenuGroup>
                    <Link to="/login" className="w-full">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <Link to="/login">Login</Link>
                    </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
             
            </div>
            <div>
              <Link to="/cart" className='flex items-center gap-[10px]'>
              <img src="/public/images/cart-bag.svg" alt="Cart" />
              <div className='flex flex-col gap-1'>
                <span className='inline-flex items-center justify-center px-2 py-0.5 rounded-sm text-xs font-medium bg-white text-gray-800'>
                0
                </span>
                <p className='mb-0'>$ 500</p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
   </header>
   <header className="header-bottom px-3 py-2">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-row">
        <div className="w-full">
          <div className="menu-bottom flex items-center">
            <div className='dropdown'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="btn-menu px-10 items-center rounded-none focus:outline-none bg-transparent border-spacing-0 flex gap-6 me-5">Shop Category <FaCaretDown/></button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56  mt-2">
              <DropdownMenuLabel>All Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Laptop
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Watch
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Mobile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Tablet
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Speaker
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    TV
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
            <div className='menu-links'>
              <div className="flex items-center gap-5">
                <Link to="">Home</Link>
                <Link to="/product">Our Store</Link>
                <Link to="/blog">Blogs</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </header>
   </>
  )
}

export default Header