import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import tick_icon from '../../assets/whiteTick.png'
import right_arrow from '../../assets/rightArrow.png'

const Plans = () => {
  return (
    <>
        <div className='plans-wrapper' id='plans'>
            <div className='blur plans-blur-1'></div>
            <div className='blur plans-blur-2'></div>
            <div className='heading'>
                <span className='stroke-text'>Ready to Start</span>
                <span>Your Journey</span>
                <span className='stroke-text'>Now Withus</span>
            </div>
            <div className='plans-categories'>
                {plansData.map((plans, index) =>{
                    return <div className='plans-list' key={index}>
                        <div>
                            <span>{plans.icon}</span>
                            <span>{plans.name}</span>
                            <span>$ {plans.price}</span>
                        </div>
                        <div className='plans-features'>
                            <div>
                                <img src={tick_icon} alt="" />
                                <span>{plans.features[0]}</span>
                            </div>
                            <div>
                                <img src={tick_icon} alt="" />
                                <span>{plans.features[1]}</span>
                            </div>
                            <div>
                                <img src={tick_icon} alt="" />
                                <span>{plans.features[2]}</span>
                            </div>

                        </div>
                        <div className='plans-benefits'>
                            <span>See more benefits</span>
                            <img src={right_arrow} alt="" />

                        </div>
                        <button className='btn plans-btn'>Join Now</button>
                    </div>
                })}

            </div>

        {/* Plans Div End */}
        </div>
    </>
  )
}

export default Plans