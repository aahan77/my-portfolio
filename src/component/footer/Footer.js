import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Aahan</a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        
        
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/aahansolanki">
          <BsInstagram/>
        </a>
        <a href="https://twitter.com/SolankiAahan">
          <AiFillTwitterCircle/>
        </a>
        <a href="https://www.linkedin.com/in/aahan-solanki-web-developer">
          <AiFillLinkedin/>
        </a>
      </div>

      <div className="footer__copyright">
        <small> Made with Reactjs by Aahan Solanki. &copy;All rights reserved</small>
      </div>
    </footer>
  )
}
