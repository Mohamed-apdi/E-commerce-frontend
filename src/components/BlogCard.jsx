import { Link } from "react-router-dom"

function BlogCard() {
  return (
    <>
    <div className="w-full gap-4 ">
         <div className="blog-card shadow-md">
            <div className="card-img">
                <img className="w-full object-cover" src="/public/images/blog--1.jpg" alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">11 JUNE 2024</p>
                <h4 className="title">Samsung Gadgets to Expect in 2024: Galaxy Ring, Galaxy Z Flip 6 and More</h4>
                <p className="desc">Samsung has already launched the Galaxy S24, but it could have way more in store for the rest of the year.</p>
                <Link to="/blog/:id" className="main-btn mt-3 text-[12px] px-[20px] py-[6px] rounded-2xl text-white font-thin bg-[#232f3e] transition-all">
                    Read More
                    <span className="arrow-icon"><img className="text-white w-10" src="/public/images/arrow-long-right.svg" alt="" /></span>
                </Link>
            </div>
         </div>   
    </div>


    </>
  )
}

export default BlogCard