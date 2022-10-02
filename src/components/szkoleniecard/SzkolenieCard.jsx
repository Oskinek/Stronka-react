import React, {useState, useEffect} from 'react'
import './szkoleniecard_styles.scss'

const SzkolenieCard = (props) => {
  const [subject,setSubject] = useState('0')
  const [description,setDescription] = useState('0')
  const [time,setTime] = useState('0')
  const [group,setGroup] = useState('0')
  const [price,setPrice] = useState('0')
  useEffect(() => {
    if(props.buttonid==='1') {
      setSubject('Strzelanie z Pistoletu');
      setDescription('Podstawy Strzelania Bojowego');
      setTime('2 Godziny');
      setGroup('5 osób');
      setPrice('800 zl');      
    }
    if(props.buttonid==='2') {
      setSubject('Strzelanie z Karabinu');
      setDescription('Podstawy Strzelania Bojowego');
      setTime('2 Godziny');
      setGroup('4 osób');
      setPrice('700 zl');
    }
    if(props.buttonid==='3') {
      setSubject('Taktyka zielona');
      setDescription('Taktyka Działań Poza Terenem Zurbanizowanym');
      setTime('5 Godziny');
      setGroup('3 osób');
      setPrice('600 zl');      
    }
    if(props.buttonid==='4') {
      setSubject('Taktyka w Terenie Zurbanizowanym');
      setDescription('Taktyka Działań w Terenie Zurbanizowanym');
      setTime('3 Godziny');
      setGroup('6 osób');
      setPrice('600 zl');      
    }
    if(props.buttonid==='5') {
      setSubject('Strzelanie z Pistoletu');
      setDescription('Strzelanie Bojowe w Ruchu');
      setTime('4 Godziny');
      setGroup('7 osób');
      setPrice('600 zl');      
    }
    if(props.buttonid==='6') {
      setSubject('Strzelanie z Karabinu');
      setDescription('Strzelanie Bojowe w Ruchu');
      setTime('4 Godziny');
      setGroup('8 osób');
      setPrice('500 zl');      
    }
    if(props.buttonid==='7') {
      setSubject('Taktyka zielona');
      setDescription('Taktyka Działań Poza Terenem Zurbanizowanym');
      setTime('7 Godziny');
      setGroup('10 osób');
      setPrice('100 zl');      
    }
    if(props.buttonid==='8') {
      setSubject('Taktyka w Terenie Zurbanizowanym');
      setDescription('Taktyka Działań w Terenie Zurbanizowanym');
      setTime('8 Godziny');
      setGroup('3 osób');
      setPrice('300 zl');      
    }
    if(props.buttonid==='9') {
      setSubject('Strzelanie z Pistoletu');
      setDescription('Podstawy Strzelania Bojowego');
      setTime('8 Godziny');
      setGroup('4 osób');
      setPrice('300 zl');      
    }
    if(props.buttonid==='10') {
      setSubject('Strzelanie z Karabinu');
      setDescription('Podstawy Strzelania Bojowego');
      setTime('2 Godziny');
      setGroup('5 osób');
      setPrice('400 zl');      
    }
    if(props.buttonid==='11') {
      setSubject('Taktyka zielona');
      setDescription('Taktyka Działań Poza Terenem Zurbanizowanym');
      setTime('2 Godziny');
      setGroup('5 osób');
      setPrice('400 zl');      
    }
    if(props.buttonid==='12') {
      setSubject('Taktyka w Terenie Zurbanizowanym');
      setDescription('Taktyka Działań w Terenie Zurbanizowanym');
      setTime('2 Godziny');
      setGroup('5 osób');
      setPrice('400 zl');      
    }
    if(props.buttonid==='13') {
      setSubject('Medycyna Pola Walki');
      setDescription('Opieka Przedszpitalna Pola Walki');
      setTime('2 Godziny');
      setGroup('5 osób');
      setPrice('500 zl');      
    }

  },[props.buttonid])
  return (
    <div className={props.buttonid !== 0 ? 'card active' : 'card'}>
      <div className="line">
        <div className="titles">Temat:</div>
        <div className="info">{subject}</div>
      </div>
      <div className="line">
        <div className="titles">Opis:</div>
        <div className="info">{description}</div>
      </div>
      <div className="line">
        <div className="titles">Czas:</div>
        <div className="info">{time}</div>
      </div>
      <div className="line">
        <div className="titles">Grupa:</div>
        <div className="info">{group}</div>
      </div>
      <div className="line">
        <div className="titles">Cena:</div>
        <div className="info">{price}</div>
      </div>
    </div>
  )
}

export default SzkolenieCard