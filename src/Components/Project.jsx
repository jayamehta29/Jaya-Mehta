import React from 'react'
import { Element } from 'react-scroll'
import { Carousel } from 'react-bootstrap';
import prj1 from "../prj1.jpg";
import prj2 from "../prj2.jpg";
import { Link } from 'react-scroll';
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
    return (
        <React.Fragment>

            <Element id='project' name='Project'>
                <div className="prj-outer" >
                    <h1 style={{ color: "#f9ab00", textAlign: "center", backgroundColor: "#212529" }}>PROJECTS</h1>
                    <Carousel style={{ backgroundColor: "#212529" }} slide={true} fade={false}>
                        <Carousel.Item >

                            <img
                                className="d-block  cimg"
                                src={prj2}
                                alt="First slide"
                                onClick={() => window.open("https://movie-app-clone.herokuapp.com/")}
                            />

                            <Carousel.Caption >
                                <h3 style={{ color: 'white' }}>NETFLIX CLONE</h3>
                                <p style={{ color: "white" }}>It is a basic movie application.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block  cimg"
                                src={prj1}
                                alt="First slide"
                                onClick={() => window.open("https://s-c-r-a-t-c-h.herokuapp.com/")}
                            />
                            <Carousel.Caption >
                                <h3 style={{ color: "#f9ab00" }}>WHITEBOARD APPLICATION</h3>
                                <p style={{ color: "#f9ab00" }}>A MULTI-PURPOSE WHITEBOARD APPLICATION</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Element>

        </React.Fragment>
    )
}

export default Project
