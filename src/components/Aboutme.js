import React from "react";
import { IoSpeedometerOutline, IoPhonePortraitSharp} from 'react-icons/io5';
import { HiSparkles } from "react-icons/hi";

import Face from "../images/Bruce-Hopkins-Jr.jpg"

const Aboutme = (props) => {

  return (

    <section className={props.hide ? 'About-me show-about-me' : 'About-me'} id="Who-Am-I">
        {/* Change all these divs into sectors */}
        <h2> Who Am I?</h2>
        <div className = "Who-am-I-container">
            <div className="Who-am-I-group">
                <div> <img alt="Bruce Hopkins Jr" className="avatar-circle" src={Face}/> </div>
                <ul>
                    <p>I'm  <strong>Bruce Hopkins Jr</strong>. I mainly create websites, but also have practiced in web scraping. I specialize in <strong>React</strong> web apps, as well as <strong>Node.js</strong> <br/> <br/>

                    I love solving new problems and discovering new technologies. I approach each problem as a learning experience. I use that experience to ensure that all of my projects are done in the best way possible, in both speed and efficiency. <br/> <br/> 

                    In my free time I enjoy trying out new projects with my <strong>Raspberry Pi</strong>, creating <strong>Python</strong> scripts or playing games.</p>
                </ul>
            </div>

        </div>



        <ul className="about-me-icon-group"> 
            <ul> 
                <div className="about-me-icon"> <IoSpeedometerOutline/> </div>
                <p>I ensure fast loading speeds to optimize both user experience and SEO.</p>
            </ul>
            <ul className="reverse">
                <div className="about-me-icon"> <IoPhonePortraitSharp/> </div>
                <p>My interactive design will adjust for all screen sizes.</p>
            </ul>

            <ul>
                <div className="about-me-icon">  <HiSparkles/>  </div>
                <p>I design UI that will keep the user engaged with your content.</p>
            </ul>
        </ul>
    </section>
  )
}

export default Aboutme