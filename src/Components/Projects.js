import React from 'react'
import "./Projects.css"
import {Link} from "react-router-dom"

export const projects = [
    {
        title:"Electronics Shop",
        url: "https://electron-shop.herokuapp.com/",
        img: "./images/electronics.png",
        techs: [],
        desc:""
    },
    {
        title: "Jumia",
        url: "https://jumia-clone1.netlify.app/",
        img: "./images/jumia.png",
        techs: [],
        desc: ""
    },
     {
        title:"Snap Shots",
         url: "https://photos01.netlify.app/",
         img: "./images/snapshot.png",
        techs: [],
        desc:""
    },
    {
        title: "Hospitality Website",
        url: "https://liviti.netlify.app/",
        img: "./images/livit.png"
    },
    {
        title: "Construction company",
        url: "https://we-build1.netlify.app/",
        img:"./images/construction.png"
     },
    {
        title: "Nasa api",
        url: "https://nasaapii.netlify.app/",
        img: "./images/nasa.png",
        techs: [],
        desc:""
     },
]

const Projects = () => {
    return (
        <section class="my_work" id="work">
            <h2 class="section_title section_title_projects"> My Projects</h2>
            <div class="underline"></div>
            <p style={{ textAlign: "center", fontSize: ".9rem"}}><i >click on the images to view them live</i></p>
            <p class="section_subtitle"></p>

           
            <div class="projects-container">
            <div class="projects">
                {projects.map((project) => {
                    return (
                        <div class="project">
                            <div class="project-image-div project-3">
                                {/* <div className="links">
                                <Link to={`project/${project.title}`}>More info</Link>
                                <a target="_blank" href={project.url} >View site</a>
                                </div> */}
                                <Link to={`project/${project.title}`}>
                                    <img src={project.img} alt={project.title} />
                                </Link>
                                
                            </div>
                        </div>
                    )
                })}

               
            </div>
            </div>
        </section>
    )
}

export default Projects
