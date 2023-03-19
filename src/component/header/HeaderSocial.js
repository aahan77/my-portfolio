import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
export default function HeaderSocial() {
  return (
    <div className='header__socials'>
<a href="https://www.linkedin.com/in/aahan-solanki-web-developer" target="_blank" > <BsLinkedin/>

</a>
<a href="https://github.com/aahan77" target="_blank">
    <BsGithub/>
</a>
<a href="https://www.instagram.com/aahansolanki" target="_blank">
    <BsInstagram/>
</a>
    </div>
  )
}
