import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import logo from "../Images/netflixlogo.png"
import avatar from "../Images/avatar.png"
import {Link} from "react-router-dom"
function NavBar() {

    const [scroll, setScroll] = useState(false)

    const transitionNavBar = () =>
    {
        if(window.scrollY>100)
        {
            setScroll(true)
        }
        else
        {
            setScroll(false)
        }
    }

    useEffect(() =>
    {
    
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    },[])

    return (
        <nav className={`nav-bar  ${scroll && 'nav_bar__black'}`}>
            <div className="nav-content">
                
                <Link to="/">
                    <img className="logo"
                        src={logo}
                        alt="Netflix Logo" 
                    />
                </Link> 

                <Link to="/profile">
                    <img className="avatar"
                        src={avatar}
                        alt="Netflix Avatar" 
                    />
                </Link>


            </div>
        </nav>
    )
}

export default NavBar
