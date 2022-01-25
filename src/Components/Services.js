import React from 'react'
import "./Services.css"
import coderImg from "../images/developer.png"

const Services = () => {
    return (
        <>
        <section class="my_services" id="services">
<h2 class="section_title section_title_services">What I do</h2>
<div class="underline"></div>
<div class="services">
    <img alt="coding" src={coderImg} />

    <div class="services_text">
        <p>I love and enjoy building cool stuff for the web. I enjoy spending my free time increasing my knowledge on Web Development and building new and
        challenging projects.
</p>
       
    </div>

</div>
<a href="#work" class="btn">My work</a>
</section >
</>
    )
}

export default Services
