import React from 'react'
import Footer from './Footer'
export default function Privacy() {
    return (
        <>
            <div class="term-hero">
                <h1 class="display-2 m-3">Privacy Policy</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                    </ol>
                </nav>
            </div>
            <section class="p-5 m-5" style={{ textAlign: "justify" }}>
                <div class="container">
                    <h4 class="mb-5">Privacy Policy</h4>
                    <p>
                        Authoritatively deploy fully researched leadership skills whereas one-to-one best
                        practices. Monotonectally aggregate virtual imperatives and accurate technology.
                        Dynamically streamline progressive sources before user friendly.
                    </p>
                </div>

            </section>
            <Footer />
        </>
    )
}
