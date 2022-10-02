import React, {useState} from 'react'
import './szkolenia_styles.scss'
import Footer from '../footer/Footer.jsx'
import Header from '../header/Header.jsx'
import SzkolenieCard from '../szkoleniecard/SzkolenieCard.jsx'

function Szkolenia() {
  const [buttonid, setButtonId] = useState(0);
  const test = event => {
    setButtonId(event.currentTarget.id)
  }
  return (
    <div className='info'>
      <img src="./zdjecie_szkolenia.jpg" alt="zdjecie_szkolenia" className="zdjecie-glowne" />
      <div className="tab">
        <div className="levels-box">
          <span>
            <div className="level">Podstawowe:</div>
            <div id={'1'} onClick={test} className="szkolenie">
              <div>Szkolenie Podstawowe Pistolet</div>
              <div>Szczegóły</div>
            </div>
            <div id={'2'} onClick={test} className="szkolenie">
              <div>Szkolenie Podstawowe Karabin</div>
              <div>Szczegóły</div>
            </div>
            <div id={'3'} onClick={test} className="szkolenie">
              <div>Szkolenie Podstawowe Taktyka Zielona</div>
              <div>Szczegóły</div>
            </div>
            <div id={'4'} onClick={test} className="szkolenie">
              <div>Szkolenie Podstawowe Taktyka w Terenie Zurbanizowanym</div>
              <div>Szczegóły</div>
            </div>
          </span>
          <span>
            <div className="level">Średniozaawansowane:</div>
            <div id={'5'} onClick={test} className="szkolenie">
              <div>Szkolenie Średniozaawansowane Pistolet</div>
              <div>Szczegóły</div>
            </div>
            <div id={'6'} onClick={test} className="szkolenie">
              <div>Szkolenie Średniozaawansowane Karabin</div>
              <div>Szczegóły</div>
            </div>
            <div id={'7'} onClick={test} className="szkolenie">
              <div>Szkolenie Średniozaawansowane Taktyka Zielona</div>
              <div>Szczegóły</div>
            </div>
            <div id={'8'} onClick={test} className="szkolenie">
              <div>Szkolenie Średniozaawansowane Taktyka w Terenie Zurbanizowanym</div>
              <div>Szczegóły</div>
            </div>
          </span>
          <span>
            <div className="level">Zaawansowane:</div>
            <div id={'9'} onClick={test} className="szkolenie">
              <div>Szkolenie Zaawansowane Pistolet</div>
              <div>Szczegóły</div>
            </div>
            <div id={'10'} onClick={test} className="szkolenie">
              <div>Szkolenie Zaawansowane Karabin</div>
              <div>Szczegóły</div>
            </div>
            <div id={'11'} onClick={test} className="szkolenie">
              <div>Szkolenie Zaawansowane Taktyka Zielona</div>
              <div>Szczegóły</div>
            </div>
            <div  id={'12'} onClick={test} className="szkolenie">
              <div>Szkolenie Zaawansowane Taktyka w Terenie Zurbanizowanym</div>
              <div>Szczegóły</div>
            </div>
          </span>
          <span>
            <div className="level">Medyczne:</div>
            <div id={'13'} onClick={test} className="szkolenie">
              <div>Szkolenie z Medycyny Pola Walki</div>
              <div>Szczegóły</div>
            </div>
          </span>
        </div>
        <SzkolenieCard buttonid={buttonid} className="card"/>
      </div>
      <Footer/>
      <Header/>
    </div>
  )
}

export default Szkolenia