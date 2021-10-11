import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>

      <footer className="page-footer">

        <div className="footer-copyright text-center py-3" style={{ backgroundColor: "#363945" ,color:"white"}}>
          <div className="mb-3 flex-center" >

            {/* linkedin */}
            <a className="footer-link" href="https://linkedin.com/in/jayamehta29">
              <SocialIcon url="https://linkedin.com/in/jayamehta29" bgColor="white" style={{ color: "white", height: "30px", width: "30px", marginRight:"10px" }} />
            </a>

            {/* mail */}
            <a className="footer-link" href="https://www.instagram.com/jayamehta29/">
              <SocialIcon url="https://www.instagram.com/jayamehta29/" bgColor="white" style={{ color: "white", height: "30px", width: "30px", marginRight:"10px" }} />
            </a>

            {/* github */}
            <a className="footer-link" href="https://github.com/jayamehta29">
              <SocialIcon url="https://github.com/jayamehta29" bgColor="white" style={{ color: "white", height: "30px", width: "30px", marginRight:"10px" }} />
            </a>

          </div>
          {/* <hr></hr> */}
          © 2021 Jaya Mehta

        </div>


      </footer>

    </div>
  )
}

export default Footer
