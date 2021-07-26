import React from 'react'

const Projects = () => {
    return (
        <section class="my_work" id="work">
            <h2 class="section_title section_title_projects"> My Projects</h2>
            <div class="underline"></div>
            <p style={{ textAlign: "center", fontSize: ".9rem"}}><i >click on the images to view them live</i></p>
            <p class="section_subtitle"></p>

            <div class="projects">


               
                <div class="project">
                    <div class="project-image-div project-3">
                        <a href="https://jumia-clone1.netlify.app/">
                            <img src="./images/jumia.png" alt="${alt}" />
                        </a> </div>
                </div>
               

                <div class="project">
                    <div class="project-image-div project-1">
                        <a href="https://phon-store.netlify.app/">
                            <img class="project-1" src="./images//store.png" alt="${alt}" />
                        </a> </div>
                </div>

                <div class="project">
                    <div class="project-image-div project-3">
                        <a href="https://we-build1.netlify.app/">
                            <img src="./images//construction.png" alt="${alt}" />
                        </a> </div>
                </div>



             
                <div class="project">
                    <div class="project-image-div project-3">
                        <a href="https://nasaapii.netlify.app/">
                            <img src="./images/nasa.png" alt="${alt}" />
                        </a> </div>
                </div>
              
                <div class="project">
                    <div class="project-image-div project-3">
                        <a href="https://50fe1.web.app/">
                            <img src="./images/amazon.png" alt="${alt}" />
                        </a>
                    </div>
                </div>
               
                <div class="project">
                    <div class="project-image-div project-3">
                        <a href="https://kevinhospital.netlify.app/">
                            <img src="./images/FireShot Capture 028 - Hospital website - kevinhospital.netlify.app.png" alt="${alt}" />
                        </a>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default Projects
