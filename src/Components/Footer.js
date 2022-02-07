import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        
        <footer>

            <h2 class="section_title contact-title">Contact Me</h2>
            <div class="underline"></div>

            <a href="mailto:kevinmisati001@gmail.com" class="footer_link">kevinmisati001@gmail.com</a>

            <ul>
                <li class="footer_link">
                    <a rel='' href="https://www.facebook.com/kevin.misati.37" target="_blank">
                    <i class="fab fa-facebook fa-fw fa-2x"></i>
                    </a>
                </li>
               
                <li class="footer_link">
                    <a href="https://www.linkedin.com/in/kevin-misati-b5a399208/" target="_blank">
                    <i class="fab fa-linkedin fa-fw fa-2x">

                    </i>
                    </a>
                    </li>
                <li class="footer_link">
                    <a href="https://github.com/KevinMisati" target="_blank">
                    <i class="fab fa-github fa-fw fa-2x"></i>
                    </a></li>
            </ul>
            <p class="copyright">Kevin Misati &copy;2022</p>
        </footer>
    )
}

export default Footer
