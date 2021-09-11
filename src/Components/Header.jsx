import React from 'react'
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="outer">
            <div className="inner">
                <h1>WELCOME</h1>
                <Typed
                className="type-text"
                strings={["LEARN","PASSION","GROW"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="header-btn">Know More</a>
            </div>
        </div>
    )
}

export default Header
