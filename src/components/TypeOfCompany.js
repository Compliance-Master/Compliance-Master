import React from 'react'
import Card from './Card'
import "../CSS/TypeOfCompany.css"
import user from "../user.json"
export default function TypeOfCompany() {
    var arr = user.TypeOfCompany;
    return (
        <>
            <section class="container my-5 py-5" id="TOC">

                <h1 class="text-center my-5">Type of Companies </h1>

                <div class="row">
                    {arr.map((item, index) =>
                        <div class="col-md-6 col-lg-4 ra-mb">
                            <Card title={item.name} dis={item.description} number={index + 1} link={item.link} />
                        </div>
                    )}
                </div>

            </section>

        </>
    )
}
