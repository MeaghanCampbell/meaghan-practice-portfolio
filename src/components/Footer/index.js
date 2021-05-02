import React from 'react'
import Instagram from '../../assets/Instagram.png'
import LinkedIn from '../../assets/Linkedin.png'
import Github from '../../assets/Github.png'

function Footer() {
    return (
        <footer>
            <div className="icon-container">
                <a href="https://github.com/MeaghanCampbell"><img className="icon" src={Github} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/meaghanmcnarycampbell/"><img className="icon" src={LinkedIn} alt="Linkedin" /></a>
                <a href="https://instagram.com/meaghanmcbell"><img className="icon" src={Instagram} alt="Instagram" /></a>
            </div>
            <h2>&copy; 2021 Meaghan Campbell. All rights reserved.</h2>
        </footer>
    )
}

export default Footer;