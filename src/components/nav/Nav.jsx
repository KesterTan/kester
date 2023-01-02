import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineMail} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import { useState } from 'react'
import {MdWorkOutline} from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSkills /></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBook /></a>
      <a href="#work" onClick={()=>setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav