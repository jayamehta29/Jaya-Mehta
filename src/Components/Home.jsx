import React from 'react'
import { Link } from 'react-scroll';
import Typed from "react-typed";
import About from "./About";
import { SocialIcon } from 'react-social-icons';
// import homeimg from "../SVG/myPhoto.jpeg";
// import profile from "../SVG/home_img.svg";
// import profile from "../SVG/about_image.svg";
import profile from "../SVG/myPhoto-removebg-preview.png";
// import profile from "../SVG/WhatsApp_Image_2022-01-10_at_5.59.43_PM-removebg-preview.png";


const Home = () => {
    return (
        <div className="outer">
            <div className='home-icons'>
                <div className="icon">
                    <a href="https://github.com/jayamehta29">
                        <SocialIcon url="https://github.com/jayamehta29" bgColor="white" style={{ color: "white", height: "30px", width: "30px" }} />
                    </a>

                </div>
                <div className="icon">
                    <a href="https://linkedin.com/in/jayamehta29">
                        <SocialIcon url="https://linkedin.com/in/jayamehta29" bgColor="white" style={{ color: "white", height: "30px", width: "30px" }} />
                    </a>
                </div>
                <div className="icon">
                    <a className="footer-link" href="mailto:jayamehta29@gmail.com">
                        <SocialIcon url="mailto:jayamehta29@gmail.com" bgColor="white" style={{ color: "white", height: "30px", width: "30px", marginRight: "10px" }} />
                    </a>
                </div>
            </div>
            {/* <div className="circle"> */}
                <img src={profile} className="home_img" />
            {/* </div> */}
            
            {/* <img src={homeimg} className='home_img'/> */}
            <figure className="text-end myclass">
                <p className='inner'>
                    <h1 >Hello, world!</h1>
                    <h6 className="text-end text-justify"></h6>
                    <p>
                        <h1> {`{I am Jaya Mehta}`}</h1>
                        <br></br>
                        <h6>A Frontend Developer and </h6>
                        <h6>Graphic Designer based in New Delhi, India.</h6>
                        <h6>I love to design simple User Interfaces </h6>
                        <h6>and develop Websites</h6>
                    </p>

                    <Typed
                        className="type-text"
                        strings={["LEARN", "CODE", "REPEAT"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                    <br />
                    <Link
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <button type="button" className="btnclass" onClick={About}>KNOW MORE</button>
                    </Link>
                </p>

            </figure>
        </div>
    )
}

export default Home;
