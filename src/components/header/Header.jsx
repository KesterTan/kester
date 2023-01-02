import React from 'react'
import CTA from "./CTA"
import me from "../../assets/Pic1.jpeg"
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-heavy">
          Hello I'm
        </h5>
        <h1 className="text-heavy">
          Kester Tan
        </h1>
        <h5 className="text-light">
          Fullstack Software Engineer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img className='me__img' src={me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header