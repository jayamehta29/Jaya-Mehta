import React from 'react'
import { Element } from 'react-scroll'


const Experience = () => {
    return (
        <React.Fragment>

            <Element id='experience' name='Experience' >
                <div className="exp-outer">
                    <h1><b style={{ display: "block", textAlign: "center",  marginTop: "4rem" }}>Internship Experience</b></h1>
                    <div className="timeline">
                        <ul>
                            <li>
                                <div className="right_content">
                                    <h2 style={{color:"white"}}>FRONTEND DEVELOPER</h2>
                                    <div className="exp-txt">Smart Study Hub(May 2020)</div>
                                    <p style={{color:"#676576"}}>As an intern, I created various HTML forms
                                        and quiz, worked on the frontend of the
                                        website and created projects.
                                    </p>
                                </div>
                                <div className="left_content">
                                    <h3 style={{color: "#705EDC"}}>MAY 2020</h3>
                                </div>
                            </li>
                            <li>
                                <div className="right_content">
                                    <h2 style={{color:"white"}}>GRAPHIC DESIGNER</h2>
                                    <div className="exp-txt">Internity(June 2020-July 2020)</div>
                                    <p style={{color:"#676576"}}>I learned graphic designing tools such as Adobe Illustrator and Adobe Photoshop.Also, I worked in collaboration with the marketing
                                        team and created various infographic posts for different social media platforms.Moreover, I designed various T-shirt designs, banners and UI for a website.
                                        At the Grad Day, I was awarded as the ‘Challenger Acceptor’.
                                    </p>
                                </div>
                                <div className="left_content">
                                    <h3 style={{color:"#705EDC"}}>JUNE 2020 </h3>
                                </div>
                            </li>

                            <li>
                                <div className="right_content">
                                    <h2 style={{color:"white"}}>FRONTEND DEVELOPER</h2>
                                    <div className="exp-txt">Unthinkable Solutions(July 2021-Ocyober 2021)</div>
                                    <p style={{color:"#676576"}}>As an intern my day to day responsibilities were to design,develop and deploy an OTT Platform.The technology stack learned during the internship was ReactJS.
                                    </p>
                                </div>
                                <div className="left_content">
                                    <h3 style={{color: "#705EDC"}}>JULY 2021 </h3>
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
