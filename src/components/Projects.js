import * as React from 'react'
import Blog from '../images/Blog-Cleaner2.png'
import CodingSaturn from '../images/Coding-Saturn3.jpeg'
import GlitteringFoxReads from '../images/Glitteringfoxreads2.png'

function Projects(props) {
    return (
        <section className={props.hide ? 'projects show-projects' : 'projects'} ref={props.reference} id='Projects'>
            <h2>Projects</h2>
            <div className='projects-container'>
                <div className='projects-group'>

                    <a href='http://blog.infinidream.net/' target='_blank' rel='noopener noreferrer'>
                        <img alt='Project1' src={Blog}/>
                        <ul> 
                            <h4> Blog infinidream </h4>
                            <p>My current blog </p>
                            <p className='project-tags'> Tags: React, Gatsby, Node.js, Express.js </p>
                        </ul>
                    </a>
                    <a href='https://glitteringfoxreads.com/' target='_blank' rel='noopener noreferrer'>
                        <img alt='Project2' src={GlitteringFoxReads}/>
                        <ul> 
                            <h4> GlitteringFoxReads </h4>
                            <p> A blogging site made for book reviewing indie books.</p>
                            <p className='project-tags'> Tags: WordPress </p>
                        </ul>
                    </a>
                    <a href='https://bruce-hopkins-jr.github.io/Coding-Saturn/' target='_blank' rel='noopener noreferrer'>
                        <img alt='Project3' src={CodingSaturn}/>
                        <ul> 
                            <h4> Coding-Saturn </h4>
                            <p> A template for an online course. </p>
                            <p className='project-tags'> Tags: React, Gatsby </p>
                        </ul>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
