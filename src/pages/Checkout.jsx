import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "../components/ui/breadcrumb"
import { Link } from 'react-router-dom'
import { MoveLeft } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import Container from '../components/Container'
function Checkout() {
  return (
    <>
    <Container>
        <div className="flex mx-auto justify-center gap-4">
                    <div className="w-6/12 p-10 pl-24 text-start">
                        <div className="checkout-data-left">
                            <h3 className='py-5 text-xl font-bold'>Themoh</h3>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                    <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                    <BreadcrumbPage>Information</BreadcrumbPage>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                    <BreadcrumbLink href="/shipping">Shipping</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                    <BreadcrumbLink href="/payment">Payment</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <div className='info-details py-4'>
                            <h4 className=' text-gray-600'>Contact Information</h4>
                            <p className="user-details my-1 text-muted-foreground text-sm">Mahdi jacar (mahdijacar@gmail.com)</p>
                            <div className="shipping-address">
                            <h4 className='scroll-m-20 text-xl font-semibold tracking-tight my-3'>Shipping address</h4>
                             <form action="" className='flex gap-4 flex-wrap justify-between '>
                            
                                <div className="w-full">
                                    <select name="" className='h-10 w-full items-center justify-between rounded-md border border-input  px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'>
                                        <option selected disabled hidden >Select Country</option>
                                        <option className='py-5'  value=""> Country</option>
                                        <option className='py-5'  value=""> Country</option>
                                        <option className='py-5'  value=""> Country</option>
                                        <option className='py-5'  value=""> Country</option>
                                    </select>
                                </div>
                                <div className="flex-grow">
                                    <input className='h-10 w-full items-center justify-between rounded-md border border-input  px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1' type="text" placeholder='first name'  />
                                </div>
                                <div className="flex-grow">
                                    <input className='h-10 w-full items-center justify-between rounded-md border border-input  px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1' type="text" placeholder='last name'  />
                                </div>
                                <div className="w-full">
                                    <input type="text" name="" id=""  placeholder='address' className='h-10 w-full items-center justify-between rounded-md border border-input  px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'/>
                                </div>
                                <div className="w-full">
                                    <input type="text" name="" id=""  placeholder='Apartment, Suite ,etc' className='h-10 w-full items-center justify-between rounded-md border border-input  px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'/>
                                </div>
                                <div className="flex gap-x-3">
                                <div className="flex-grow">
                                    <input className='h-10 w-full items-center justify-between rounded-md border border-input  px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1' type="text" placeholder='City'  />
                                </div>
                                <div className="flex-grow w-60">
                                <select className='h-10 w-full items-center justify-between rounded-md border border-input  px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'>
                                        <option selected disabled hidden>Select State</option>
                                        <option value=""> Country</option>
                                        <option value=""> Country</option>
                                        <option value=""> Country</option>
                                        <option value=""> Country</option>
                                    </select>
                                </div>
                                <div className="flex-grow">
                                    <input className='h-10 w-full items-center justify-between rounded-md border border-input  px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1' type="text" placeholder='Zipcode'  />
                                </div>
                                </div>
                             </form>
                             <div className="flex justify-between mt-5">
                                <Link  className="text-sm font-semibold hover:underline"><MoveLeft className="w-5 inline-block"/> Return to Cart</Link>
                                <Link to="/shipping" className="rounded-3xl h-10 bg-red-600 hover:bg-red-600/85 text-white py-2 px-10 ">Continue to Shopping</Link>
                             </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 pt-20 px-16 border-[2px] h-screen Home-wrapper-2">
                        <div className="flex flex-col gap-3">
                            <div className="product flex gap-4 items-center">
                                <div className="img relative">
                                    <img className='w-[60px] border rounded' src="/public/images/tab.jpg" alt="" />
                                    <Badge className="mx-auto px-1 py-0 absolute top-[-5px] right-[-5px] text-center items-center text-[10px]">1</Badge>
                                </div>
                                <div>
                                <h4 className='text-gray-700 text-sm className="scroll-m-20 font-semibold tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                    <p className='text-muted-foreground text-[11px] font-medium'>M / #A5DC8S</p>
                                </div>
                                <p className='text-sm ml-4 text-gray-700'>$100.00</p>
                            </div>
                            <div className="product flex gap-4 items-center">
                                <div className="img relative">
                                    <img className='w-[60px] border rounded' src="/public/images/headphone.jpg" alt="" />
                                    <Badge className="mx-auto px-1 py-0 absolute top-[-5px] right-[-5px] text-center items-center text-[10px]">1</Badge>
                                </div>
                                <div>
                                <h4 className='text-gray-700 text-sm className="scroll-m-20 font-semibold tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                    <p className='text-muted-foreground text-[11px] font-medium'>M / #A5DC8S</p>
                                </div>
                                <p className='text-sm ml-4 text-gray-700'>$100.00</p>
                            </div>
                        </div>
                        <Separator className="my-3 p-[0.7px]"/>
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className='text-sm text-muted-foreground'>Subtotal</h4>
                                <h4 className='text-sm text-muted-foreground mt-2'>Shipping</h4>
                            </div>
                            <div>
                                <h4 className=' text-sm font-medium text-gray-700'>$146.00</h4>
                                <h4 className=' text-sm font-medium mt-2 text-gray-700'>$19.24</h4>
                            </div>
                        </div>
                        <Separator className="my-2 p-[0.7px]"/>
                        <div className='flex justify-between items-center'>
                                <h4 className='text-[16px] font-semibold '>Total</h4>
                                <h4 className='text-xl'><span className='text-[12px] text-muted-foreground'>USD</span> $214.29</h4>
                            </div>
                    </div>
                </div>
    </Container>
    </>
  )
}

export default Checkout