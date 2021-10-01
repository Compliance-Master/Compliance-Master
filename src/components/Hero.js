import React from 'react'
import '../CSS/Hero.css'
import Navbar from './Navbar'
import logo from "../Hero.svg"
export default function Hero() {
    return (
        <>
            <section>
                <div class="back">
                    <svg id="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff" fill-opacity="1" d="M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,197.3C672,192,768,224,864,240C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                    <Navbar />
                    <div class="container" >
                        <div class="hero row " style={{ position: "absolute", left: "5%" }}>
                            <div class=" col-lg-6">
                                <h3 class="display-3 "><strong> Online Company Registration</strong></h3>
                                <br></br>
                                <h5 class="">Just focus on your business! Leave the hassle of company registration in our trusted hands</h5>
                                <br />
                                <a href="#RegistrationForm" class="btn btn-lg btn-primary" role="button" type="button" >Get In Touch</a>
                            </div>
                            <div class="col-lg-6 text-right d-lg-block d-none d-sm-none d-md-none">
                                <img decoding="async" importance="low" loading="lazy" src={logo}
                                    class="App-logo" alt="about-image" />
                            </div>
                        </div >
                    </div>

                </div >
            </section>
        </>
    )
}
