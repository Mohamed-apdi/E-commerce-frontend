import React from 'react'
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import BlogCard from '../components/BlogCard'
import Container from '../components/Container'
function Blog() {
  return (
    <>
    <Meta title={"Blogs"}/>
    <BreadCrumb title="Blogs"/>
    <Container class1="blog-wrapper Home-wrapper-2 py-5">
    <div className="flex gap-4">
                {/* side-bar blog  */}
                <div className="w-3/12">
                    <div className="filter-card mb-3 shadow-md">
                        <h3 className="scroll-m-20 text-1xl font-semibold tracking-tight">
                        Find By Categories
                        </h3>
                        <div>
                        <ul className="my-6 ml-6 [&>li]:mt-2">
                            <li className="break-words text-sm w-16 text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Watch</li>
                            <li className="break-words text-sm w-16 text-muted-foreground transition-colors hover:text-foreground cursor-pointer">TV</li>
                            <li className="break-words text-sm w-16 text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Camera</li>
                            <li className="break-words text-sm w-16 text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Laptop</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                <div className="w-9/12">
                    <div className="grid grid-cols-2 gap-4 justify-around">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default Blog