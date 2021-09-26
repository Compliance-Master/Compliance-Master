import React from 'react'
import user from "../user.json"
export default function PricingPage() {
    var arr = user.PricingPageIndex;
    return (

        <section class="my-5 py-5 container" id="Pricing">
            <h1 class="text-center my-5">Pricing</h1>
            <div class="row">
                {arr.map((item, index) =>
                    <div class="col-md-6 col-lg-4 mb-3">
                        <div class="card h-100 ">
                            <a href={item.CompanyLink} style={{ textDecoration: "None" }}><h2 class="text-primary card-header pb-2" >{item.name}</h2></a>
                            <div class="card-body d-flex flex-column justify-content-around">
                                <p><strong>{item.product}</strong></p>
                                <span>
                                    <p class="mb-0">Price Starting From: </p>
                                    <h4 class="text-primary">INR: {item.PriceStart}/-</h4>
                                    <p>within {item.WorkingDays}* working days</p>
                                    <a class="btn btn-primary" type="button" href={item.KnowMore}>Know More</a>
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section >
    )
}
