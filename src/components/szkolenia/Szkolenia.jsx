import React from 'react'
import './szkolenia_styles.scss'
import Footer from '../footer/Footer.jsx'
import Header from '../header/Header.jsx'

const szkolenia = () => {
  return (
    <div className='info'>
      <img src="./zdjecie_szkolenia.jpg" alt="zdjecie_szkolenia" className="zdjecie-glowne" />
      <div className="tab">
        <div className="levels-box">
          <span>
            <div className="level">Podstawowe:</div>
            <div className="szkolenie">
              <div>Szkolenie Podstawowe Pistolet</div>
              <div>Szczegóły</div>
            </div>
            <div className="szkolenie">
              <div>Szkolenie Podstawowe Karabin</div>
              <div>Szczegóły</div>
            </div>
            <div className="szkolenie">
              <div>Szkolenie Podstawowe Taktyka Zielona</div>
              <div>Szczegóły</div>
            </div>
            <div className="szkolenie">
              <div>Szkolenie Podstawowe Taktyka w Terenie Zurbanizowanym</div>
              <div>Szczegóły</div>
            </div>
          </span>
          <span>
            <div className="level">Średniozaawansowane:</div>
            <div className="szkolenie">
              <div>Szkolenie Średniozaawansowane Pistolet</div>
              <div>Szczegóły</div>
            </div>
            <div className="szkolenie">
              <div>Szkolenie Średniozaawansowane Karabin</div>
              <div>Szczegóły</div>
            </div>
            <div className="szkolenie">
              <div>Szkolenie Średniozaawansowane Taktyka Zielona</div>
              <div>Szczegóły</div>
            </div>
            <div className="szkolenie">
              <div>Szkolenie Średniozaawansowane Taktyka w Terenie Zurbanizowanym</div>
              <div>Szczegóły</div>
            </div>
          </span>
          <span>
            <div className="level">Zaawansowane:</div>
            <div className="szkolenie">
              <div>Szkolenie Zaawansowane Pistolet</div>
              <div>Szczegóły</div>
            </div>
            <div className="szkolenie">
              <div>Szkolenie Zaawansowane Karabin</div>
              <div>Szczegóły</div>
            </div>
            <div className="szkolenie">
              <div>Szkolenie Zaawansowane Taktyka Zielona</div>
              <div>Szczegóły</div>
            </div>
            <div className="szkolenie">
              <div>Szkolenie Zaawansowane Taktyka w Terenie Zurbanizowanym</div>
              <div>Szczegóły</div>
            </div>
          </span>
          <span>
            <div className="level">Medyczne:</div>
            <div className="szkolenie">
              <div>Szkolenie z Medycyny Pola Walki</div>
              <div>Szczegóły</div>
            </div>
          </span>
        </div>
      </div>
      <Footer/>
      <Header/>
    </div>
  )
}

export default szkolenia