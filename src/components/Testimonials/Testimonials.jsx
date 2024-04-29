import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testimonials = () => {
   
    const slider = useRef();
    let tx = 0;


   const slideForward = () => {
      if(tx > -50){
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
   }
   const slideBackward = () => {
    if(tx < 0){
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
   }
  

  return (
    <div className='testimonials' name='testimonials'>

        <img src={next_icon} alt="" className="next-btn"  onClick={slideForward} />
        <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
        
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" className="src" />
                            <div>
                                <h3>Willaim Jack</h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                      <p>Choosing to pursue the degree was one of my best decision
                        I have ever made. The supportive community state of the arts faciity
                        have truly exceeded my expections
                      </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" className="src" />
                            <div>
                                <h3>Will Jack</h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                      <p>Choosing to pursue the degree was one of my best decision
                        I have ever made. The best in the buisness !
                      </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" className="src" />
                            <div>
                                <h3>Ellyse Smith</h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                      <p> Hats off to the team Educity..The supportive community state of the arts faciity
                        have truly exceeded my expections
                      </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" className="src" />
                            <div>
                                <h3> Harry Brook </h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                      <p>Will recommend to all The supportive community state of the arts faciity
                        have truly exceeded my expections
                      </p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Testimonials