
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu"
import {BsSearch} from "react-icons/bs"
import {
    Menu,
  User,
} from "lucide-react"
export const HeaderUpper = () => {
  return (
    <div>
        <header className="bg-slate-950">
                <div className="md:max-w-7xl md:mx-auto">
                    <div className="flex flex-row justify-around items-center">
                    <div className=" items-center text-center">
                        <h2 className='text-xl text-white font-bold md:flex'>
                        <img className='w-[30px] inline-block mr-2' src="/public/images/logo-22.png" alt="" />
                        <Link className='hidden md:flex'>Themoh</Link>
                        </h2>
                    </div>
                    <div className=" text-white flex w-[300px] md:w-full md:max-w-sm items-center py-2">
                        <input className=" rounded-tr-none rounded-br-none text-black w-full py-2 focus:outline-none rounded-sm px-2" type="text" placeholder="Search product here..." />
                    <span className="hover:bg-[#febd69] p-3 rounded-sm input-group-text rounded-tl-none rounded-bl-none" type="submit"><BsSearch className='text-black'/></span>
                    </div>

                    {/* links header upper  */}
                    <div className="header-upper-links hidden md:flex text-white items-center justify-between gap-4">
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

                    <div className='flex md:hidden'>
                        <Menu className='text-white text-xl'/>
                    </div>
                    </div>
                </div>
    </header>
    </div>
  )
}
