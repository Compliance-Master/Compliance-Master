import React from 'react'

export default function Counter() {
    var current_date = new Date().getFullYear();
    var start_date = 2018;
    var year = current_date - start_date;
    return (
        <>
            <section class="counts-section">
                <h1 class="text-center my-5">Our Achievement</h1>
                <div class="bg-primary text-white py-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-12 p-2 text-center">
                                <h2 ><span class="counterUp">40</span></h2>
                                <h6>Happy Clients</h6>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 p-2 text-center">
                                <h2 ><span class="counterUp">{year}</span></h2>
                                <h6>Years of Experience</h6>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 p-2 text-center">
                                <h2><span class="counterUp">5000</span>+</h2>
                                <h6>Hours Of Support</h6>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 p-2 text-center">
                                <h2 ><span class="counterUp">17</span></h2>
                                <h6>Hard Workers</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
