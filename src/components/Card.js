import React from 'react'
import "../CSS/Card.css"
export default function Card(props) {
    const name = props.title;
    const dis = props.dis;
    const key = props.number;
    const link = props.link;
    return (
        <div class="card1 h-100 ">
            <div class="card-content">
                <h2 class="text-primary">{key}</h2>
            </div>
            <h3 class="card-header pb-2"> {name}</h3>

            <div class="card-body d-flex flex-column justify-content-end">
                <span>
                    <p>{dis}</p>
                    {link ? <a class="btn btn-primary" href={link}>Read More</a> : <></>}
                </span>
            </div>
        </div >
    )
}
