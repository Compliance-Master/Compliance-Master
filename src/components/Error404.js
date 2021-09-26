import React from 'react'
import error from "../error404.svg"
export default function Error404() {
    return (
        <div class="container">
            <div class="row">
                <img decoding="async" importance="low" loading="lazy" src={error} alt="error-image" style={{ height: "80vh", width: "100%" }} />
            </div>
            <div class="text-center">
                <a href="/Compliance-Master/" class="btn btn-lg btn-primary" role="button" type="button">Back Home</a>
            </div>
        </div>
    )
}
