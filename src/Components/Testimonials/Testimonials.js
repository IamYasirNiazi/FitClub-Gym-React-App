import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData.js'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import { motion } from 'framer-motion'

const Testimonials = () => {

  // For Motion
  const transition = { type: 'spring', duration: '3' }

  let [testimonial, setTestimonial] = useState(0)
  const tLength = testimonialsData.length

  const prevBtn = ()=>{
    if(testimonial === 0){
      setTestimonial(tLength-1)
    }
    else{
    testimonial = testimonial - 1
    setTestimonial(testimonial)
    }
  }

  const nextBtn = ()=>{
    if(testimonial === tLength-1){
      setTestimonial(0)
    }
    else{
    testimonial = testimonial + 1
    setTestimonial(testimonial)
    }
  }

  return (
    <>
        <div className='testimonials-wrapper' id='testimonials'>
            <div className='t-left'>
              <span>Testimonials</span>
              <div>
                <span className='stroke-text'>What They</span>
                <span>Say About Us</span>
              </div>
              <motion.span
              key={testimonial}
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: +100}}
              transition={transition}>
                {testimonialsData[testimonial].review}</motion.span>
              <div>
              <motion.span>
              {testimonialsData[testimonial].name} </motion.span>
              <motion.span>
                - {testimonialsData[testimonial].status}</motion.span>
              </div>
            </div>
            <div className='t-right'>
              <div className='arrows'>
                <img src={leftArrow} alt="" onClick={()=>prevBtn()} />
                <img src={rightArrow} alt="" onClick={()=>nextBtn()} />
              </div>
              <motion.div
              initial={{opacity: 0, x: -100}}
              whileInView={{opacity: 1, x: 0}}
              transition={transition}
              ></motion.div>
              <motion.div
              initial={{opacity: 0, x: +100}}
              whileInView={{opacity: 1, x: 0}}
              transition={transition}
              ></motion.div>
              <div className='t-image'>
                <motion.img
                key={testimonial}
                initial={{opacity: 0, x: +100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={{...transition, duration: '2'}}
                src={testimonialsData[testimonial].image} alt="" />
              </div>
            </div>


        {/* Testimonials Div End */}
        </div>
    </>
  )
}

export default Testimonials