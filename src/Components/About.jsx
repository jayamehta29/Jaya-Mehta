import React from 'react'
import { Element, Link } from 'react-scroll'
// import profile from "../../src/SVG/Asset 2.svg";
import '../App.css';
import Project from './Project';
// import profile from "../SVG/about_image.svg";

import profile from "../SVG/home_img.svg";



const About = () => {

    return (
        <React.Fragment>

            <Element id='about' name='About'>
                <div className="about-heading-txt">
                    <h1 style={{ display: "block" }}><center>ABOUT ME</center> </h1>
                </div>

                <div className="about-outer">


                    <div className="about-inner-left">
                        <h1>Hi, I am <b style={{ display: "block" }}> Jaya Mehta</b></h1>
                        <p className="text-justify about-txt">
                            I am from Delhi.I am a final year student pursuing bachelors of technology in computer science from HMR Institue of Technology and Management. I have a decent knowledge of fundamental subjects of engineering.
                            My fields and expertise lie in Frontend Development amd Graphic Designing.
                        </p>
                        <div className="about-btns">
                            <Link
                                to="https://drive.google.com/file/d/1l_ghGyPbrPMfUP77PvvPfqXXFePK-Ebd/view?usp=sharing"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <button type="button" className="btnclass" onClick={() => window.open("https://drive.google.com/file/d/1l_ghGyPbrPMfUP77PvvPfqXXFePK-Ebd/view?usp=sharing")}>MY RESUME</button>
                            </Link>
                            <Link
                                to="Project"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <button type="button" className="btnclass" onClick={Project}>MY PROJECTS</button>
                            </Link>
                        </div>



                    </div>
                    <div className="about-inner-right">
                        <img src={profile} className="about-img" />
                        {/* <h4 style={{position:"absolute",color:"black" ,left:"98px", top:"140%"}}>Graphic Designer and Web Developer</h4>
                        <div className="shape"></div> */}
                    </div>
                </div>

            </Element>

        </React.Fragment>
    )
}

export default About
