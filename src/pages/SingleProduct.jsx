import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Separator } from "../components/ui/separator"
import { useState, useRef } from 'react';
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { Textarea } from '../components/ui/textarea'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import HoverZoomImage from '../components/HoverZoomImage';
import Color from '../components/Color';
import {  Fence, Heart, Link, Ruler, Truck } from 'lucide-react';
import { IoGitCompare } from "react-icons/io5";
import { Badge } from '../components/ui/badge';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"
  import {CopyToClipboard} from 'react-copy-to-clipboard';
import { NavLink } from 'react-router-dom';
import Container from '../components/Container';

const SingleProduct = () => {
    const [writeReview, setWriteReview] = useState(false);
    const toggleReview = () => {
        setWriteReview(!writeReview);
    };
    
    const [copied, setCopied] = useState(false);
    const productUrl = "http://localhost:5173/product/:id"; // This should be the actual URL of your product

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

  
    
  return (
    <>
    <Meta title="Product Name"/>
    <BreadCrumb title="Product Name"/>
 
    <Container class1="main-product-wrapper py-5 Home-wrapper-2">
        <div className="flex space-x-4">
                <div className="w-6/12 rounded-md">
                    <div className="main-product-image">
                    <div className='image-zoom'>
                    <div className="main-product-image" style={{ width: '100%', height: '300px' }}>
                    <HoverZoomImage src="/public/images/camera-1.jpg" zoomScale={2} transitionSpeed={200} />
                    </div>
                    </div>
                    </div> 
                    <div className="onther-image-product flex flex-wrap gap-2" style={{ width: '100%', height: '400px' }}>
                       <div><HoverZoomImage src="/public/images/camera-1.jpg" zoomScale={2} transitionSpeed={300} /></div>
                       <div><HoverZoomImage src="/public/images/camera-1.jpg" zoomScale={2} transitionSpeed={200} /></div>
                       <div><HoverZoomImage src="/public/images/camera-1.jpg" zoomScale={2} transitionSpeed={200} /></div>
                       <div><HoverZoomImage src="/public/images/camera-1.jpg" zoomScale={2} transitionSpeed={200} /></div>
                       
                    </div>
                </div>
                <div className="w-6/12">
                    <div className="bg-white rounded-md">
                        <div className="product-details p-4">
                            <h2 className="scroll-m-20 border-b pb-2 text-1xl font-semibold tracking-tight first:mt-0">Havels Computers & LaptopComputers & Laptop</h2>
                            <p className="text-md mt-2 text-[#1c1c1b] font-bold">$100</p>
                            <div className='flex mt-2'>
                            <ReactStars
                            count={5}
                            value="4"
                            edit="false"
                            activeColor="#ffd700"
                            /> <label className='text-sm text-muted-foreground'>(3 reviews)</label>
                            </div>
                            <Separator className="mt-2"/>
                            <div className='flex flex-col gap-3 mt-4'>
                            <div className='flex items-center gap-1'>
                                <p className='font-bold'>Type:</p>
                                <p className="break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Hevells</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p className='font-bold'>Brand:</p>
                                <p className="break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Apple</p>
                            </div>

                            <div className='items-center'>
                                <p className='font-bold'>Categories:</p>
                                <ul className='flex flex-wrap space-x-[3px] m-0 p-0'>
                                    <li className="text-[11px] hover:underline text-muted-foreground transition-colors hover:text-foreground cursor-pointer">airPods.</li>
                                    <li className="text-[11px] hover:underline text-muted-foreground transition-colors hover:text-foreground cursor-pointer">camera's.</li>
                                    <li className="text-[11px] hover:underline text-muted-foreground transition-colors hover:text-foreground cursor-pointer">computer & laptops.</li>
                                    <li className="text-[11px] hover:underline text-muted-foreground transition-colors hover:text-foreground cursor-pointer">head phone's.</li>
                                    <li className="text-[11px] hover:underline text-muted-foreground transition-colors hover:text-foreground cursor-pointer">mini & speaker's.</li>
                                    <li className="text-[11px] hover:underline text-muted-foreground transition-colors hover:text-foreground cursor-pointer">our store.</li>
                                    <li className="text-[11px] hover:underline text-muted-foreground transition-colors hover:text-foreground cursor-pointer">protable speaker.</li>
                                    <li className="text-[11px] hover:underline text-muted-foreground transition-colors hover:text-foreground cursor-pointer">smart phone.</li>
                                    <li className="text-[11px] hover:underline text-muted-foreground transition-colors hover:text-foreground cursor-pointer">smart television.</li>
                                    <li className="text-[11px] hover:underline text-muted-foreground transition-colors hover:text-foreground cursor-pointer">smartwatches.</li>
                                </ul>
                            </div>

                            <div className='flex items-center gap-1'>
                                <p className='font-bold'>Tags:</p>
                                <ul className='space-x-2'>
                                    <li className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">headphons</li>
                                    <li className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">headphons</li>
                                    <li className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">headphons</li>
                                    <li className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">headphons</li>
                                </ul>
                            </div>
                            
                            <div className='flex items-center gap-1'>
                                <p className='font-bold'>SKU:</p>
                                <p className="break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer">sku027</p>
                            </div>
                            
                            <div className='flex items-center gap-1'>
                                <p className='font-bold'>Avilability:</p>
                                <p className="break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer">24 in stock</p>
                            </div>

                            <div className='items-center'>
                                <p className='font-bold'>Size:</p>
                                <Badge className="mr-1 hover:shadow-md hover:bg-[#febd69]" variant="outline">S</Badge>
                                <Badge className="mr-1 hover:shadow-md hover:bg-[#febd69]" variant="outline">M</Badge>
                                <Badge className="mr-1 hover:shadow-md hover:bg-[#febd69]" variant="outline">L</Badge>
                                <Badge className="mr-1 hover:shadow-md hover:bg-[#febd69]" variant="outline">XL</Badge>
                                <Badge className="mr-1 hover:shadow-md hover:bg-[#febd69]" variant="outline">XXL</Badge>
                            </div>

                            <div className='items-center'>
                                <p className='font-bold mb-1'>Color:</p>
                                <Color/>
                            </div>

                            <div className='flex flex-col gap-3'>
                               <div className='flex items-center gap-2'>
                               <p className='font-bold'>Quantity:</p>
                                <input className="w-[50px] border p-[2px]" type="number" min={1} max={10} defaultValue="1"/>
                                <button className=" rounded-3xl bg-slate-900 text-white px-[15px] text-sm py-[4px]">ADD TO CART</button>
                                <button className=" rounded-3xl bg-[#febd69] text-black px-[15px] text-sm py-[4px]">BUY IT NOW</button>
                               </div>
                               <div className='flex items-center gap-2'>
                              <label htmlFor="heart"> <Heart/></label>
                                <p id='heart' className="text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Add to wishlist</p>
                                <label htmlFor="compare"><IoGitCompare className="w-10 font-bold"/></label>
                                <p id='compare' className="text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Add to compare</p>
                               </div>
                               <Separator/>
                            </div>

                            <div>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger><p><Truck className=" inline-block mr-[2px] w-4"/> Shipping & Returns</p></AccordionTrigger>
                                        <AccordionContent>
                                        Free shipping and returns available on all orders! we ship all  US domestic order within 5-10 business days!
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger><p><Heart className=" inline-block mr-[2px] w-4"/> Care instructions</p></AccordionTrigger>
                                        <AccordionContent>
                                        Used a soft damp cloth and a drop of mild soap to remove any haze. Air dry.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <p className='items-center mt-3 inline-block mr-1 '><Link className="inline-block mr-[2px] w-4"/>Product:</p>
                                    <CopyToClipboard text={productUrl} onCopy={handleCopy}>
                                        <button className='text-blue-600 hover:underline'>{copied ? "Copied!" : "Copy Link"}</button>
                                    </CopyToClipboard>
                                </Accordion>
                            </div>

                            <div className="payments Home-wrapper-2 py-4 rounded">
                                <h1 className="scroll-m-20 text-xl text-center font-semibold tracking-tight">Payment Methods</h1>
                                <div className='flex gap-3 justify-center items-center'>
                                 <img className='w-10' src="/public/images/payment-1.svg" alt="img" />
                                 <img className='w-8' src="/public/images/payment-2.svg" alt="img" />
                                 <img className='w-10' src="/public/images/payment-4.svg" alt="img" />
                                </div>
                            </div>

                            </div>
                        </div>
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
                        <p className='leading-6 mt-2 text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis ullam consequuntur soluta, rem sunt? Ab nihil quam at doloremque possimus soluta temporibus reprehenderit deleniti? Fugiat obcaecati delectus facilis ipsum.</p>
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
                               <div className="review-trigger">
                                    <button onClick={toggleReview} className="underline text-muted-foreground text-sm">
                                        {writeReview ? "Close review form" : "Write a review"}
                                    </button>
                                </div>

                            </div>
                            <Separator className="my-4"/>
                            {writeReview && ( 
                                <div className="write-review">
                                <Card className="w-full">
                                    <CardHeader>
                                        <CardTitle className=" text-muted-foreground text-lg">write a review</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <form>
                                        <div className="rating">
                                        <h4 className=' text-muted-foreground font-medium text-[14px]'>Rating</h4>
                                        <ReactStars
                                        count={5}
                                        value="0"
                                        edit="true"
                                        activeColor="#ffd700"
                                        size={23}
                                    />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="comment" className='text-muted-foreground'>Body of Review(1500)</Label>
                                        <Textarea id="comment" className=" text-black" type="text"  placeholder="Write your commects here..." />
                                            </div>
                                        </form>
                                    </CardContent>
                                    <CardFooter className="flex justify-between mt-[-13px]">
                                        <Button>Submit Review</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                            )}
                              <div className="flex justify-between items-center gap-2">
                               <div className="flex flex-col px-2 w-10/12">
                               <div className="flex items-center">
                               <p className='text-[14px] font-semibold mr-2'>Mohamed</p>
                               <ReactStars
                                        count={5}
                                        value="4"
                                        edit="false"
                                        activeColor="#ffd700"
                                        size={20}
                                    />
                                </div>
                                <p className='text-muted-foreground text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquam nesciunt ratione, praesentium adipisci, repudiandae odit assumenda, placeat tenetur pariatur dolore in!</p>
                               </div>
                               <h4 className='underline text-muted-foreground text-sm cursor-pointer'>report as inapproprite</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* onther products  */}
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
    </Container>
    </>
  )
}

export default SingleProduct