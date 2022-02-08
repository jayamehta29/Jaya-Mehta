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
                <h1 style={{ textAlign: "center" }}>PROJECTS</h1>
                <Carousel style={{ backgroundColor: "#212529" }} slide={true} fade={false}>
                    <Carousel.Item>
                        <div className="prj-inner">
                            <div className="left-crsl">
                                <h2 style={{ color: "white" }}>SCRATCH</h2>
                                <div className="txt">
                                    <div>A MULTI-PURPOSE WHITEBOARD APPLICATION
                                    </div>
                                    <div className="para">
                                        <div>FEATURES:</div>
                                        <div>1. Basic whiteboard for personal use.</div>
                                        <div>2. Sharing whiteboard using socket.io .</div>
                                        <div>3. Implemented Chat feature with a whiteboard.</div>
                                        <div>Tech Stack used : Node JS, Express, Socketio and Javascript.</div>
                                    </div>

                                </div>
                                <div className="btns">
                                    <button className="cbtn" onClick={() => window.open("https://s-c-r-a-t-c-h.herokuapp.com/")}><FontAwesomeIcon icon={faPlay} style={{ marginRight: "1rem", width: "1rem", height: "1rem" }} />DEPLOYMENT</button>
                                    <button className="cbtn" onClick={() => window.open("https://github.com/jayamehta29/Pep_Scratch")}>SOURCE CODE</button>
                                </div>
                            </div>
                            <img src={prj1} onClick={() => window.open("https://s-c-r-a-t-c-h.herokuapp.com/")} className="d-block cimg" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="prj-inner">
                            <div className="left-crsl">
                                <h2 style={{ color: "white" }}>NETFLIX CLONE</h2>
                                <div className="txt">
                                    <div>A BASIC OTT MOVIE APPLICATION</div>
                                    <div className="para">
                                        <div>FEATURES:</div>
                                        <div>1. Display of clickable movie images on the home page using
                                            IMDb API.</div>
                                        <div>2. Implemented search functionality.</div>
                                        <div>3. Created a movie page component that displays the discription</div> 
                                        <div>and trailor of the movie.</div>
                                        <div>Tech Stack used : REACTJS.</div>
                                    </div>

                                </div>
                                <div className="btns">
                                    <button className="cbtn" onClick={() => window.open("https://movie-app-clone.herokuapp.com/")}><FontAwesomeIcon icon={faPlay} style={{ marginRight: "1rem", width: "1rem", height: "1rem" }} />DEPLOYMENT</button>
                                    <button className="cbtn" onClick={() => window.open("https://github.com/jayamehta29/democode/tree/master/MODULE3_React/moviesapp")}>SOURCE CODE</button>
                                </div>
                            </div>
                            <img src={prj2} onClick={() => window.open("https://movie-app-clone.herokuapp.com/")} className="d-block cimg" />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Element>

        </React.Fragment>
    )
}

export default Project
