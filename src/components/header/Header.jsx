import React from 'react'
import './header_styles.scss'
import {Link, useLocation} from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  return (
    <div className="header">
      <div className='header-buttons'>
        <Link to="/info" className={location.pathname === '/info' ? 'menu-button active' : 'menu-button'} >O mnie</Link>
        <Link to="/szkolenia" className={location.pathname === '/szkolenia' ? 'menu-button active' : 'menu-button'} >Szkolenia</Link>
        <Link to="/wspolpraca" className={location.pathname === '/wspolpraca' ? 'menu-button active' : 'menu-button'} >Współpraca</Link>
        <Link to="/galeria" className={location.pathname === '/galeria' ? 'menu-button active' : 'menu-button'} >Galeria</Link>
        <Link to="/kontakt" className={location.pathname === '/kontakt' ? 'menu-button active' : 'menu-button'} >Kontakt</Link>
      </div>
    </div>
  )
}

export default Header