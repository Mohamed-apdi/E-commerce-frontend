import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import React from 'react'

function Wishlist() {
  return (
    <>
    <Meta title={"Wishlist"}/>
    <BreadCrumb title="Wishlist"/>
    <div className="wishlist-wrapper Home-wrapper-2 py-5">
      <div className="container">
        <div className="grid grid-cols-4 gap-4">

        <div className="col-span-1 ">
          <div className="compare-product-card relative ">
            <img src="/public/images/cross.svg" className='absolute w-8 h-8 border-transparent text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none top-3 cross-btn cursor-pointer right-4' alt="cross" />
            <div className="product-card-image ">
              <img  src="/public/images/watch.jpg" alt="camera" />
            </div>
          </div>
            <div className="compare-product-details ml-4 mt-2">
              <h5 className="scroll-m-20 hover:underline cursor-pointer text-md font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
              <h5 className="text-md font-semibold mt-3">$100.00</h5>
          </div>    
        </div>

        <div className="col-span-1 ">
          <div className="compare-product-card relative ">
            <img src="/public/images/cross.svg" className='absolute w-8 h-8 border-transparent text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none top-3 cross-btn cursor-pointer right-4' alt="cross" />
            <div className="product-card-image ">
              <img  src="/public/images/watch.jpg" alt="camera" />
            </div>
          </div>
            <div className="compare-product-details ml-4 mt-2">
              <h5 className="scroll-m-20 hover:underline cursor-pointer text-md font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
              <h5 className="text-md font-semibold mt-3">$100.00</h5>
          </div>    
        </div>

        <div className="col-span-1 ">
          <div className="compare-product-card relative ">
            <img src="/public/images/cross.svg" className='absolute w-8 h-8 border-transparent text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none top-3 cross-btn cursor-pointer right-4' alt="cross" />
            <div className="product-card-image ">
              <img  src="/public/images/watch.jpg" alt="camera" />
            </div>
          </div>
            <div className="compare-product-details ml-4 mt-2">
              <h5 className="scroll-m-20 hover:underline cursor-pointer text-md font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
              <h5 className="text-md font-semibold mt-3">$100.00</h5>
          </div>    
        </div>

        <div className="col-span-1 ">
          <div className="compare-product-card relative ">
            <img src="/public/images/cross.svg" className='absolute w-8 h-8 border-transparent text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none top-3 cross-btn cursor-pointer right-4' alt="cross" />
            <div className="product-card-image ">
              <img  src="/public/images/watch.jpg" alt="camera" />
            </div>
          </div>
            <div className="compare-product-details ml-4 mt-2">
              <h5 className="scroll-m-20 hover:underline cursor-pointer text-md font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
              <h5 className="text-md font-semibold mt-3">$100.00</h5>
          </div>    
        </div>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default Wishlist