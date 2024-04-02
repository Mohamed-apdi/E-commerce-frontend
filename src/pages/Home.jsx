import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  
  return (
    <>
    <section className="Home-wrapper-1">
      <div className=" max-w-7xl mx-auto pt-6 px-20 pb-4">
        <div className="flex flex-row justify-center gap-x-4">
        <div className=" max-w-[70%]">
          <div data-aos="fade-right"  data-aos-offset="300"  data-aos-easing="ease-in-sine" className="main-banner  relative">
            <img className=" max-w-[100%] rounded-md" src="/public/images/main-banner.jpg" alt="image" />
            <div className="main-banner-content absolute top-[15%] left-[5%]">
              <h4 className=" font-medium text-red-400">SUPERCHARGED FOR PROS.</h4>
              <h5 className=" font-bold text-3xl py-3">Special Sale</h5>
              <p className=" text-sm font-thin">From $999.00 or $41.62/mo.</p>
              <p className=" text-sm font-thin">for 24 mo. Footnote *</p>
              <button className="main-btn mt-5 text-[12px] px-[20px] py-[6px] rounded-2xl text-white font-thin bg-[#232f3e] transition-all">
                  BUY NOW
                  <span className="arrow-icon"><img className="text-white w-10" src="/public/images/arrow-long-right.svg" alt="" /></span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[70%]">
          <div className="grid grid-cols-2 gap-4 ">
            
          <div data-aos="fade-up" data-aos-duration="1000" className="small-banner relative">
            <img className=" max-w-[100%] rounded-md" src="/public/images/catbanner-01.jpg" alt="image" />
            <div className="small-banner-content absolute top-[15%] left-[5%]">
              <h4 className=" text-[18PX] font-medium text-red-400">BEST SALE</h4>
              <h5 className="font-bold text-[17px] py-[6px]">Laptop max</h5>
              <p className="text-[12px] font-thin">From $1699.00 <br /> or $64.62/mo.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="small-banner relative">
            <img className=" max-w-[100%] rounded-md" src="/public/images/catbanner-03.jpg" alt="image" />
            <div className="small-banner-content absolute top-[15%] left-[5%]">
              <h4 className=" text-[18PX] font-medium text-red-400">NEW ARRIVAL</h4>
              <h5 className="font-bold text-[17px] py-[6px]">Buy Ipad Air</h5>
              <p className="text-[12px] font-thin">From $599 or<br /> $49.91/mo. for 12mo.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="small-banner relative">
            <img className=" max-w-[100%] rounded-md" src="/public/images/catbanner-02.jpg" alt="image" />
            <div className="small-banner-content absolute top-[15%] left-[5%]">
              <h4 className=" text-[18PX] font-medium text-red-400">15% OFF</h4>
              <h5 className="font-bold text-[17px] py-[6px]">Smartwatch 7</h5>
              <p className="text-[12px] font-thin">Shop the latest band <br /> Styles and colors</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="small-banner relative">
            <img className=" max-w-[100%] rounded-md" src="/public/images/catbanner-04.jpg" alt="image" />
            <div className="small-banner-content absolute top-[15%] left-[5%]">
              <h4 className=" text-[18PX] font-medium text-red-400">FREE ENGRAVING</h4>
              <h5 className="font-bold text-[17px] py-[6px]">AirPods Max</h5>
              <p className="text-[12px] font-thin">High-fidelity playback &<br /> ultra-low distortion</p>
            </div>
          </div>

          </div>
        </div>
        </div>
      </div>
    </section>
    <section className="Home-wrapper-2 p-6">
      <div className=" max-w-7xl mx-auto">
        <div className="flex flex-row justify-center">
          <div className="w-full">
            <div className="servies flex items-center justify-between px-20">
              <div className="flex gap-4 items-center">
                <img className=" w-7 h-5" src="/public/images/service.png" alt="servies" />
                <div>
                  <h4 className=" text-sm font-bold">Free Shipping</h4>
                  <p className="text-[12px] text-gray-600">Form all orders over $100</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img className=" w-7 h-6" src="/public/images/service-02.png" alt="servies" />
                <div>
                  <h4 className=" text-sm font-bold">Daily Suprise Offers</h4>
                  <p className="text-[12px] text-gray-600">Save up to 25% off</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img className=" w-7 h-6" src="/public/images/service-03.png" alt="servies" />
                <div>
                  <h4 className=" text-sm font-bold">Support 24/7</h4>
                  <p className="text-[12px] text-gray-600">shop with an expert</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img className=" w-7 h-6" src="/public/images/service-04.png" alt="servies" />
                <div>
                  <h4 className=" text-sm font-bold">Affordable Price</h4>
                  <p className="text-[12px] text-gray-600">Get Factory direct price</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img className=" w-7 h-5" src="/public/images/service-05.png" alt="servies" />
                <div>
                  <h4 className=" text-sm font-bold">Secure Payments</h4>
                  <p className="text-[12px] text-gray-600">100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="Home-wrapper-2  py-3">
      <div className="max-w-7xl mx-auto px-14">
        <div className="flex flex-row justify-center">
          <div className="w-full">
            <div data-aos="fade-up" data-aos-duration="700"
             data-aos-anchor-placement="center-bottom"
             className="categories flex flex-wrap justify-between items-center">
              
              <div className="flex items-center">
                <div>
                  <h6 className='text-[12px] font-bold'>Computers & Laptop</h6>
                  <p className='text-xs text-gray-600'>8 Items</p>
                </div>
                <img className='w-[70px]' src="/public/images/laptop.jpg" alt="" />
              </div>

              <div className="flex items-center">
                <div>
                  <h6 className='text-[12px] font-bold'>Cameras & Video</h6>
                  <p className='text-xs text-gray-600'>10 Items</p>
                </div>
                <img className='w-[70px]' src="/public/images/camera.jpg" alt="" />
              </div>

              <div className="flex items-center">
                <div>
                  <h6 className='text-[12px] font-bold'>Smart Television</h6>
                  <p className='text-xs text-gray-600'>12 Items</p>
                </div>
                <img className='w-[70px]' src="/public/images/tv.jpg" alt="" />
              </div>

              <div className="flex items-center">
                <div>
                  <h6 className='text-[12px] font-bold'>Headphones </h6>
                  <p className='text-xs text-gray-600'>6 Items</p>
                </div>
                <img className='w-[70px]' src="/public/images/headphone.jpg" alt="" />
              </div>

              <div className="flex items-center">
                <div>
                  <h6 className='text-[12px] font-bold'>Smartwatches</h6>
                  <p className='text-xs text-gray-600'>13 Items</p>
                </div>
                <img className='w-[70px]' src="/public/images/smartwatche.png" alt="" />
              </div>

              <div className="flex items-center">
                <div>
                  <h6 className='text-[12px] font-bold'>Music & Gaming</h6>
                  <p className='text-xs text-gray-600'>14 Items</p>
                </div>
                <img className='w-[70px]' src="/public/images/Controll.png" alt="" />
              </div>

              <div className="flex items-center">
                <div>
                  <h6 className='text-[12px] font-bold'>Mobiles & Tablets</h6>
                  <p className='text-xs text-gray-600'>6 Items</p>
                </div>
                <img className='w-[70px]' src="/public/images/phone.png" alt="" />
              </div>

              <div className="flex items-center">
                <div>
                  <h6 className='text-[12px] font-bold'>Portables & Speakers</h6>
                  <p className='text-xs text-gray-600'>8 Items</p>
                </div>
                <img className='w-[70px]' src="/public/images/speaker.jpg" alt="" />
              </div>

              <div className="flex items-center">
                <div>
                  <h6 className='text-[12px] font-bold'>Accessories</h6>
                  <p className='text-xs text-gray-600'>10 Items</p>
                </div>
                <img className='w-[70px]' src="/public/images/acc.jpg" alt="" />
              </div>

              <div className="flex items-center">
                <div>
                  <h6 className='text-[12px] font-bold'>Home Appliances</h6>
                  <p className='text-xs text-gray-600'>6 Items</p>
                </div>
                <img className='w-[70px]' src="/public/images/homeapp.jpg" alt="" />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home