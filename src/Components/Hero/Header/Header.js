import React from 'react'
import logo from '../../../assets/logo.png'
import './Header.css'
import { Link } from 'react-scroll'
import bars from '../../../assets/bars.png'
import { useState } from 'react'

const Header = () => {

  // Checks if there is a mobile
  const mobile = window.innerWidth <= 768? true : false

  // UseState for opening and closing hamburger menu
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <>
        <div className="header">
          <div className='header-left'>
            <img src={logo} alt="" />

            {mobile===true && menuOpened===false? <img src={bars} className='abc' alt='' onClick={()=> setMenuOpened(true)} /> :

            <ul>
                <li><Link
                to='home'
                activeClass='active'
                smooth={true}
                spy={true}
                onClick={()=> setMenuOpened(false)}
                >Home</Link></li>
                <li><Link
                to='programs'
                smooth={true}
                spy={true}
                onClick={()=> setMenuOpened(false)}
                >Programs</Link></li>
                <li><Link
                  to='why'
                  smooth={true}
                  spy={true}
                  onClick={()=> setMenuOpened(false)}
                  Link>Why us</Link></li>
                <li><Link
                  to='plans'
                  smooth={true}
                  spy={true}
                  onClick={()=> setMenuOpened(false)}
                  >Plans</Link></li>
                <li><Link
                to='testimonials'
                smooth={true}
                spy={true}
                onClick={()=> setMenuOpened(false)}
                >Testimonials</Link></li>
            </ul>}
          </div>

            <div className='header-right'>
                
            </div>

        </div>
    </>
  )
}

export default Header