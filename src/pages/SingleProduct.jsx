import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Separator } from "../components/ui/separator"
import { useState } from 'react';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from '../components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import ProductCard from '../components/ProductCard';
function SingleProduct() {
    const [writeReview, setWriteReview] = useState(true);
  return (
    <>
    <Meta title="Product Name"/>
    <BreadCrumb title="Product Name"/>
    <div className="main-product-wrapper py-5 Home-wrapper-2">
        <div className="container">
            <div className="flex">
                <div className="w-6/12">
                    <div className="big-img">

                    </div>
                </div>
                <div className="w-6/12">

                </div>
            </div>
        </div>
        {/* description */}
        <div className="description-wrapper py-5 Home-wrapper-2">
            <div className="container">
                <div className="flex">
                    <div className="w-full">
                       <div className='bg-white p-3 rounded-sm'>
                       <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Description</h4>
                        <p className='leading-6 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis ullam consequuntur soluta, rem sunt? Ab nihil quam at doloremque possimus soluta temporibus reprehenderit deleniti? Fugiat obcaecati delectus facilis ipsum.</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Review  */}
        <div className="review-wrapper py-5 Home-wrapper-2">
            <div className="container">
                <div className="flex">
                    <div className="w-full">
                        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">Reviews</h1>
                        <div className="bg-white rounded-md p-5">
                            <div className="flex justify-between items-center gap-3">
                               <div className="flex flex-col gap-2">
                                <h4>Customer Review</h4>
                                <div className="flex items-center">
                                <ReactStars
                                        count={5}
                                        value="4"
                                        edit="false"
                                        activeColor="#ffd700"
                                        size={17}
                                    />
                                    <span className='text-muted-foreground ml-1 text-sm'>Based on 3 reviews</span>
                                </div>
                               </div>
                              {writeReview && (
                                <div>
                                    <a href="#" className='underline text-muted-foreground text-sm'>write a review</a>
                                </div>
                              )}
                            </div>
                            <Separator className="my-4"/>
                            <div className="write-review hidden">
                                <Card className="w-full">
                                    <CardHeader>
                                        <CardTitle className=" text-muted-foreground">Write A Review</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <form className=' space-y-4'>
                                        <div className="flex w-full items-center">
                                            <div className="w-full">
                                            <Label htmlFor="name" className='text-muted-foreground'>Name</Label>
                                            <Input id="name" className=" text-black" placeholder="Enter Your Name" />
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center">
                                            <div className="w-full">
                                            <Label htmlFor="email" className='text-muted-foreground'>Email</Label>
                                            <Input id="email" type="email" className=" text-black" placeholder="example@example.com" />
                                            </div>
                                        </div>
                                        <div className="rating">
                                        <h4 className=' text-muted-foreground font-medium text-[15px]'>Rating</h4>
                                        <ReactStars
                                        count={5}
                                        value="0"
                                        edit="true"
                                        activeColor="#ffd700"
                                        size={23}
                                    />
                                        </div>
                                        <div className="flex w-full items-center">
                                            <div className="w-full">
                                            <Label htmlFor="review" className='text-muted-foreground'>Rating Title</Label>
                                            <Input id="review" type="email" className=" text-black" placeholder="Give your review a title" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="comment" className='text-muted-foreground'>Body of Review(1500)</Label>
                                        <Textarea id="comment" className=" text-black" type="text"  placeholder="Write your commects here..." />
                                            </div>
                                        </form>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button>Submit Review</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                              <div className="flex justify-between items-center gap-3">
                               <div className="flex flex-col">
                               <ReactStars
                                        count={5}
                                        value="4"
                                        edit="false"
                                        activeColor="#ffd700"
                                        size={22}
                                    />
                                <div className="flex flex-col">
                                <p className='text-[14px] font-semibold '>Good</p>
                                   <p className='text-[14px] font-semibold '><span>admin</span> <span className=' text-muted-foreground'>on</span> <span>Aug 29,2023</span></p>
                                </div>
                                <span className='text-muted-foreground text-sm'>jacar kumar</span>
                               </div>
                               <h4 className='underline text-muted-foreground text-sm cursor-pointer'>report as inapproprite</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="similar-wrapper py-5 Home-wrapper-2">
            <div className="container">
                <div className="flex">
                    <div className="w-full">
                     <h1 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">You May Also Like</h1>
                        <div className="flex gap-3  bg-white p-3 rounded-sm">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SingleProduct