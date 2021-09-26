import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-bg">
                <div class="container">
                    <a class="navbar-brand " href="#" style={{ fontFamily: ["Satisfy", "cursive"], fontSize: "2rem" }}>ComplianceMaster</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" collapse navbar-collapse " id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#TOC">Type of Companies
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Process">Process</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#RegistrationForm">Registration Form
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Pricing">Pricing</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#DocumentRequired
">Document Required
                                </a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="#FAQ">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
