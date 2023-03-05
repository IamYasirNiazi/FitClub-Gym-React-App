import React, { useRef } from 'react'
import './Subscribe.css'
import emailjs from '@emailjs/browser';

const Subscribe = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cs9zjpe', 'template_wceq81q', form.current, '_3o9KT2QBxPXo8ehz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
        <div className='subscribe-wrapper'>
            <div className='s-left'>
                <div>
                    <div className='line'></div>
                    <span className='stroke-text'>Ready to </span>
                    <span>Level Up</span>
                </div>
                <div>
                    <span>Your Body </span>
                    <span className='stroke-text'>With Us?</span>
                </div>
            </div>
            <div className='s-right'>
                <form action="" ref={form} onSubmit={sendEmail}>
                    <input type="email" name='email' placeholder='Please Enter Your Email Here' />
                    <button type='submit' className='btn'>Join Now</button>
                </form>

            </div>


        {/* Subscribe Div End */}
        </div>
    </>
  )
}

export default Subscribe