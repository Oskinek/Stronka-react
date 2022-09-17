import React from 'react'
import './galeria_styles.scss'
import Footer from '../footer/Footer.jsx'
import Header from '../header/Header.jsx'
import SlideShow from '../slideshow/Slideshow.jsx'

const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];
const Galeria = () => {
  return (
    <div className='info'>
      <img src="./zdjecie_galeria.jpg" alt="zdjecie_galeria" className="zdjecie-glowne" />
      <SlideShow images={images}/>
      <Footer/>
      <Header/>
    </div>
  )
}

export default Galeria