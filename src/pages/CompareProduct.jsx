import React from 'react'
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Separator } from '../components/ui/separator'
import Color from '../components/Color'
import Container from '../components/Container'
function CompareProduct() {
  return (
    <>
    <Meta title={"Compare"}/>
    <BreadCrumb title="Compare"/>
    <Container class1="compare-product-wrapper py-5 Home-wrapper-2">
        <div className="grid grid-cols-4 gap-3">
                <div className="col-span-1 ">
                    <div className="compare-product-card relative ">
                            <img src="/public/images/cross.svg" className='absolute w-8 h-8 border-transparent text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none top-3 cross-btn cursor-pointer right-4' alt="cross" />
                        <div className="product-card-image ">
                            <img  src="/public/images/watch.jpg" alt="camera" />
                        </div>
                        </div>
                    <div className="compare-product-details Home-wrapper-2 ml-5 mt-2">
                        <h5 className="scroll-m-20 hover:underline cursor-pointer text-md font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
                        <h5 className="text-md font-semibold mt-3">$100.00</h5>
                        <Separator className="mb-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Brand:</h5>
                            <p  className="break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Hevells</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Type:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Tablet Computers</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">SKU:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">SKU033</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Avilability:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">In Stock</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Color:</h5>
                            <Color/>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Size:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
                            <ul className='flex gap-2'>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>S</li>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>M</li>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>L</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    
                 
                </div>
                <div className="col-span-1 ">
                    <div className="compare-product-card relative ">
                            <img src="/public/images/cross.svg" className='absolute w-8 h-8 border-transparent text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none top-3 cross-btn cursor-pointer right-4' alt="cross" />
                        <div className="product-card-image ">
                            <img  src="/public/images/watch.jpg" alt="camera" />
                        </div>
                        </div>
                    <div className="compare-product-details Home-wrapper-2 ml-5 mt-2">
                        <h5 className="scroll-m-20 hover:underline cursor-pointer text-md font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
                        <h5 className="text-md font-semibold mt-3">$100.00</h5>
                        <Separator className="mb-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Brand:</h5>
                            <p  className="break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Hevells</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Type:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Tablet Computers</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">SKU:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">SKU033</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Avilability:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">In Stock</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Color:</h5>
                            <Color/>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Size:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
                            <ul className='flex gap-2'>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>S</li>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>M</li>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>L</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    
                 
                </div>
                <div className="col-span-1 ">
                    <div className="compare-product-card relative ">
                            <img src="/public/images/cross.svg" className='absolute w-8 h-8 border-transparent text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none top-3 cross-btn cursor-pointer right-4' alt="cross" />
                        <div className="product-card-image ">
                            <img  src="/public/images/watch.jpg" alt="camera" />
                        </div>
                        </div>
                    <div className="compare-product-details Home-wrapper-2 ml-5 mt-2">
                        <h5 className="scroll-m-20 hover:underline cursor-pointer text-md font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
                        <h5 className="text-md font-semibold mt-3">$100.00</h5>
                        <Separator className="mb-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Brand:</h5>
                            <p  className="break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Hevells</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Type:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Tablet Computers</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">SKU:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">SKU033</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Avilability:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">In Stock</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Color:</h5>
                            <Color/>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Size:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
                            <ul className='flex gap-2'>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>S</li>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>M</li>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>L</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    
                 
                </div>
                <div className="col-span-1 ">
                    <div className="compare-product-card relative ">
                            <img src="/public/images/cross.svg" className='absolute w-8 h-8 border-transparent text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none top-3 cross-btn cursor-pointer right-4' alt="cross" />
                        <div className="product-card-image ">
                            <img  src="/public/images/watch.jpg" alt="camera" />
                        </div>
                        </div>
                    <div className="compare-product-details Home-wrapper-2 ml-5 mt-2">
                        <h5 className="scroll-m-20 hover:underline cursor-pointer text-md font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
                        <h5 className="text-md font-semibold mt-3">$100.00</h5>
                        <Separator className="mb-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Brand:</h5>
                            <p  className="break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Hevells</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Type:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Tablet Computers</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">SKU:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">SKU033</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Avilability:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">In Stock</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Color:</h5>
                            <Color/>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Size:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
                            <ul className='flex gap-2'>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>S</li>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>M</li>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>L</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    
                 
                </div>
                <div className="col-span-1 ">
                    <div className="compare-product-card relative ">
                            <img src="/public/images/cross.svg" className='absolute w-8 h-8 border-transparent text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none top-3 cross-btn cursor-pointer right-4' alt="cross" />
                        <div className="product-card-image ">
                            <img  src="/public/images/watch.jpg" alt="camera" />
                        </div>
                        </div>
                    <div className="compare-product-details Home-wrapper-2 ml-5 mt-2">
                        <h5 className="scroll-m-20 hover:underline cursor-pointer text-md font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
                        <h5 className="text-md font-semibold mt-3">$100.00</h5>
                        <Separator className="mb-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Brand:</h5>
                            <p  className="break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Hevells</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Type:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Tablet Computers</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">SKU:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">SKU033</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Avilability:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">In Stock</p>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Color:</h5>
                            <Color/>
                        </div>
                        <Separator className="my-3" />
                        <div className="brand flex justify-between">
                            <h5 className="scroll-m-20 hover:underline cursor-pointer text-sm font-semibold tracking-tight">Size:</h5>
                            <p  className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
                            <ul className='flex gap-2'>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>S</li>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>M</li>
                                    <li className='break-words text-sm  text-muted-foreground transition-colors hover:text-foreground cursor-pointer'>L</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    
                 
                </div>
            </div>
    </Container>
    </>
  )
}

export default CompareProduct