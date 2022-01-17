import React,{useState} from 'react'
import "./HomeHeader.css"
import Intro from "./Intro"
import {Link} from "react-router-dom"

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    const handleHarmbuggerClick = () => {
        setIsMobileNavOpen(!isMobileNavOpen)
        const nav = document.getElementById("nav")
        nav.classList.toggle("nav_open")
        console.log(nav)
       
    }
    const handleNavToggle = () => {
       
    }
    const handleNavRemoval = () => {
        const nav = document.getElementById("nav")
        nav.classList.remove("nav_open")
        console.log("hello there")
    }
    return (
        <div id="nav" onClick={handleNavToggle} >
            <div className="header-banner" >
            <section className="header">
                <header>
                    <div className="logo-container">
                        <div className="logo">

                            <Link to="/">
                                <h3 className=""><span>&lt;Kevin/&gt;</span></h3>
                            </Link>
                        </div>
                    </div>
                    <button onClick={handleHarmbuggerClick} className="nav_toggle" aria-label="toggle-navigation">
                        <span className="humburger"></span>
                    </button>
                    <nav className= "nav" >
                        <ul className="nav_list">
                                <li onClick={handleNavRemoval}  className="nav_item"><a href="#home" className=" link1 nav_link">Home</a></li>
                                <li onClick={handleNavRemoval}className="nav_item"><a href="#services" className=" link2 nav_link">Services</a></li>
                                <li onClick={handleNavRemoval}className="nav_item"><a href="#work" className="link4 nav_link">Projects</a></li>

                        </ul>
                    </nav>
                </header>
            </section>
            <div className="intro-main-container">
                    <Intro />
            </div>
            
            </div>
    </div>
    )
}

export default Header
