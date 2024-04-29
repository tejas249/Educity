import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about' name='about'>

       <div className="about-left">
          <img src={about_img} alt="" className="about_img" />
           <img src={play_icon} alt="" className="play_icon" />
       </div>

       <div className="about-right">
            <h3>Abour University </h3>
            <h2>Nurturing Tomorrows Leaders Today </h2>
            <p>Embark on a tranformational educational journey with our universities 
                comprehensive education programs. Our cutting edge curriculum is designed 
                to empower students with the knowledge skills and experince needed to excel in 
                dynamic field of education
            </p>
            <p>
                With focus on innovation hands on learning and personalized mentorship
                our programs prepare aspiring educators to make a meaningful impact in the 
                classroom, schools and community 
            </p>
            <p>
                Whether you aspire to become teacher, educator, administrator, counsellor or
                educational leader, Our divers program offers the perfect pathway to the achieve the 
                goals and unlock the full potential in shaping the future of education 
            </p>
       </div>


    </div>
  )
}

export default About