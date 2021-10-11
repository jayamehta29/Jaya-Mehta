import React from 'react'
import { Element, Link } from 'react-scroll'
// import profile from "../../src/SVG/Asset 2.svg";
import '../App.css';
import Project from './Project';
import profile from "../myPhoto.jpeg";





const About = () => {

    return (
        <React.Fragment>


            <Element id='about' name='About'>
                <div className="about-outer">
                    <div className="about-inner-left">
                        <h1>Hi, I am <b style={{display:"block"}}> Jaya Mehta</b></h1>
                        <p className="text-justify about-txt">
                        I am from Delhi.I am a final year student pursuing bachelors of technology in computer science from HMR Institue of Technology and Management. I have a decent knowledge of fundamental subjects of engineering.
                        My fields and expertise lie in Frontend Development amd Graphic Designing. I love to try out new things. During my internship in a company as a graphic designer, I used to work in collaboration with the marketing team. This gave me a great exposure and insight about how coorporate world actually works.
                        </p>
                        <div className="about-btns">
                            <Link
                                to="https://drive.google.com/file/d/1l_ghGyPbrPMfUP77PvvPfqXXFePK-Ebd/view?usp=sharing"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <button type="button" className="btn btn-warning mr-5 res" onClick={() => window.open("https://drive.google.com/file/d/1l_ghGyPbrPMfUP77PvvPfqXXFePK-Ebd/view?usp=sharing")}>MY RESUME</button>
                            </Link>
                            <Link
                                to="Project"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <button type="button" className="btn btn-warning prj" onClick={Project}>MY PROJECTS</button>
                            </Link>
                        </div>



                    </div>
                    <div className="about-inner-right">
                        <img src={profile} className="about-img"/>
                        {/* <h4 style={{position:"absolute",color:"black" ,left:"98px", top:"140%"}}>Graphic Designer and Web Developer</h4>
                        <div className="shape"></div> */}
                    </div>
                </div>

            </Element>

        </React.Fragment>
    )
}

export default About
