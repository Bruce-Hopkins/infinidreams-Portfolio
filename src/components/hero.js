import React from "react";

const Hero = (props) => {
  return (
    <section  className={props.hide ? 'Hero hero-hide' : 'Hero'}>
        <ul>
            <h1 >I'm <span className="highlight">Bruce</span> and I'm a Web Developer</h1>
        </ul>
    </section>
  )
}

export default Hero
