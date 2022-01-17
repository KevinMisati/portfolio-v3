import React, { useState } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"

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
            <div className="main-header-banner" >
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
                        <nav className="nav" >
                            <ul className="nav_list">
                                <li onClick={handleNavRemoval} className="nav_item">
                                    <Link to="/" className=" link1 nav_link">Home</Link>
                                </li>
                                <li onClick={handleNavRemoval} className="nav_item">
                                    <Link to="/#services" className=" link2 nav_link">Services</Link>
                                </li>
                                <li onClick={handleNavRemoval} className="nav_item">
                                    <Link to="/#work" className="link4 nav_link">Projects</Link>
                                </li>

                            </ul>
                        </nav>
                    </header>
                </section>

            </div>
        </div>
    )
}

export default Header
