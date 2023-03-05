import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <>
        <div className='footer-wrapper'>
          <div className='blur footer-blur-1'></div>
          <div className='blur footer-blur-2'></div>
            <hr />
            <div className='social-icons'>
                <a href="/"><img src={github} alt="" /></a>
                <a href="/"><img src={instagram} alt="" /></a>
                <a href="/"><img src={linkedin} alt="" /></a>

            </div>
            <div>
                <img src={logo} alt="" />
            </div>

        </div>
    </>
  )
}

export default Footer