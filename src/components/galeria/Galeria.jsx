import React from 'react'
import './galeria_styles.scss'
import Footer from '../footer/Footer.jsx'
import Header from '../header/Header.jsx'

const Galeria = () => {
  return (
    <div className='info'>
      <img src="./zdjecie_galeria.jpg" alt="zdjecie_galeria" className="zdjecie-glowne" />
      <Footer/>
      <Header/>
    </div>
  )
}

export default Galeria