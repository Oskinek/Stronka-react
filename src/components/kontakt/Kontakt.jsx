import React from 'react'
import './kontakt_styles.scss'
import Header from '../header/Header.jsx'
import Map from '../map/Map.jsx'
import Footer from '../footer/Footer.jsx'
import Form from '../form/Form.jsx'
const location = {
  address: 'Porucznika "ostrego" 8 Radom',
  center: {
    lat: 51.35721757502279,
    lng: 21.086450140981864,
  }
}
const Kontakt = () => {

  return (
    <span className="kontakt">
      <img src="./zdjecie_kontakt.jpg" alt="zdjecie_kontakt" />
      <div className='big-container'>
        <div className='map-kontakt-container'>
          <div className="title">Dane kontaktowe:</div>
          <div className="data-container">
            <div>Arkadiusz Natorski</div>
            <div>ul.Porucznika "Ostrego" 8</div>
            <div>26-600 Radom</div>
            <div><span className="description">Telefon:</span> 668-416-281</div>
            <div><span className="description">E-mail:</span> biolife.natorski@gmail.com</div>
          </div>
          <div className='map-description'>Tu jesteśmy!</div>
          <Map location={location} zoomLevel={17} />
        </div>
          <Form/>
      </div>
      <Footer/>
      <Header/>
    </span>
  )
}

export default Kontakt