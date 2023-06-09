import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aahan Solanki</h1>
        <h5 className="text-light">Web Developer/Designer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me" ><img src={me} alt="" /></div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        
      </div>
    </header>
  )
}

