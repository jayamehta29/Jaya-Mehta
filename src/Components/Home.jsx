import React from 'react'
import { Link } from 'react-scroll';
import Typed from "react-typed";
import About from "./About";
const Home = () => {
    return (
        <div className="outer">
            <div className="inner">

                <figure className="text-end myclass">
                    <h1 >Hello, world!</h1>
                    <h4 className="text-end text-justify"></h4>
                    <h4>I am Jaya Mehta</h4>
                    <h4>Graphic Designer and Web Developer</h4>
                    <h4>from New Delhi, India.  </h4>
                    <p><Typed
                        className="type-text"
                        strings={["LEARN", "CODE", "REPEAT"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    /></p>
                    <Link 
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        <button type="button" className="btn btn-warning"  onClick={About}>KNOW MORE</button>
                    </Link>

                </figure>




            </div>
        </div>
    )
}

export default Home;
