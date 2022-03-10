import React from 'react'
import { Element, Link } from 'react-scroll'
import '../App.css';
import Project from './Project';
import profile from "../SVG/about_image.svg";




const About = () => {

    return (
        <React.Fragment>

            <Element id='about' name='About'>
                <div className="about-heading-txt">
                    {/* <h1><center>ABOUT ME</center> </h1> */}
                </div>

                <div className="about-outer">


                    <div className="about-inner-left">
                        <h1><b style={{ display: "block" }}> ABOUT ME</b></h1>
                        <p className="text-justify about-txt">
                            I am a final year student pursuing bachelors of technology in computer science. I am an innovative frontend Developer, creating amazing websites with interactive UIs, solving challenging problems and providing effective solutions.  I have a decent knowledge of fundamental subjects of engineering.
                            My field of expertise lie in Frontend Development amd Graphic Designing. Seeking to leverage
                            acquired skills and knowledge to effectively fulfill the
                            requirments.
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
