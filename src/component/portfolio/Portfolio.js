import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'

const data=[
  {
    id:1,
    image:IMG1,
    title:'SkinCare Fully-functional E-commerce Website',
    subtitle:'Tech used- HTML5, CSS3, Reactjs,nodejs,RestApi and json',
    github:'https://github.com/shahabhi095/SkinStore.com',
    demo:'https://super-kulfi-fe2f18.netlify.app'
  },
  {
    id:2,
    image:IMG2,
    title:'Brightline - A mental health website clone',
    subtitle:'Tech used- HTML5,CSS3,javascript',
    github:'https://github.com/aahan77/rugged-silk-4159',
    demo:'https://phenomenal-salamander-af1e19.netlify.app/'
  },
  {
    id:3,
    image:IMG3,
    title:'Disney+ Hotsar API website clone',
    subtitle:'Tech used - Vanilla Javascript',
    github:'https://github.com/aahan77',
    demo:'https://funny-zuccutto-efd32b.netlify.app'
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Project Works </h5>
      <h2>Portfolio</h2>

      
    <div className='.container portfolio__container'>
      {
        data.map(({id,image,title,subtitle,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        <div className="portfolio__item-cta">
        <a href={github} className='btn'>Github</a>
        <a href={demo} className='btn btn-primary' >Live Demo</a>
        </div>
      </article>
          )
        })
      }
     





    </div>

    </section>
  )
};
