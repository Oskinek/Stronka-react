import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import './map_styles.scss'

const LocationPin = ({ text }) => (
  <div className="pin">
    <FaMapMarkerAlt className="pin-icon"/>
    <p className="pin-text">{text}</p>
  </div>
)
export default LocationPin