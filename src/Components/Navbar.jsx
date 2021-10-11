import React from 'react'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from 'react-social-icons';

import profile from "../SVG/Asset 2.svg";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-light bg-dark ">
                <div className="container">
                    <a className="navbar-brand" href="#Home">
                        <img  src={profile} className="navbar-img"/>
                        <span className="name">JAYA MEHTA</span>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="nav-item active"
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link"
                                >ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="nav-item active"
                                    to="Project"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link"
                                >PROJECTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="nav-item active"
                                    to="Skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link"
                                >SKILLS</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="nav-item active"
                                    to="Experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link"
                                >EXPERIENCE</Link>
                            </li>

                            <li>
                                <a className="nav-link" href="https://github.com/jayamehta29">
                                    <SocialIcon url="https://github.com/jayamehta29" bgColor="white" style={{ color: "white", height: "30px", width: "30px" }} />
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="https://linkedin.com/in/jayamehta29">
                                    <SocialIcon url="https://linkedin.com/in/jayamehta29" bgColor="white" style={{ color: "white", height: "30px", width: "30px"}} />
                                </a>
                            </li>
                            {/* </li> */}
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar
