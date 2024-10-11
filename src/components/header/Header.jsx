
import { HeaderBottom } from './_components/bottom';
import { HeaderUpper } from './_components/upper';

function Header() {
  return (
   <>
   {/* this section is responsive  */}
   <header className="header-top-strip py-2">
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-row justify-between px-4'>
          <div>
            <p className=' text-white mb-0 text-xs md:text-lg'>Free Shipping Over $100 & Free Returns</p>
          </div>
          <div>
          <p className=' text-end text-white mb-0 text-xs md:text-lg'>Hotline: <a href="tel:+252 617182497">+252 617182497</a></p>
          </div>
        </div>
      </div>
   </header>

    <HeaderUpper/>
    <HeaderBottom/>
   
   </>
  )
}

export default Header