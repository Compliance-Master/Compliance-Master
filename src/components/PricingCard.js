import React from 'react'

export default function PricingCard(props) {
    var data = props.data;
    var setdetail = props.setdetail;
    var id = props.id;
    var setid = props.setid;
    const change = (e) => {
        var current_id = e.target.id;
        if (id === current_id) {
            setdetail(false);
            setid("");
        } else {
            setid(current_id);
            setdetail(false);
            setTimeout(function () {
                setdetail(true);
            }, 400);
        }

    }
    return (
        <div class="col-md-6">
            <div class="card">
                <div class="d-flex mb-3 align-items-center ">
                    <div class="me-auto">
                        <h1 class="text-primary pb-2">{data.name}</h1>
                    </div>
                    <div class="d-flex flex-column fw-bolder align-items-end">
                        <div class="text-decoration-line-through "><h1>₹{data.originalPrice}</h1></div>
                        <div><h1>₹{data.currentPrice}</h1></div>
                    </div>
                </div>
                <div classs="card-body">
                    <h4>
                        <strong>Services</strong>
                    </h4>
                    <span dangerouslySetInnerHTML={{ __html: data.services }}></span>
                    <a onClick={change} id={data.id} type="button" class="btn btn-primary"> Detail Breakdown</a>
                </div>
            </div>
        </div>
    )
}
