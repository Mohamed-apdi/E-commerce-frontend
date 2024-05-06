import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Separator } from "../components/ui/separator"

function SingleProduct() {
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
                               <div className="flex flex-col">
                                <h4>Customer Review</h4>
                                <div className="flex items-center">
                                <ReactStars
                                        count={5}
                                        value="4"
                                        edit="false"
                                        activeColor="#ffd700"
                                        classNames="custom-stars"
                                    />
                                    <span className='text-muted-foreground ml-1 text-sm'>Based on 3 reviews</span>
                                </div>
                               </div>
                               <h4 className='underline text-muted-foreground text-sm'>write a review</h4>
                            </div>
                            <Separator className="my-4"/>
                            <div className="flex justify-between items-center gap-3">
                               <div className="flex flex-col">
                               <ReactStars
                                        count={5}
                                        value="4"
                                        edit="false"
                                        activeColor="#ffd700"
                                        classNames="custom-stars"
                                    />
                                <div className="flex flex-col">
                                <p className='text-[14px] font-semibold '>Good</p>
                                   <p className='text-[14px] font-semibold '><span>admin</span> <span className=' text-muted-foreground'>on</span> <span>Aug 29,2023</span></p>
                                </div>
                                <span className='text-muted-foreground text-sm'>jacar kumar</span>
                               </div>
                               <h4 className='underline text-muted-foreground text-sm'>report as inapproprite</h4>
                            </div>
                            <Separator className="my-4"/>
                            <div className="flex justify-between items-center gap-3">
                               <div className="flex flex-col">
                               <ReactStars
                                        count={5}
                                        value="4"
                                        edit="false"
                                        activeColor="#ffd700"
                                        classNames="custom-stars"
                                    />
                                <div className="flex flex-col">
                                <p className='text-[14px] font-semibold '>Good</p>
                                   <p className='text-[14px] font-semibold '><span>admin</span> <span className=' text-muted-foreground'>on</span> <span>Aug 29,2023</span></p>
                                </div>
                                <span className='text-muted-foreground text-sm'>jacar kumar</span>
                               </div>
                               <h4 className='underline text-muted-foreground text-sm'>report as inapproprite</h4>
                            </div>
                            <Separator className="my-4"/>
                            <div className="flex justify-between items-center gap-3">
                               <div className="flex flex-col">
                               <ReactStars
                                        count={5}
                                        value="4"
                                        edit="false"
                                        activeColor="#ffd700"
                                        classNames="custom-stars"
                                    />
                                <div className="flex flex-col">
                                <p className='text-[14px] font-semibold '>Good</p>
                                   <p className='text-[14px] font-semibold '><span>admin</span> <span className=' text-muted-foreground'>on</span> <span>Aug 29,2023</span></p>
                                </div>
                                <span className='text-muted-foreground text-sm'>jacar kumar</span>
                               </div>
                               <h4 className='underline text-muted-foreground text-sm'>report as inapproprite</h4>
                            </div>
                            <Separator className="my-4"/>
                            
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