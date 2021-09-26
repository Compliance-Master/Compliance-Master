import React, { useState } from "react";
import User from "../user.json";
import "../CSS/IndividualCompany.css";
import Navbar from "./Navbar2";
import Footer from "./Footer";
import PricingCard from "./PricingCard.js"
import DetailBreakdown from "./DetailBreakdown";
export default function IndividualCompany(props) {
    var name = props.name;
    var data = User.IndividualCompany[name];
    var arr = data.pricing;
    const [detail, setdetail] = useState(false);
    const [id, setid] = useState("");

    return (
        <>
            <div>
                {/*hero*/}
                <section>
                    <div class="ind-hero">
                        <svg
                            id="waves"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill="#fff"
                                fill-opacity="1"
                                d="M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,197.3C672,192,768,224,864,240C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ></path>
                        </svg>
                        <Navbar />
                        <div class="container">
                            <div style={{ height: "100vh" }}>
                                <div class="row align-content-center align-items-center h-100 ">
                                    <div class=" col-lg-6">
                                        <h2 class="display-5">
                                            <strong>{data.name}</strong>
                                        </h2>
                                        <br />
                                        <p
                                            style={{ textAlign: "justify" }}
                                            dangerouslySetInnerHTML={{ __html: data.des }}
                                        ></p>
                                    </div>
                                    <div class="col-lg-6 text-right d-lg-block d-none d-sm-none d-md-none">
                                        <img decoding="async" importance="low" loading="lazy" src={data.img}
                                            class="App-logo" alt="about-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* infornation guide */}
                <section class="my-5 py-5 container" id="InformationGuide">
                    {/* benifit and doc req */}
                    <h1 class="text-center my-5">Information Guide</h1>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card ">
                                <h2 class="text-primary ">Benifit of {data.name}</h2>
                                <div
                                    dangerouslySetInnerHTML={{ __html: data.whoshouldbuy }}
                                ></div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="card ">
                                <h2 class="text-primary ">
                                    Document Requirement for Registration
                                </h2>
                                <div dangerouslySetInnerHTML={{ __html: data.docReq }}></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*pricing  */}
                <section class="my-5 py-5 container" id="Pricing">
                    <h1 class="text-center my-5">Pricing</h1>
                    <div class="row">
                        {arr.map((item, index) =>
                            <PricingCard data={item} setdetail={setdetail} id={id} setid={setid} />
                        )}
                    </div>
                    {detail ? <DetailBreakdown id={id} /> : null}
                </section>
            </div>
            <Footer />
        </>
    );
}
