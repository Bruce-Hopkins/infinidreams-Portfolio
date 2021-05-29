import * as React from "react"

import TwitterIcon from "../images/Socail-media/2021 Twitter logo - white.png"
import GithubIcon from "../images/Socail-media/GitHub-Mark-Light-64px.png"
import EmailIcon from "../images/Socail-media/icons8-email-64.png"

function Footer(props) {
  return (
    <footer className="footer" id="Contact">
        
        <div className="footer-container">
        <h2> Contact </h2>
            <div className="footer-group">
                <a href="https://twitter.com/InfiniDreams1" target="_blank" rel="noopener noreferrer" > <img src={TwitterIcon} alt="Twitter icon"/> @InfiniDreams1 </a>
                <a href="https://github.com/Bruce-Hopkins-Jr" target="_blank" rel="noopener noreferrer">  <img src={GithubIcon} alt="Github Icon"/> Bruce-Hopkins-Jr </a>
                <a href="mailto: sales@budgetchamp.net" target="_blank" rel="noopener noreferrer"> <img src={EmailIcon} alt="Email Icon"/>  sales@budgetchamp.net </a>              
            </div>
        </div>
            <p className="copyright"> &copy; Bruce Hopkins Jr Infinidreams </p>
    </footer>
  )
}

export default Footer
