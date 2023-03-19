import React from 'react'

import './about.css'

import ME from '../../assets/mear.jpg'

import{GiGears} from 'react-icons/gi'
import{AiOutlineProject} from 'react-icons/ai'

export default function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <GiGears className='about__icons'/>

              <h5>Skills</h5>
              
            </article>
            <article className='about__card'>
            <AiOutlineProject className='about__icons'/>

              <h5>Projects</h5>
              
            </article>

            
          </div>
          <p>A determined engineer, having a problem-solving mindset. Hands on HTML, CSS, Javascript, ReactJs, Bootstrap, Tailwind,npm, Json and GitHub. Looking forward to utilizing my current skillset and experience in the optimal growth of myself and the organization I will work for.</p>

        <a href="#contact" className='btn btn--primary'>
        Let's Talk
        </a>



        </div>
      </div>
    </section>
  )
}
