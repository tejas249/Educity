
import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import About from './components/About/About'
import Title from './components/Title/Title'
import Title2 from './components/Title2/Title2'
import Campus from './components/Campus/Campus'
import Title3 from './components/Title3/Title3'
import Testimonials from './components/Testimonials/Testimonials'
import Title4 from './components/Title3/Title4'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App  = () => {
  return (
    <div>
       <NavBar/>
       <Hero/>
       <div className="container">
         <Title />
         <Programs/>
         <About/>
         <Title2/>
         <Campus/>
         <Title3/>
         <Testimonials/>
         <Title4/>
         <Contact/>
         <Footer/>
       </div>
      
      
    </div>
  )
}

export default  App