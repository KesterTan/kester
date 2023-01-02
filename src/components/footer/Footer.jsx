import React from 'react'
import './footer.css'
import { FiInstagram } from 'react-icons/fi'
import { SiDevpost, SiDiscord } from 'react-icons/si'
 
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>KESTER</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://discord.com/Retsek#3267"><SiDiscord /></a>
        <a href="https://www.instagram.com/kesterrr_/"><FiInstagram /></a>
        <a href="https://devpost.com/KesterTan"><SiDevpost /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kester Tan. All rights reserved, 2022.</small>
      </div>
    </footer>
  )
}

export default footer