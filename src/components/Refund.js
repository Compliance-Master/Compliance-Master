import React from 'react'
import Footer from './Footer'
export default function Refund() {
    return (
        <>
            <div class="term-hero">
                <h1 class="display-2 m-3">Refund Policy</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Refund Policy</li>
                    </ol>
                </nav>
            </div>
            <section class="p-5 m-5" style={{ textAlign: "justify" }}>
                <div class="container">
                    <h4 class="mb-5">Refund Policy</h4>
                    <div>
                        <p>
                            <strong>We have money back guarantee policy if we are unable to process the application as committed by us.</strong>
                        </p>
                        <p>
                            <strong>You can easily reach us with your grievance. Immediately our refund department will assessee the matter and if it finds non-catering of services on our part we'll gladly refund your payment within 7 working days from the date of refund request.</strong>
                        </p>
                    </div>
                    <div>
                        <strong>Note:</strong>
                        <ul>
                            <li>No refund shall be issued if we processed the registration/application as per the government guidelines and issuance of the certificate is pending or delayed on part of a government department or officials.</li>
                            <li>No refund shall be issued if application has been filed successfully but rejected due to non-availability of company name requested by applicant in the application.</li>
                            <li>We will deduct INR 300 ( Three hundred rupees only) as an administrative charges if application would not be able to process due to non-submission of requiste documents as per government guideline or any kind of non-cooperation from applicant or any other circumstances which restricting us to process the application.</li>
                            <li>If any government fee, duty, challan or any other sum paid in the course of processing registration application by us. We will refund the payment received after reducing government fee paid by us.
                            </li>
                            <li>No refund shall be issued if you have already availed any complimentary service or discount offer which was attached to the paid service for which you are seeking a refund. </li>
                        </ul>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}
