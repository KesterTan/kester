import React from 'react'
import './about.css'
import me from '../../assets/Image_2.JPG'
import {FaAward} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {AiOutlineFire} from 'react-icons/ai'

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className='about__card'>
              <MdSchool className='about__icon' />
              <h5>Studies</h5>
              <small>Carnegie Mellon University undergrad</small>
            </article>

            <article className='about__card'>
              <AiOutlineFire className='about__icon' />
              <h5>Interested in</h5>
              <small>Entrepreneurship and startups</small>
            </article>

          </div>
          <p>
          Since young, I've loved solving problems. 
          </p>
          <p>
          From championing a cause to dispel misconceptions about Parkinson’s disease to piecing together puzzles at home, 
          I constantly look for new challenges and problems to solve. This insatiable thirst for problem-solving led me to the world of 
          tech, startups, and computer science.</p>
          <p>
          In my spare time, I read books about tech and controversial issues and continue to pick up new skills in programming.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about