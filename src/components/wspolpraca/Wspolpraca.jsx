import React from 'react'
import './wspolpraca_styles.scss'
import Footer from '../footer/Footer.jsx'
import Header from '../header/Header.jsx'

const Wspolpraca = () => {
  return (
    <div className='info'>
      <img src="./zdjecie_wspolpraca.jpg" alt="zdjecie_wspolpraca" className="zdjecie-glowne" />
      <Footer/>
      <Header/>
    </div>
  )
}

export default Wspolpraca