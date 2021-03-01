import * as React from "react"
import Coby from "../images/Cobydesigns2.png"
import CodingSaturn from "../images/Coding-Saturn3.jpeg"
import GlitteringFoxReads from "../images/Glitteringfoxreads2.png"

function Projects(props) {
  return (
    <section className={props.hide ? 'projects show-projects' : 'projects'} ref={props.reference} id="Projects">
        <h2>Projects</h2>
        <div className="projects-container">
            <div className="projects-group">

                    <a href="http://cobydesigns.budgetchamp.net/" target="_blank" rel="noopener noreferrer">
                        <img alt="Project1" src={Coby}/>
                        <ul> 
                            <h4> Cobydesigns </h4>
                            <p>My old portfoloio </p>
                            <p className="project-tags"> Tags: WordPress, Bootstrap </p>
                        </ul>
                    </a>
                    <a href="https://glitteringfoxreads.com/" target="_blank" rel="noopener noreferrer">
                        <img alt="Project2" src={GlitteringFoxReads}/>
                        <ul> 
                            <h4> GlitteringFoxReads </h4>
                            <p> A blogging site made for book reviewing indie books.</p>
                            <p className="project-tags"> Tags: WordPress </p>
                        </ul>
                    </a>
                    <a href="https://bruce-hopkins-jr.github.io/Coding-Saturn/" target="_blank" rel="noopener noreferrer">
                        <img alt="Project3" src={CodingSaturn}/>
                        <ul> 
                            <h4> Coding-Saturn </h4>
                            <p> A template for a group of developers who host online classes. </p>
                            <p className="project-tags"> Tags: React, Gatsby </p>
                        </ul>
                    </a>
            </div>
        </div>
    </section>
  )
}

export default Projects
