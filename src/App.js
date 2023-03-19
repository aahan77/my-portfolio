import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Portfolio from './component/portfolio/Portfolio'

import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'


export default function App() {
  return (
    <div>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Portfolio/>
   {/* <Testimonies/> */}
   <Contact/>
   <Footer/>
        
    </div>
  )
}
