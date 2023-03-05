import React from 'react'
import Header from './Header/Header'
import heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'
import './Hero.css'
import '../../App.css'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

    // For transition
    const transition = { type: 'spring', duration: '3' }

    // For mobile
    const mobile = window.innerWidth <= 768? true : false;
  return (
    <>

        {/* Hero Slider */}
        <div className="hero" id='home'>
            <div className='blur hero-blur'></div>
    
        {/* Header */}
        <Header />

            <div className='hero-content'>

                {/* Hero Left Text Side */}
                <div className="left-side">
                    <div className="the-best">
                        <motion.div
                        initial={{x: mobile? +170 : +240, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        exit={{x: -100, opacity: 0}}
                        transition={{...transition, type: 'linear', duration: '5'}}
                        className='shapeInShape'></motion.div>
                        <div>The best fitness club in the town</div>
                    </div>

                    {/* Heading */}
                    <div className='heading'>
                        <div>
                            <span className='stroke-text'>Shape </span>
                            <span> Your</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>
                    </div>

                    {/* Paragraph */}
                    <div className='paragraph'>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>

                    {/* Detail with Numbers */}
                    <div className='detail_with_numbers'>
                        <div>
                            <span><NumberCounter end={140} start={100} delay='4' preFix='+' /></span>
                            <span>Expert Coaches</span>
                        </div>
                        <div>
                            <span><NumberCounter end={978} start={800} delay='4' preFix='+' /></span>
                            <span>Members Joined</span>
                        </div>
                        <div>
                            <span><NumberCounter end={502} start={350} delay='4' preFix='+' /></span>
                            <span>Fitness Programs</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className='hero-left-buttons'>
                        <button className='btn'>Get Started</button>
                        <button className='btn'>Learn More</button>
                    </div>

                {/* End of left-side */}
                </div>

                {/* Hero Right Image Side */}
                <div className="right-side">
                    <button className='btn btn-join'>Join Now</button>

                <motion.div
                initial={{x: +100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                exit={{x: -100, opacity: 0}}
                transition={{...transition, duration: '2'}}
                className='pulse-rate'>
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <div className='hero-images'>
                    <img className='hero-image' src={hero_image} alt="" />
                    <motion.img
                    initial={{x: +100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    exit={{x: -100, opacity: 0}}
                    transition={transition}
                    className='hero-image-back' src={hero_image_back} alt="" />
                </div>

                <motion.div
                initial={{x: +100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                exit={{x: -100, opacity: 0}}
                transition={{...transition, duration: '3.5'}}
                className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>





                {/* End of right-side */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero