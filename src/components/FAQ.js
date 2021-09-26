import React from 'react'
import "../CSS/FAQ.css"
import user from "../user.json"
export default function FAQ() {
    const Faq = user.FAQ;
    return (


        <section class="container my-5 py-5" id="FAQ">
            <h1 class="text-center my-5">Frequently Asked Questions </h1>
            <div class="row">
                <div class="col-md-12">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        {Faq.map((item) =>
                            <div class="accordion-item mb-2">
                                <h2 class="accordion-header" id={item.index + " "}>
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={"#" + item.index}
                                        aria-expanded="true"
                                        aria-controls={item.index}>
                                        {item.question}
                                    </button>
                                </h2>
                                <div
                                    id={item.index}
                                    class="accordion-collapse collapse"
                                    aria-labelledby={item.index + " "}>
                                    <div class="accordion-body"
                                        dangerouslySetInnerHTML={{ __html: item.answer }} />
                                </div>
                            </div>


                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
