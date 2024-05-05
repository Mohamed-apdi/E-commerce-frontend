import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import React from 'react'

function RefundPolicy() {
  return (
    <>
    <Meta title="RefundPolicy"/>
    <BreadCrumb title="Refund Policy"/>

    <div className="refund-wrapper py-5 Home-wrapper-2">
        <div className="container">
            <div className="w-8/12 mx-auto">
        <h1 className="scroll-m-20 text-2xl mb-5 text-center font-semibold tracking-tight">Refund Policy</h1>
        <div className="flex flex-col gap-5">
        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Last Updated: January 15, 2024</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">At <span className=' font-bold'>Themoh</span>, we strive to ensure that you are satisfied with your purchase. If you are not entirely satisfied with your purchase, we're here to help.</p>
        </div>

        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Refund Eligibility</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">To be eligible for a refund, please ensure that:</p>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>You contact us within 30 days of receiving your order.</li>
                    <li>The item is unused, in its original packaging, and in the same condition that you received it.</li>
                    <li>You provide proof of purchase, such as a receipt or order confirmation.</li>
                </ul>
        </div>

        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Refund Process</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 14 days.</p>
            
        </div>

        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Return Shipping</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">You will be responsible for paying the shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
        </div>
        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Damaged or Defective Items</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">If you receive a damaged or defective item, please contact us immediately with photos of the product and packaging. We will arrange for a replacement or refund as soon as possible.</p>
        </div>
        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Exchanges</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">We only replace items if they are defective or damaged. If you need to exchange an item for the same product, please contact us to arrange the exchange.</p>
        </div>
        <div className="">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Contact Us</h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">If you have any questions about our refund policy, or if you need assistance with a return, please contact us at <a href="mailto:maxamedcabdifitaax33@gmail.com" className='underline cursor-pointer'>maxamedcabdifitaax33@gmail.com</a>.</p>
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default RefundPolicy