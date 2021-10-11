import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Element } from 'react-scroll'
import { faReact, faNodeJs, faHtml5, faCss3, faJava, faJs } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons"



const Skills = () => {
    return (
        <React.Fragment>

            <Element id='skills' name='Skills'>
                <div className="skill-outer">
                    <h1><b style={{ display: "block", textAlign: "center", marginBottom: "1rem" }}>Skills & Technologies</b></h1>
                    <div className="font-weight-light text-center skillTxt"> I have a decent knowledge of fundamental subjects of engineering, data structures and algorithms </div>
                    <div className="font-weight-light text-center skillTxt">and hands on experience in web development and graphic designing. </div>
                    <div className="skills-inner">
                        <div className="sright">
                            <div className="skill">
                                <div className="skill-icon" ><FontAwesomeIcon icon={faHtml5} /></div>
                                <div className="skill-txt">HTML</div>
                            </div>
                            <div className="skill">
                                <div className="skill-icon"><FontAwesomeIcon icon={faCss3} /></div>
                                <div className="skill-txt">CSS</div>
                            </div>
                            <div className="skill">
                                <div className="skill-icon"><FontAwesomeIcon icon={faJs} /></div>
                                <div className="skill-txt">JS</div>
                            </div>
                            <div className="skill">
                                <div className="skill-icon"><FontAwesomeIcon icon={faJava} /></div>
                                <div className="skill-txt">JAVA</div>
                            </div>
                        </div>
                        <div className="sleft">
                            <div className="skill"><FontAwesomeIcon icon={faDatabase} className="skill-icon" />MongoDB</div>
                            <div className="skill"><FontAwesomeIcon icon={faCode} className="skill-icon" />Express</div>
                            <div className="skill"><FontAwesomeIcon icon={faReact} className="skill-icon" />REACTJS</div>
                            <div className="skill"><FontAwesomeIcon icon={faNodeJs} className="skill-icon" />Node js</div>
                        </div>


                    </div>


                </div>
            </Element>

        </React.Fragment>
    )
}

export default Skills;
