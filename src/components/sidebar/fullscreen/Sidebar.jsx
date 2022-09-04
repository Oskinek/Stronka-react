import React from 'react'
import './sidebar_styles.scss'
import {Link} from 'react-router-dom'

const Sidebar = () => {

  return (
    <span className="sidebar">
      <div className='navigation-buttons'>
        <Link to="/info" className='button'>O mnie</Link>
        <Link to="/szkolenia" className='button'>Szkolenia</Link>
        <Link to="/wspolpraca" className='button'>Współpraca</Link>
        <Link to="/galeria" className='button'>Galeria</Link>
        <Link to="/kontakt" className='button'>Kontakt</Link>
      </div>
    </span>
  )
}

export default Sidebar