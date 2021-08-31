import React from "react";
import { FaChevronDown } from 'react-icons/fa';


const Hero = (props) => {
  return (
    <section  className={props.hide ? 'Hero hero-hide' : 'Hero'}>
        <ul>
          <span> 
            <h1 >I'm <span className="highlight">Bruce Hopkins Jr</span> and I'm a Web Developer</h1>
            <h3> Scroll Down</h3>
            <FaChevronDown className="hero-scroll-icon"/>
          </span>

        </ul>
    </section>
  )
}

export default Hero
