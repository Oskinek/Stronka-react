import React, {useState, useEffect} from 'react'
import './szkoleniecard_styles.scss'

const SzkolenieCard = (props) => {
  const [subject,setSubject] = useState('0')
  const [description,setDescription] = useState('0')
  const [time,setTime] = useState('0')
  useEffect(() => {
    if(props.buttonid==='1') {
      setSubject('Strzelanie z Pistoletu');
      setDescription('Podstawy Strzelania Bojowego');
      setTime('2 Godziny');
    }
    if(props.buttonid==='2') {
      setSubject('Strzelanie z Karabinu');
      setDescription('Podstawy Strzelania Bojowego');
      setTime('2 Godziny');
    }
    if(props.buttonid==='3') {
      setSubject('Taktyka zielona');
      setDescription('Taktyka Działań Poza Terenem Zurbanizowanym');
    }
    if(props.buttonid==='4') {
      setSubject('Taktyka w Terenie Zurbanizowanym');
      setDescription('Taktyka Działań w Terenie Zurbanizowanym');
    }
    if(props.buttonid==='5') {
      setSubject('Strzelanie z Pistoletu');
      setDescription('Strzelanie Bojowe w Ruchu');
    }
    if(props.buttonid==='6') {
      setSubject('Strzelanie z Karabinu');
      setDescription('Strzelanie Bojowe w Ruchu');
    }
    if(props.buttonid==='7') {
      setSubject('Taktyka zielona');
      setDescription('Taktyka Działań Poza Terenem Zurbanizowanym');
    }
    if(props.buttonid==='8') {
      setSubject('Taktyka w Terenie Zurbanizowanym');
      setDescription('Taktyka Działań w Terenie Zurbanizowanym');
    }
    if(props.buttonid==='9') {
      setSubject('Strzelanie z Pistoletu');
      setDescription('Podstawy Strzelania Bojowego');
    }
    if(props.buttonid==='10') {
      setSubject('Strzelanie z Karabinu');
      setDescription('Podstawy Strzelania Bojowego');
    }
    if(props.buttonid==='11') {
      setSubject('Taktyka zielona');
      setDescription('Taktyka Działań Poza Terenem Zurbanizowanym');
    }
    if(props.buttonid==='12') {
      setSubject('Taktyka w Terenie Zurbanizowanym');
      setDescription('Taktyka Działań w Terenie Zurbanizowanym');
    }
    if(props.buttonid==='13') {
      setSubject('Medycyna Pola Walki');
      setDescription('Opieka Przedszpitalna Pola Walki');
    }

  },[props.buttonid])
  return (
    <div className="card">
      <div className="line">
        <div className="titles">Temat:</div>
        <div className="info">{subject}</div>
        </div>
      <div></div>
    </div>
  )
}

export default SzkolenieCard