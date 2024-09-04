import React from 'react'
import resume from "../../assets/Kester_Resume.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={resume} target="_blank" className='btn' rel="noreferrer">Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA