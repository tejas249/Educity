import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'


const Programs = () => {
  return (
    <div className='programs' name='program'>

        <div className="program">
            <img src={program_1} alt="" className="src" />
            <div className="caption">
                <img src={program_icon_1} alt="" className="src" />
                <p>Graduation Degree</p>
            </div>
        </div>

        <div className="program">
            <img src={program_2} alt="" className="src" />
            <div className="caption">
                <img src={program_icon_2} alt="" className="src" />
                <p>Masters Degree</p>
            </div>
        </div>

        <div className="program">
            <img src={program_3} alt="" className="src" />
            <div className="caption">
                <img src={program_icon_3} alt="" className="src" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs