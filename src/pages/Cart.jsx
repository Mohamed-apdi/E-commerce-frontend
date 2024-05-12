import { Separator } from '../components/ui/separator'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import React from 'react'
import { Trash2 } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

function Cart() {
  return (
    <>
      <Meta title="Cart"/>
      <BreadCrumb title="Your Shopping Cart"/>
      <Container class1="cart-wrapper py-5 Home-wrapper-2">
      <div className="flex">
            <div className="w-full">
              <div className="cart-header flex justify-between py-3 items-center">
                <h1 className='scroll-m-20 cart-col-1 text-xl font-semibold tracking-tight text-muted-foreground'>Product</h1>
                <h1 className='scroll-m-20 cart-col-2 text-xl font-semibold tracking-tight text-muted-foreground'>Price</h1>
                <h1 className='scroll-m-20 cart-col-3 text-xl font-semibold tracking-tight text-muted-foreground'>Quantity</h1>
                <h1 className='scroll-m-20 cart-col-4 text-xl font-semibold tracking-tight text-muted-foreground'>Total</h1>
              </div>
                <Separator/>
              <div className="cart-data flex justify-between py-3 items-center">
                <div className='cart-col-1 flex gap-x-16'>
                  <div>
                    <img className='w-[120px] h-[90px] object-cover' src="/public/images/tab2.jpg" alt="img" />
                  </div>
                  <div className=' space-y-1'>
                    <h1 className=' text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className=' text-muted-foreground'>Size: M</p>
                    <p className=' text-muted-foreground'>Color: #A7DCOD</p>
                  </div>
                </div>
                <div className='cart-col-2 font-bold text-sm'>$100.00</div>
                <div className='cart-col-3 flex gap-2'>
                <input className="w-[50px] border p-[2px]" type="number" min={1} max={10} defaultValue="1"/>
                <Badge className="w-8  transition-colors"><Trash2/></Badge>
                </div>
                <div className='cart-col-4'>
                  <p className=' font-bold'>$100.00</p>
                </div>
              </div>
              <Separator/>
              <div className='flex justify-between items-center mt-5'>
              <Link to="/product" className="rounded-3xl h-10 bg-slate-800 hover:bg-slate-800/85 text-white py-2 px-10 ">Continue Shopping</Link>
                <div className=' text-end'>
                <div className='flex items-center gap-1'>
                    <p className='text-muted-foreground font-bold'>Subtotal:</p>
                    <p className="font-bold text-muted-foreground">$100.00</p>
                  </div>
                  <p className=' text-muted-foreground'>Taxes and shipping calculated at checkout</p>
                  <Link to="/checkout" className="rounded-3xl w-full h-10 bg-slate-800 hover:bg-slate-800/85 text-white py-2 text-center">Checkout</Link>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Cart