import React from 'react'
import Footer from './Footer'
export default function Disclaimer() {
    return (
        <>
            <div class="term-hero">
                <h1 class="display-2 m-3">Disclaimer</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Disclaimer</li>
                    </ol>
                </nav>
            </div>
            <section class="p-5 m-5" style={{ textAlign: "justify" }}>
                <div class="container">
                    <h4 class="mb-5">Disclaimer</h4>
                    <p>Our portal is privately owned online portal and in no way represent any relation with any government authority or body.</p>
                    <p>Company shall be incorporated by us only after providing the all requiste and correct documents.</p>
                    <p>Stamp duty vary based on authorized share capital and State on which company proposed to be incorporated.</p>
                    <p>The company name approval is sole discretionary power of the Ministry of Corporate Affairs and we have no control over it. </p>
                </div>

            </section>
            <Footer />
        </>
    )
}
