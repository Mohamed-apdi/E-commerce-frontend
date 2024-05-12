import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"
import { Link } from 'react-router-dom'
import Container from '../components/Container'

function FAQ() {
  return (
    <>
      <Meta title="FAQ"/>
      <BreadCrumb title="FAQ"/>
        <Container class1="refund-wrapper py-5 Home-wrapper-2">
            <div className="w-8/12 mx-auto">
            <h1 className="scroll-m-20 text-2xl mb-5 text-center font-semibold tracking-tight">Frequently Asked Questions (FAQ)</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">Welcome to the Themoh FAQ page! Here you'll find answers to commonly asked questions about our products, services, and policies. If you have a question that isn't answered here, please feel free to contact us, and we'll be happy to assist you.</p>
            <div className="flex flex-col gap-5 mt-4">
            <div className="">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Orders & Shipping</h4>
                
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How can I track my order?</AccordionTrigger>
                        <AccordionContent>
                        Once your order has been shipped, you will receive a shipping confirmation email with tracking information. You can track the status of your shipment using the provided tracking number on our website or the carrier's website.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How long will it take to receive my order?</AccordionTrigger>
                        <AccordionContent>
                        Delivery times may vary depending on your location and the shipping method selected. You can find estimated delivery times during checkout. Orders are typically processed and shipped within 14 business days.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                        <AccordionContent>
                        Yes, we offer international shipping to select countries. Shipping options and delivery times may vary depending on the destination country. Customs and import duties may apply and are the responsibility of the recipient.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Returns & Refunds</h4>
                
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is your return policy?</AccordionTrigger>
                        <AccordionContent>
                        We accept returns within 7 days of delivery for eligible items. To be eligible for a return, the item must be unused, in its original packaging, and in the same condition that you received it. Please refer to our <Link to="/refund-policy" className="text-blue-500">Refund Policy</Link> for more information.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How do I initiate a return?</AccordionTrigger>
                        <AccordionContent>
                        To initiate a return, please contact our customer service team with your order details. We will provide you with instructions on how to return the item and process your refund once the return is received and inspected.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Product Information</h4>
                
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Are your products authentic?</AccordionTrigger>
                        <AccordionContent>
                        Yes, we guarantee that all products sold on our website are 100% authentic and sourced directly from authorized suppliers and manufacturers.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Do you offer product warranties?</AccordionTrigger>
                        <AccordionContent>
                        Product warranties may vary depending on the manufacturer and product type. Please refer to the product description or contact us for specific warranty information.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Account & Security</h4>
                
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How do I create an account?</AccordionTrigger>
                        <AccordionContent>
                        You can create an account by clicking on the <Link to="/sign-up" className="text-blue-500">"Create Account"</Link>  link on our website and following the instructions to complete the registration process.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is my personal information secure?</AccordionTrigger>
                        <AccordionContent>
                        Yes, we take the security of your personal information seriously and implement industry-standard measures to protect your data. For more information, please refer to our <Link to="/privacy-policy" className="text-blue-500">Privacy Policy.</Link> 
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Contact Us</h4>
                
                <p className="leading-7 [&:not(:first-child)]:mt-6">If you have any other questions or need further assistance, please don't hesitate to <Link to="/contact" className="text-blue-500">contact us</Link>. Our customer service team is here to help!</p>
            </div>
            </div>
          </div>
        </Container>
   </>
  )
}

export default FAQ