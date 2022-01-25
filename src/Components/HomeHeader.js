import React from 'react'
import "./HomeHeader.css"
import Intro from "./Intro"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div id="nav"  >
            <div className="header-banner" >
            <div className="intro-main-container">
                    <Intro />
            </div>
            
            </div>
    </div>
    )
}

export default Header
