import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>

      <footer className="page-footer">
        <div className="footer-copyright text-center py-3" style={{ color:"white"}}>
          <div className="mb-3 flex-center" >
              <SocialIcon url="https://linkedin.com/in/jayamehta29" bgColor="white" style={{ color: "white", height: "30px", width: "30px", marginRight:"10px" }} />
              <SocialIcon url="mailto:jayamehta29@gmail.com" bgColor="white" style={{ color: "white", height: "30px", width: "30px", marginRight:"10px" }} />
              <SocialIcon url="https://github.com/jayamehta29" bgColor="white" style={{ color: "white", height: "30px", width: "30px", marginRight:"10px" }} />
          </div>
          © 2022 Jaya Mehta
        </div>
      </footer>

    </div>
  )
}

export default Footer
