import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { BsPinterest, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from '../components/ui/textarea'
import Container from '../components/Container'
function SingleBlog() {
  return (
    <>

    <Meta title="Dynamic blog name"/>
    <BreadCrumb title="Dynamic blog name"/>
    
    <Container class1="blog-wrapper Home-wrapper-2 py-5">
        <div className="flex gap-4">
                <div className="w-full">
                    <div className="single-blog-card mx-auto w-8/12">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">A Beautiful Sunday Morning Renaissance</h3>
                        <img src="/public/images/blog--1.jpg" alt="" />
                        <p className="leading-7 [&:not(:first-child)]:mt-3 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus illum est molestias totam cum voluptate praesentium tenetur possimus ad? Veritatis eos cumque assumenda. Natus illum est molestias totam cum voluptate praesentium tenetur possimus ad? Veritatis eos cumque assumenda. Natus illum est molestias totam cum voluptate praesentium tenetur possimus ad? Veritatis eos cumque assumenda.</p>
                        <div className='flex gap-4 mt-5'>
                        <p className='text-[#777777] text-sm'>11 Jun 2024</p>
                        <p className='text-[#777777] text-sm'>maxamed</p>
                        </div>
                        <div className="actions flex justify-between mt-5">
                            <Link to="/blog" className="text-sm hover:underline"><ArrowLeft className=" inline-block h-4 w-5"/> Back to blog</Link>
                            <div className="social-icons flex gap-4">
                                <FaFacebook/>
                                <BsTwitterX/>
                                <BsPinterest/>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className=" text-muted-foreground">Leave A Commect</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className=' space-y-4'>
                                <div className="flex w-full items-center gap-4">
                                    <div className="w-full">
                                    <Input className="bg-[#e1e1e1] text-black" placeholder="Name*" />
                                    </div>
                                    <div className="w-full">
                                    <Input className="bg-[#e1e1e1] text-black" type="email"  placeholder="Email*" />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Textarea className="bg-[#e1e1e1] text-black" type="text"  placeholder="Comment*" />
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button>Post Comment</Button>
                            </CardFooter>
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
    </Container>

    </>
  )
}

export default SingleBlog