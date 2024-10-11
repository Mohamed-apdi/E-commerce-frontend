import ProductCard from '../../components/ProductCard';
import BlogCard from '../../components/BlogCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import SpecialProducts from '../../components/SpecialProducts';
import Meta from "../../components/Meta"
import {servies} from "../../utils/ServiesData"
import Container from '../../components/Container';
import { HomeBanners } from './_components/home_wrapper';
function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  
  return (
    <>
    <Meta title={"E-commerce"}/>
    <HomeBanners/>

    <Container class1="Home-wrapper-2 p-6">
     <div className="flex md:flex-row justify-center">
          <div className="w-full">
            <div className="servies flex flex-wrap gap-3 items-center md:justify-between md:px-20">
              {servies?.map((item,data) => {
                return (
                  <div key={data} className="flex gap-4 items-center">
                <img className=" w-7 h-7" src={item.icon} alt="servies" />
                <div>
                  <h4 className=" text-sm font-bold">{item.title}</h4>
                  <p className="text-[12px] text-gray-600">{item.tagline}</p>
                </div>
              </div>
                )
              })}
              
            </div>
          </div>
        </div>
    </Container>

    <Container class1="Home-wrapper-2  py-3 ">
      <div className="flex flex-row justify-center">
          <div className="w-full">
            <div data-aos="fade-up" data-aos-duration="1500"
             className="categories hidden  md:flex flex-wrap md:justify-between items-center">
              
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
    </Container>

    <Container>
     <div className="w-full pl-10 mb-[-24px] py-3">
            <h3 className='section-heading text-sm text-slate-800'>Featured Collection</h3>
          </div>
        <div className="flex justify-center md:px-10 pb-5 gap-4" data-aos="fade-up" data-aos-duration="800">
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
        </div>
    </Container>

    
    <Container class1="famous-wrapper Home-wrapper-2 py-5">
      <div className="flex justify-center gap-4">
          <div className="col-3" data-aos="fade-right" data-aos-duration="1500">
            <div className="famous-card bg-black text-white p-4 rounded-sm relative">
            <img src="/public/images/famous-1.png" className='w-[300px] h-[350px] pt-20' alt="img" />
              <div className="famous-content absolute">
              <h5 className='scroll-m-8 text-sm font-think text-gray-400'>BIG SCREEN</h5>
              <h3 className='scroll-m-20 text-xl font-semibold tracking-tight'>Smart Watch Series 7</h3>
              <p className='leading-7 text-xs font-thin text-gray-300'>from $399.45 or $16.25/mo. for 24/mo*</p>
              </div>
            </div> 
          </div>

          <div className="col-3" data-aos="fade-up"  data-aos-duration="1500">
            <div className="famous-card bg-white text-black shadow-sm p-4 rounded-sm relative">
            <img src="/public/images/famous-2.webp" className='w-[300px] h-[350px] pt-20' alt="img" />
              <div className="famous-content absolute">
              <h5 className='scroll-m-8 text-sm font-think text-gray-400'>STUDIO DISPLAY</h5>
              <h3 className='scroll-m-20 text-xl font-semibold tracking-tight'>600 nits of brightness.</h3>
              <p className='leading-7 text-xs font-thin text-gray-500'>27-inch 5k Retina display</p>
              </div>
            </div> 
          </div>

          <div className="col-3" data-aos="fade-up" data-aos-duration="1500">
            <div className="famous-card bg-white text-black shadow-sm p-4 rounded-sm relative">
            <img src="/public/images/famous-3.webp" className='w-[300px] h-[350px] pt-20' alt="img" />
              <div className="famous-content absolute">
              <h5 className='scroll-m-8 text-sm font-think text-gray-400'>SMARTPHONES</h5>
              <h3 className='scroll-m-20 text-xl font-semibold tracking-tight mb-2'>Smartphone 13 pro.</h3>
              <p className='leading-4 text-xs font-thin text-gray-500'>New in Grey. from $999.00 or $41.62/mo. for 24 mo. Footnote*</p>
              </div>
            </div> 
          </div>

          <div className="col-3" data-aos="fade-left" data-aos-duration="1500">
            <div className="famous-card bg-white text-black shadow-sm p-4 rounded-sm relative">
            <img src="/public/images/famous-4.webp" className='w-[300px] h-[350px] pt-20' alt="img" />
              <div className="famous-content absolute">
              <h5 className='scroll-m-8 text-sm font-think text-gray-400'>HOME SPEAKERS</h5>
              <h3 className='scroll-m-20 text-xl font-semibold tracking-tight'>Room-filling sound.</h3>
              <p className='leading-7 text-xs font-thin text-gray-500'>from $699 or $116.58/mo. for 12/mo*</p>
              </div>
            </div> 
          </div>
        </div>
    </Container>

    <Container class1="special-wrapper Home-wrapper-2">
      <div className="container mx-auto">
        <div className="w-full pl-10 mb-[-24px] py-3">
            <h3 className='section-heading text-sm text-slate-800'>Special Products</h3>
          </div>
        <div className="flex justify-center px-10 pb-5 gap-4" data-aos="fade-up" data-aos-duration="800">
          <SpecialProducts/>
          <SpecialProducts/>
          <SpecialProducts/>
        </div>
      </div>
    </Container>
   

    <Container class1="popular-wrapper">
    <div className="w-full pl-10 mb-[-24px] py-3">
            <h3 className='section-heading text-sm text-slate-800'>Our Popular Products</h3>
          </div>
        <div className="flex justify-center px-5 pb-5 gap-4" data-aos="fade-up" data-aos-duration="800">
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
        </div>
    </Container>
    
    <Container class1="p-5">
      <div className="flex flex-row justify-center">
          <div className="w-full">
            <div className="marquee-inner-wrpper">
              <Marquee>
                <div className='mx-8 w-24'>
                  <img src="/public/images/brand-01.png" alt="brand" />
                </div>

                <div className='mx-8 w-24'>
                  <img src="/public/images/brand-02.png" alt="brand" />
                </div>

                <div className='mx-8 w-24'>
                  <img src="/public/images/brand-03.png" alt="brand" />
                </div>

                <div className='mx-8 w-24'>
                  <img src="/public/images/brand-04.png" alt="brand" />
                </div>

                <div className='mx-8 w-24'>
                  <img src="/public/images/brand-05.png" alt="brand" />
                </div>

                <div className='mx-8 w-24'>
                  <img src="/public/images/brand-06.png" alt="brand" />
                </div>
                <div className='mx-8 w-24'>
                  <img src="/public/images/brand-07.png" alt="brand" />
                </div>
                <div className='mx-8 w-24'>
                  <img src="/public/images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
    </Container>

    <Container class1="blog-wrapper">
     <div className="w-full pl-10 mb-[-24px] py-3">
            <h3 className='section-heading text-sm text-slate-800'>Our Latest Blogs</h3>
          </div>
          <div className="flex px-10 pb-5 gap-4" data-aos="fade-up" data-aos-duration="800">
            <div className="w-3/12">
            <BlogCard/>
            </div>
            <div className="w-3/12">
            <BlogCard/>
            </div>
            <div className="w-3/12">
            <BlogCard/>
            </div>
            <div className="w-3/12">
            <BlogCard/>
            </div>
          </div>
    </Container>
    </>
  )
}

export default Home