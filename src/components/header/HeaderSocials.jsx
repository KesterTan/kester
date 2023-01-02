import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/tankester/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/KesterTan" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/kesterrr_/" target="_blank" rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials