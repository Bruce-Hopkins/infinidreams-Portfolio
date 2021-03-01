import React, {useState, useLayoutEffect, useRef} from "react";

import Hero from "./components/hero"
import Aboutme from "./components/Aboutme"
import Sidebar from "./components/Sidebar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"


function Main() {

  
  const [show, doShow] = useState({
    heroAndSidebarTransition: false,
    aboutMeTransition: false,
    skillsTransition: false,
    projectsTransition:false, 
  });

  // converting skillsRef and projectsRef into refs.
  const skillsRef = useRef(null),
  projectsRef = useRef(null);

useLayoutEffect(() => { 

    //Top position of the screen
    const topPos = element => element.getBoundingClientRect().y;
   
    // The current postions of the refs
    const divPos = topPos(ourRef.current);
    const divPos2 = topPos(twoRef.current);
    //cmjincjsncjksnjs

     const onScroll = () => {
        // The window scroll
        const scrollPos = window.scrollY;

        /* Using element alignment make sure that the position of the element doesn't change.
        Because when the user scrolls, the top position of the element changes. This formula makes sure
        that every change in state occures when the pos of the component is less than half of the pos of the
        scroll.
        */
        const elementAlignment = window.scrollY - window.screen.availHeight * 0.6;


        // Change states depending on the scroll pos.
        if (scrollPos > 5) {
            doShow(state => ({ ...state, heroAndSidebarTransition: true }));
            doShow(state => ({ ...state, aboutMeTransition: true }));
        }
        else {
            doShow(state => ({ ...state, heroAndSidebarTransition: false }));
        }
        if (scrollPos > divPos + elementAlignment) {
            doShow(state => ({ ...state, skillsTransition: true }));
        }
        if (scrollPos> divPos2 + elementAlignment) {
            doShow(state => ({ ...state, projectsTransition: true }));
        }

    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
})
   return (
    <main>
      <Sidebar hide={show.heroAndSidebarTransition} />
      <Hero hide={show.heroAndSidebarTransition}> </Hero> 
      <Aboutme hide={show.aboutMeTransition}/>
      <Skills reference={skillsRef} hide={show.skillsTransition}/>
      <Projects reference={projectsRef} hide={show.projectsTransition}/>
      <Footer/>
    </main>
  )
}

export default Main
