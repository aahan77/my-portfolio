import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef } from 'react';
import emailjs from 'emailjs-com'


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j6dwpnt', 'template_u88fxrw', form.current, 'VEAgKXIn5fRQRU9J1')

    e.target.reset();
     
  };

  return (
    <section id='contact'><h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
        <AiOutlineMail className='contact__option-icon'/>

          <h4>Email</h4>
          <h5>solankiaahan@gmail.com</h5>
          <a href="mailto:solankiaahan@gmail.com" target='_blank'>Send a message</a>
        </article>

        <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>

          <h4>WhatsApp</h4>
          <h5>+91 9993343796</h5>
          <a href="https://api.whatsapp.com/send?phone=919993343796" target='_blank'>Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>

  )
}
