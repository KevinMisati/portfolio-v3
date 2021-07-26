import React from 'react'


const Footer = () => {
    return (
        <footer>

            <h2 class="contact-title">Contact Me</h2>
            <div class="underline"></div>

            <a href="mailto:kevinmisati001@gmail.com" class="footer_link">kevinmisati001@gmail.com</a>

            <ul>
                <li class="footer_link"><a href="https://www.facebook.com/kevin.misati.37">
                    <i class="fab fa-facebook fa-fw fa-2x"></i></a></li>
               
                <li class="footer_link"><a href="https://api.whatsapp.com/send/?phone=254741154014&text&app_absent=0">
                    <i class="fab fa-whatsapp fa-fw fa-2x"></i></a></li>
                <li class="footer_link"><a href="https://github.com/KevinMisati">
                    <i class="fab fa-github fa-fw fa-2x"></i></a></li>
            </ul>
            <p class="copyright">Kevin Misati &copy;2020</p>
        </footer>
    )
}

export default Footer
