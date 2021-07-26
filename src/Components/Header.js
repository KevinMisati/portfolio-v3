import React from 'react'
import "./Header.css"
import Intro from "./Intro"

const Header = () => {
    return (
        <div class="header-banner">
            <section class="header">
                <header>
                    <div class="logo-container">
                        <div class="logo">

                            <h3 class=""><span>&lt;Kevin/&gt;</span></h3>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <button class="nav_toggle" aria-label="toggle-navigation">
                        <span class="humburger"></span>
                    </button>
                    <nav class="nav">
                        <ul class="nav_list">
                            <li class="nav_item"><a href="#home" class=" link1 nav_link">Home</a></li>
                            <li class="nav_item"><a href="#services" class=" link2 nav_link">My Services</a></li>
                            <li class="nav_item"><a href="#work" class="link4 nav_link">My Work</a></li>

                        </ul>
                    </nav>
                </header>
            </section>
            <Intro />
            </div>
    )
}

export default Header
