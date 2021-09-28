import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import doc from "../document.gif"
import coin from "../coin.gif"
import confetti from "../confetti.gif"
import bank from "../bank.gif"
import upload from "../upload.gif"
import applause from "../applause.gif"
import certi from "../certificate.gif"
import "../CSS/Process.css"
export default function Process() {
    return (
        <>
            <section class="my-5 py-5 container" id="Process" >
                <h1 class="text-center my-5" >Process</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--work "
                        // date="2011 - present"
                        // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // backgroundImage: `url(${process.env.PUBLIC_URL + back})` 
                        contentStyle={{ color: '#fff', backgroundColor: "#0d6efd" }}
                        contentArrowStyle={{ borderRight: '7px solid  #0d6efd' }}
                        icon={<img src={doc} alt="money" style={{ width: "60px" }}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Fill up the Registration form</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: '#0d6efd', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #0d6efd' }}
                        icon={<img src={coin} alt="money" style={{ width: "60px" }}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Pay fees online</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: '#0d6efd', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #0d6efd' }}
                        icon={<img src={upload} alt="money" style={{ width: "60px" }}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Upload Documents</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: '#0d6efd', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #0d6efd' }}
                        icon={<img src={certi} alt="money" style={{ width: "60px" }}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Certificate of Incorporation</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: '#0d6efd', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #0d6efd' }}
                        icon={<img src={bank} alt="money" style={{ width: "60px" }}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Open Bank Account</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
                        <p>
                            Strategy, Social Media
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: '#0d6efd', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #0d6efd' }}
                        icon={<img src={confetti} alt="money" style={{ width: "60px" }}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Commencement of Business</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                        <p>
                            Creative Direction, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        icon={<img src={applause} alt="money" style={{ width: "60px" }}></img>}
                    />
                </VerticalTimeline>
            </section>
        </>
    )
}
