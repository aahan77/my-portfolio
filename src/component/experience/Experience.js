import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {DiNodejsSmall} from 'react-icons/di'
import {SiBootstrap} from 'react-icons/si'
import {TbBrandTailwind} from 'react-icons/tb'

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <AiFillHtml5/>
            <h4>HTML5</h4>
            
          </article>
            <article className='experience__details'>
            <IoLogoCss3/>
            <h4>CSS3</h4>
            
            </article>
            <article className='experience__details'>
            <TbBrandJavascript/>
            <h4>Javascript</h4>
            
            </article>
            <article className='experience__details'>
            <FaReact/>
            <h4>Reactjs</h4>
            
            </article>
            <article className='experience__details'>
            <AiFillGithub/>
            <h4>Github</h4>
            
            </article>

            <article className='experience__details'>
            <DiNodejsSmall/>
            <h4>Nodejs</h4>
            </article>
            <article className='experience__details'>
            <SiBootstrap/>
            <h4>Bootstrap</h4>
            </article>
            <article className='experience__details'>
            <TbBrandTailwind/>
            <h4>Tailwind css</h4>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  )
}
