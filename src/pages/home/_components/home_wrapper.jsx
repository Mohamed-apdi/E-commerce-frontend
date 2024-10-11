
import Container from '../../../components/Container';
export const HomeBanners = () => {
  return (
    <div>
        <Container class1="Home-wrapper-1 mx-auto pt-6 md:px-10 pb-4">
          <div className="flex flex-col md:flex-row justify-center md:gap-x-4">
              <div className="w-full md:w-[70%]">
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
              <div className="w-full md:w-[70%]">
                <div className="grid grid-cols-2 gap-4 mt-5 md:mt-0">
                  
                <div  className="small-banner relative">
                  <img className=" max-w-[100%] rounded-md" src="/public/images/catbanner-01.jpg" alt="image" />
                  <div className="small-banner-content absolute top-[15%] left-[5%]">
                    <h4 className=" text-[18PX] font-medium text-red-400">BEST SALE</h4>
                    <h5 className="font-bold text-[17px] py-[6px]">Laptop max</h5>
                    <p className="text-[12px] font-thin">From $1699.00 <br /> or $64.62/mo.</p>
                  </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" className="small-banner relative">
                  <img className=" max-w-[100%] rounded-md" src="/public/images/catbanner-03.jpg" alt="image" />
                  <div className="small-banner-content absolute top-[15%] left-[5%]">
                    <h4 className=" text-[18PX] font-medium text-red-400">NEW ARRIVAL</h4>
                    <h5 className="font-bold text-[17px] py-[6px]">Buy Ipad Air</h5>
                    <p className="text-[12px] font-thin">From $599 or<br /> $49.91/mo. for 12mo.</p>
                  </div>
                </div>

                <div  className="small-banner relative">
                  <img className=" max-w-[100%] rounded-md" src="/public/images/catbanner-02.jpg" alt="image" />
                  <div className="small-banner-content absolute top-[15%] left-[5%]">
                    <h4 className=" text-[18PX] font-medium text-red-400">15% OFF</h4>
                    <h5 className="font-bold text-[17px] py-[6px]">Smartwatch 7</h5>
                    <p className="text-[12px] font-thin">Shop the latest band <br /> Styles and colors</p>
                  </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1500" className="small-banner relative">
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
    </Container>
    </div>
  )
}
