import React from 'react'
import { Element } from 'react-scroll'

const Experience = () => {
    return (
        <React.Fragment>

            <Element id='experience' name='Experience'>
                <div className="exp-outer">
                    <h1><b style={{ display: "block", textAlign: "center", marginBottom: "1rem",  marginTop: "-1px" }}>Internship Experience</b></h1>
                    <div className="timeline">
                        <ul>
                            <li>
                                <div className="right_content">
                                    <h2 style={{color:"#f9ab00"}}>FRONTEND DEVELOPER</h2>
                                    <div className="exp-txt">Smart Study Hub(May 2020)</div>
                                    <p style={{color:"white"}}>As an intern, I created various HTML forms
                                        and quiz, worked on the frontend of the
                                        website and created projects.
                                    </p>
                                </div>
                                <div className="left_content">
                                    <h3 style={{color: "rgba(59,112,239,1)"}}>MAY 2020</h3>
                                </div>
                            </li>
                            <li>
                                <div className="right_content">
                                    <h2 style={{color:"#f9ab00"}}>GRAPHIC DESIGNER</h2>
                                    <div className="exp-txt">Internity(June 2020-July 2020)</div>
                                    <p style={{color:"white"}}>I learned graphic designing tools such as Adobe Illustrator and Adobe Photoshop.Also, I worked in collaboration with the marketing
                                        team and created various infographic posts for different social media platforms.Moreover, I designed various T-shirt designs, banners and UI for a website.
                                        At the Grad Day, I was awarded as the ‘Challenger Acceptor’.
                                    </p>
                                </div>
                                <div className="left_content">
                                    <h3 style={{color: "rgba(59,112,239,1)"}}>JUNE 2020 </h3>
                                </div>
                            </li>

                            <li>
                                <div className="right_content">
                                    <h2 style={{color:"#f9ab00"}}>FRONTEND DEVELOPER</h2>
                                    <div className="exp-txt">Unthinkable Solutions(July 2021-Ocyober 2021)</div>
                                    <p style={{color:"white"}}>As an intern my day to day responsibilities were to design,develop and deploy an OTT Platform.The technology stack learned during the internship was ReactJS.
                                    </p>
                                </div>
                                <div className="left_content">
                                    <h3 style={{color: "rgba(59,112,239,1)"}}>JULY 2021 </h3>
                                </div>
                            </li>

                            <div style={{ clear: "both" }}></div>
                        </ul>
                    </div>
                </div>
            </Element>

        </React.Fragment>
    )
}

export default Experience
