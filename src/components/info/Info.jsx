import React from 'react'
import './info_styles.scss'
import Footer from '../footer/Footer.jsx'
import Header from '../header/Header.jsx'

const Info = () => {
  return (
    <div className='info'>
      <img src="./zdjecie_info.jpg" alt="zdjecie_info" className="zdjecie-glowne" />
      <div className="about-info-container">
        <div className="about-data-container">
          <div className="title-name">Arkadiusz Natorski</div>
          <div>Certyfikat</div>
          <div>Certyfikat</div>
          <div>Certyfikat</div>
          <div>Certyfikat</div>
        </div>
        <span className='foto-container'>
          <img src="./zdjecie_tata.jpeg" alt="zdjecie_tata"/>
          <img src="./zdjecie_tata2.jpeg" alt="zdjecie_tata"/>
          <img src="./zdjecie_tata.jpeg" alt="zdjecie_tata"/>
        </span>
      </div>
      <Footer/>
      <Header/>
    </div>
  )
}

export default Info