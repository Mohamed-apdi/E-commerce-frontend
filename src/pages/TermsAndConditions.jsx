import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import React from 'react'

function TermsConditions() {
  return (
    <>
        <Meta title="TermsConditions"/>
        <BreadCrumb title="TermsConditions"/>

        <Container class1="py-5 Home-wrapper-2">
            <div className="w-8/12 mx-auto">
                <h1 className="scroll-m-20 text-2xl mb-5 text-center font-semibold tracking-tight">Terms & Conditions</h1>
                <div className="flex flex-col gap-5">
                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Last Updated: January 15, 2024</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">These terms and conditions ("Terms") govern your use of themoh website <span className=' font-bold'>Themoh.com</span> and any related services provided by themoh. By accessing or using our website, you agree to comply with these Terms. If you do not agree with any part of these Terms, please do not use our website.</p>
                </div>

                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Intellectual Property</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">All content on this website, including text, graphics, logos, images, audio clips, digital downloads, and software, is the property of themoh and protected by international copyright laws.</p>
                </div>

                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Use License</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">Permission is granted to temporarily download one copy of the materials (information or software) on themoh's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not::</p>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>Attempt to decompile or reverse engineer any software contained on themoh's website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials; or</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">This license shall automatically terminate if you violate any of these restrictions and may be terminated by themoh at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
                </div>

                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Disclaimer</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">The materials on themoh's website are provided on an 'as is' basis. themoh makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">Further, themoh does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
                </div>
                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Limitations</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">In no event shall themoh or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on themoh's website, even if themoh or a themoh authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                </div>
                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Accuracy of Materials</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">The materials appearing on themoh's website could include technical, typographical, or photographic errors. themoh does not warrant that any of the materials on its website are accurate, complete, or current. themoh may make changes to the materials contained on its website at any time without notice. However, themoh does not make any commitment to update the materials.</p>
                </div>
                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Links</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">Themoh has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by themoh of the site. Use of any such linked website is at the user's own risk.</p>
                </div>
                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Modifications</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">themoh may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.</p>
                </div>
                <div className="">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Contact Us</h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">If you have any questions about these Terms, please contact us at <a href="mailto:maxamedcabdifitaax33@gmail.com" className='underline cursor-pointer'>maxamedcabdifitaax33@gmail.com</a>.</p>
                </div>
                </div>
            </div>
        </Container>

    </>
  )
}

export default TermsConditions