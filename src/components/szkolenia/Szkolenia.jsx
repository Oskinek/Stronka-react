import React from 'react'
import './szkolenia_styles.scss'
import Footer from '../footer/Footer.jsx'
import Header from '../header/Header.jsx'

const szkolenia = () => {
  return (
    <div className='info'>
      <img src="./zdjecie_szkolenia.jpg" alt="zdjecie_szkolenia" className="zdjecie-glowne" />
      <Footer/>
      <Header/>
    </div>
  )
}

export default szkolenia