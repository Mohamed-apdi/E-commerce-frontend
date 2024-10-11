import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu"
import { DropdownMenuLabel, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import { FaCaretDown } from 'react-icons/fa'


export const HeaderBottom = () => {
  return (
    <div>
        <header className="header-bottom px-3 py-2">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-row">
        <div className="w-full">
          <div className="flex items-center">
            <div className='dropdown w-[200px] md:w-[300px] '>
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
            <div className='text-white text-xs md:text-xl '>
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
    </div>
  )
}
