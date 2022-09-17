import React from 'react';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Homepage from '../components/homepage/fullscreen/Homepage.jsx'
import Kontakt from '../components/kontakt/Kontakt.jsx'
import Info from '../components/info/Info.jsx'
import Szkolenia from '../components/szkolenia/Szkolenia.jsx'
import Wspolpraca from '../components/wspolpraca/Wspolpraca.jsx'
import Galeria from '../components/galeria/Galeria.jsx'
import SlideShow from '../components/slideshow/Slideshow.jsx'
export default (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/kontakt' element={<Kontakt/>} />
      <Route path='/info' element={<Info/>} />
      <Route path='/szkolenia' element={<Szkolenia/>} />
      <Route path='/wspolpraca' element={<Wspolpraca/>} />
      <Route path='/galeria' element={<Galeria/>} />
      <Route path='/slideshow' element={<SlideShow/>}/>
    </Routes>
  </BrowserRouter>
)