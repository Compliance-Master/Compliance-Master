import React from 'react'
import user from "../user.json";
export default function DetailBreakdown(props) {
    // var data = props.data;
    var id = props.id;
    var data = user.DetailBreakdown[id];
    return (
        <>
            <div class="mt-5 border border-dark">
                <h5 class="p-1 peimary-bg d-inline-block color-white">Detailed Breakdown of {data.company} {data.plan}</h5>
                <div>
                    <div >
                        <table class="table">
                            <thead>
                                <tr >
                                    <th class="p-1 ps-3" >PARTICULARS</th>
                                    <th class="p-1 pe-5 text-end" >AMOUNT (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.table.map(item => {
                                    return (
                                        <tr>
                                            <th class="p-1 ps-3">{item.Particulars}</th>
                                            <td class="p-1 pe-5 text-end"><strong>{item.Amount}</strong></td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                        <h6 class="ps-3 text-danger">!!!!!!!!!!!!!!!!!!!Incorporation Fee upto 10 Lakh Authorized Capital with One Director in Tamil Nadu!!!!!!!!!</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
