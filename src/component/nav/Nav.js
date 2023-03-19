import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BsGear} from 'react-icons/bs'
import {AiOutlineProject} from 'react-icons/ai'
import {MdContactPhone} from 'react-icons/md'

import { useState } from 'react'

export default function Nav() {
  const [activeNav , setActiveNav]=useState("#");
  return (
    <nav>
      <a href="#top" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}>
        <AiOutlineHome/>
      </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUserAdd/></a>
      <a href="#experience"onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BsGear/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}>
        <AiOutlineProject/>
      </a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''} >
        <MdContactPhone/>
      </a>
    </nav>
  )
}
