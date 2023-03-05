import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <>
        <div className="programs-wrapper" id='programs'>
            <div>
                <span className='stroke-text'>Explore Our</span>
                <span>Programs</span>
                <span className='stroke-text'>To Shape You</span>
            </div>
            <div className='programs'>
                {programsData.map((programsData, index) =>{
                    return <div key={index} className='program-lists'>
                        <span>{programsData.image}</span>
                        <span>{programsData.heading}</span>
                        <span>{programsData.details}</span>

                        <div>
                            <span>Join Now</span><img src={rightArrow} alt="" />
                        </div>

                    </div>


                })}

            </div>

        {/* Programs End Div */}
        </div>
    </>
  )
}

export default Programs