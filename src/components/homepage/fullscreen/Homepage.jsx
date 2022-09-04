import React, {useState} from 'react'
import {GiPistolGun} from 'react-icons/gi'
import './homepage.scss'
import Sidebar from '../../sidebar/fullscreen/Sidebar.jsx'
import Typewriter from 'typewriter-effect'
import Slideshow from '../../slideshow/Slideshow.jsx'
import BackgroundSlider from 'react-background-slider'

function HomePage (props) {
  console.log(props.location)
  const images = ['./slide1.jpg','./slide2.jpg','./slide3.jpg','./slide4.jpg','./slide5.jpg','./slide6.jpg']
  let audio = new Audio("/pistolecik.mp3")
  const [isChecked, setIsChecked] = useState(false)

  const audioAndCheckState = () => {
    setIsChecked(prevIsChecked => !prevIsChecked)
    audio.play()
  }
  return (
    <div className="homepage">
      <BackgroundSlider images={images} duration={5} transition={2} />
      <input type="checkbox" id="nav-toggle" className="nav-toggle" checked={isChecked} onChange={()=>null}/>
      <span>
        <div className='curtain' onClick={audioAndCheckState}></div>
        <div className="question" onClick={audioAndCheckState}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Szukasz wyzwania?").start();
            }}
          />
        </div>
        <div className='pistol' onClick={audioAndCheckState}><GiPistolGun/></div>
        <Sidebar/>
        <Slideshow/>
      </span>
  </div>
  )
}

export default HomePage