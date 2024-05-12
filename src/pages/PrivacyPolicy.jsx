import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import React from 'react'

function PrivacyPolicy() {
  return (
    <>
    <Meta title="PrivacyPolicy"/>
    <BreadCrumb title="PrivacyPolicy"/>

    <Container class1="policy-wrapper py-5 Home-wrapper-2">
        <div className="w-8/12 mx-auto">
                <h1 className="scroll-m-20 text-2xl mb-5 text-center font-semibold tracking-tight">Privacy Policy</h1>
                <div className="flex flex-col gap-5">
                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Last Updated: January 15, 2024</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6"><span className=' font-bold'>Themoh</span> we is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and protect the personal information we collect through our website <span className=' underline cursor-pointer'>Themoh.com</span> and any related services, including but not limited to purchasing products or contacting customer support.</p>
                </div>

                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Information We Collect4</h4>
                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                            <li>Personal Information: When you visit our Site, register an account, place an order, or communicate with us, we may collect personal information such as your name, email address, shipping address, phone number, and payment details.</li>
                            <li>Usage Information: We may automatically collect certain information about your device and browsing activity on our Site, such as your IP address, browser type, referring/exit pages, and the dates/times of your visits.</li>
                            <li>Cookies: We use cookies and similar tracking technologies to enhance your experience on our Site, personalize content and ads, analyze traffic, and understand user behavior. You can manage cookie preferences through your browser settings.</li>
                        </ul>
                </div>

                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">How We Use Your Information4</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">We may use the information we collect for the following purposes:</p>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                            <li>Processing and fulfilling orders.</li>
                            <li>Providing customer support and responding to inquiries.</li>
                            <li>Personalizing your experience on our Site.</li>
                            <li>Sending promotional offers, newsletters, or marketing communications</li>
                            <li>Analyzing and improving our products, services, and marketing efforts</li>
                            <li>Complying with legal obligations and protecting our rights</li>
                        </ul>
                </div>

                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Information Sharing</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">We may share your personal information with third-party service providers who assist us in operating our business, processing payments, or delivering products. We may also share information with law enforcement agencies, government officials, or other third parties when required by law or to protect our legal rights.</p>
                </div>
                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Data Security</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
                </div>
                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Your Rights and Choicesg</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">You have the right to access, update, or delete your personal information. You may also opt-out of receiving marketing communications from us by following the unsubscribe instructions provided in such communications. Please note that even if you opt-out, we may still send you non-promotional messages related to your account or transactions.</p>
                </div>
                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Contact Us</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">if you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at <a href="mailto:maxamedcabdifitaax33@gmail.com" className='underline cursor-pointer'>maxamedcabdifitaax33@gmail.com</a>.</p>
                </div>
                </div>
        </div>
    </Container>
    </>
  )
}

export default PrivacyPolicy