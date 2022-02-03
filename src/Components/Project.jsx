import React from 'react'
import { Element } from 'react-scroll'
import { Carousel } from 'react-bootstrap';
import prj1 from "../prj1.jpg";
import prj2 from "../prj2.jpg";
import { Link } from 'react-scroll';
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons"

const Project = () => {
    return (
        <React.Fragment>

            <Element id='project' name='Project'>
                <div className="prj-outer" >
                    <h1 style={{textAlign: "center" }}>PROJECTS</h1>
                    <Carousel style={{ backgroundColor: "#212529" }} slide={true} fade={false}>
                        <Carousel.Item >
                            <div className="left-crsl">
                                <h2 style={{ color: "white" }}>SCRATCH</h2>
                                <div className="txt" style={{ width: "50%", }}>
                                    <div className="text-md-left" style={{ color: "#676576" }}>A MULTI-PURPOSE WHITEBOARD APPLICATION</div>
                                </div>
                                <div className="btns">
                                    
                                    <button className="cbtn diff-btn btnclass" onClick={() => window.open("https://s-c-r-a-t-c-h.herokuapp.com/") }><FontAwesomeIcon icon={faPlay} style={{ marginRight: "10px" }} />DEPLOYMENT</button>
                                    <button className="cbtn " onClick={() => window.open("https://github.com/jayamehta29/Pep_Scratch")}>SOURCE CODE</button>
                                </div>
                            </div>
                            <img src={prj1} className="d-block cimg" style={{ marginTop: "2rem", width: "30%", height: "300px", marginBottom: "30px", marginLeft: "47rem" }} />
                        </Carousel.Item>
                        <Carousel.Item >
                            <div className="left-crsl">
                                <h2 style={{ color: "white" }}>NETFLIX CLONE</h2>
                                <div className="txt" style={{ width: "50%", }}>
                                    <div className="text-md-left" style={{ color: "#676576" }}>A BASIC OTT MOVIE APPLICATION</div>
                                </div>
                                <div className="btns">
                                    <button className="cbtn diff-btn btnclass" onClick={() => window.open("https://movie-app-clone.herokuapp.com/") }><FontAwesomeIcon icon={faPlay} style={{ marginRight: "10px" }} />DEPLOYMENT</button>
                                    <button className="cbtn" onClick={() => window.open("https://github.com/jayamehta29/democode/tree/master/MODULE3_React/moviesapp")}>SOURCE CODE</button>
                                </div>
                            </div>
                            <img src={prj2} className="d-block cimg" style={{ marginTop: "2rem", width: "30%", height: "300px", marginBottom: "30px", marginLeft: "47rem" }} />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Element>

        </React.Fragment>
    )
}

export default Project
