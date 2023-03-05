import React from 'react'
import './WhyChooseUs.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick_icon from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

const WhyChooseUs = () => {
  return (
    <>
        <div className='why-choose-us' id='why'>
            <div className='left-why'>
                <div>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                </div>
            </div>
            <div className='right-why'>
                <div>
                    <span>Some Reasons</span>
                    <h1>
                        <span className='stroke-text'>Why </span>
                        Choose Us?
                    </h1>
                </div>
                <div className='points'>
                    <div>
                        <img src={tick_icon} alt="" />
                        <span>Over 140+ Expert Coaches</span>
                    </div>
                    <div>
                        <img src={tick_icon} alt="" />
                        <span>Train Smarter and Faster than Before</span>
                    </div>
                    <div>
                        <img src={tick_icon} alt="" />
                        <span>1 Free Program for New Member</span>
                    </div>
                    <div>
                        <img src={tick_icon} alt="" />
                        <span>Reliable Partners</span>
                    </div>
                </div>
                <div className='partners'>
                    <span>Our Partners</span>
                    <div>
                        <img src={nb} alt="" />
                        <img src={adidas} alt="" />
                        <img src={nike} alt="" />
                    </div>
                </div>


            </div>
        </div>
    </>
  )
}

export default WhyChooseUs