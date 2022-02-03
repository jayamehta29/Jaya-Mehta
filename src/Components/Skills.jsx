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
                            <div className="skill" onClick={()=>window.open("https://developer.mozilla.org/en-US/docs/Web/HTML")}><FontAwesomeIcon icon={faHtml5} />HTML</div>
                            <div className="skill" onClick={()=>window.open("https://developer.mozilla.org/en-US/docs/Web/CSS")}><FontAwesomeIcon icon={faCss3}  />CSS</div>
                            <div className="skill" onClick={()=>window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}><FontAwesomeIcon icon={faJs}  />JS</div>
                            <div className="skill" onClick={()=>window.open("https://www.pepcoding.com/resources/online-java-foundation")}><FontAwesomeIcon icon={faJava}  />JAVA</div>
                        </div>
                        <div className="sleft">
                            <div className="skill" onClick={()=>window.open("https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_apac_india_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624347&adgroup=115749713423&gclid=Cj0KCQiArt6PBhCoARIsAMF5wagtOFVkgGCbwbETpqp9s0Jws8-M8tk3qFFoqTveNJe0kJBTWvmIh30aAu1xEALw_wcB")}><FontAwesomeIcon icon={faDatabase}  />MongoDB</div>
                            <div className="skill" onClick={()=>window.open("https://expressjs.com/")}><FontAwesomeIcon icon={faCode}  />Express</div>
                            <div className="skill" onClick={()=>window.open("https://reactjs.org/")}><FontAwesomeIcon icon={faReact}  />REACTJS</div>
                            <div className="skill" onClick={()=>window.open("https://nodejs.org/en/")}><FontAwesomeIcon icon={faNodeJs}  />Node js</div>
                        </div>
                    </div>
                </div>
            </Element>

        </React.Fragment>
    )
}

export default Skills;
