import React from 'react'
import "../CSS/Footer.css"
export default function Footer() {
    return (
        <div>
            <footer class="text-center text-lg-start  w-100 footer mt-3 pt-1">
                <section>
                    <div class="container text-center mt-5">
                        <div class="row">
                            {/* <!-- About the company --> */}
                            <div class="col-md-4  mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 class="fw-bold mb-4">
                                    <a class="navbar-brand" href="#" style={{ fontFamily: ["Satisfy", "cursive"], fontSize: "2rem" }}>ComplianceMaster</a></h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            {/* <!-- startup --> */}
                            <div class="col-md-4  mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Startup Center
                                </h6>
                                <ul >
                                    <li><a href="/Partnership-Firm" class="link">Partnership Firm</a></li>
                                    <li><a href="/Sole-Proprietor" class="link">Sole Proprietorship</a></li>
                                    <li><a href="/One-Person-Company" class="link">One Person Company</a></li>
                                    <li><a href="/Public-Limited-Company" class="link">Public Limited Company</a></li>
                                    <li><a href="/Private-Limited-Company" class="link">Private Limited Company</a></li>
                                    <li><a href="/Limited-Liability-Partnership" class="link">Limited Liability Partnership</a></li>
                                </ul>
                            </div>
                            {/* <!-- term of use --> */}
                            <div class="col-md-4  mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Company Policies
                                </h6>
                                <ul >
                                    <li><a href="/Disclaimer" class="link">Disclaimer</a></li>
                                    <li><a href="/Refund-Policy" class="link">Refund Policy</a></li>
                                    <li><a href="/Privacy-Policy" class="link">Privacy Policy</a></li>
                                    <li><a href="/Term-and-Conditions" class="link">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}
