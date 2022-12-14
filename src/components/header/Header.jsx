import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/me.png'
import HeaderSocilals from './HeaderSocilals'
const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Lins Thomas</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA/>
            <HeaderSocilals/>
            <div className="me">
                <img src={ME} alt="me" />
            </div>
            <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
        
    </header>
  )
}

export default Header