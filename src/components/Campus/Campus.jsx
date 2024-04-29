import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (

    <div className='campus' name='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" className="src" />
            <img src={gallery_2} alt="" className="src" />
            <img src={gallery_3} alt="" className="src" />
            <img src={gallery_4} alt="" className="src" />
        </div>
        <button className='btn'>
            See More Here <img src={white_arrow} alt="" className="arrow"/>
        </button>
    </div>
  )
}

export default Campus