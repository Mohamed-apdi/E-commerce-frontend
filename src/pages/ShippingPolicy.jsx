import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import React from 'react'

function ShippingPolicy() {
  return (
   <>
   <Meta title="ShippingPolicy"/>
   <BreadCrumb title="ShippingPolicy"/>


   <Container class1="refund-wrapper py-5 Home-wrapper-2">
     <div className="w-8/12 mx-auto">
        <h1 className="scroll-m-20 text-2xl mb-5 text-center font-semibold tracking-tight">Shipping Policy</h1>
        <div className="flex flex-col gap-5">
        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Last Updated: January 15, 2024</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">At <span className=' font-bold'>Themoh</span>, we are committed to providing you with a seamless shopping experience, including reliable and efficient shipping. Please review the following information regarding our shipping policies:</p>
        </div>

        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Processing Time</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">Orders are typically processed and shipped within 14 business days of the order placement, excluding weekends and holidays. Orders placed after 2:00 PM will be processed the following business day.</p>
        </div>

        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Shipping Methods</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">We offer the following shipping methods:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li><span className='font-bold'>Standard Shipping:</span> Estimated delivery within 14 business days.</li>
                    <li><span className='font-bold'>Express Shipping:</span>  Guaranteed delivery within 7 business days.</li>
                    <li><span className='font-bold'>International Shipping:</span> Shipping options and delivery times may vary depending on the destination country. Customs and import duties may apply and are the responsibility of the recipient.</li>
                </ul>
        </div>

        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Shipping Rates</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">Shipping rates are calculated based on the total weight of the order and the selected shipping method. Rates will be displayed during the checkout process before payment is completed.</p>
        </div>
        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Order Tracking</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">Once your order has been shipped, you will receive a shipping confirmation email with tracking information. You can track the status of your shipment using the provided tracking number on our website or the carrier's website.</p>
        </div>
        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Shipping Restrictions</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">Please note that we do not ship to P.O. boxes or APO/FPO addresses. Additionally, certain items may be subject to shipping restrictions or regulations based on size, weight, or destination.</p>
        </div>
        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Delivery Issues</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">If you encounter any issues with the delivery of your order, such as delays, lost packages, or damaged items, please contact us immediately. We will work with the carrier to resolve the issue and ensure that you receive your order as soon as possible.</p>
        </div>
        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Contact Us</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">If you have any questions about our shipping policy or need assistance with your order, please contact us at <a href="mailto:maxamedcabdifitaax33@gmail.com" className='underline cursor-pointer'>maxamedcabdifitaax33@gmail.com</a>.</p>
        </div>
        </div>
    </div>
   </Container>

   </>
  )
}

export default ShippingPolicy