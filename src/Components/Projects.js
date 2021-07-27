import React from 'react'
import "./Projects.css"

const projects = [
    {
        title:"Jumia",
        url: "https://jumia-clone1.netlify.app/",
        img: "./images/jumia.png",
        techs: [],
        desc:""
    },
     {
        title:"Phone store",
         url: "https://phon-store.netlify.app/",
         img: "./images//store.png",
        techs: [],
        desc:""
    },
    {
        title: "Amazon clone",
        url: "https://50fe1.web.app/",
        img: "./images/amazon.png",
        techs: [],
        desc: ""
    },
    {
        title: "Hospital",
        url: "https://kevinhospital.netlify.app/",
        img: "./images/FireShot Capture 028 - Hospital website - kevinhospital.netlify.app.png",
        techs: [],
        desc: ""
    },
]

const Projects = () => {
    return (
        <section class="my_work" id="work">
            <h2 class="section_title section_title_projects"> My Projects</h2>
            <div class="underline"></div>
            <p style={{ textAlign: "center", fontSize: ".9rem"}}><i >click on the images to view them live</i></p>
            <p class="section_subtitle"></p>

           

            <div class="projects">
                {projects.map((project) => {
                    return (
                        <div class="project">
                            <div class="project-image-div project-3">
                                <a href={project.url} >
                                    <img src={project.img} alt={project.title} />
                                </a> </div>
                        </div>
                    )
                })}
                </div>
               
           
        </section>
    )
}

export default Projects
