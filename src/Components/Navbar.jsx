import React from 'react'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import profile from "../SVG/Asset 2.svg";

const Navbar = () => {
    return (
        <>
        
            <nav className="navbar navbar-inverse  fixed-top  navbar-expand-lg bg "> 
                <div className="container">
                    <a className="navbar-brand" href="#Home">
                        <img  src={profile} className="navbar-img"/>
                        <span>Jaya Mehta</span>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
                    </button>

                    <div className="collapse navbar-collapse adjust" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
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
                                >About</Link>
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
                                >Projects</Link>
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
                                >Skills</Link>
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
                                >Experience</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar
