import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map_styles.scss'
import LocationPin from './LocationPin.jsx'
const Map = ({ location, zoomLevel }) => (
  
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDXH3-kZCbVlvxMEhTr4ysEAjG6nY5E_uE' }}
        defaultCenter={location.center}
        defaultZoom={zoomLevel}
        markers={location.center}
      >
        <LocationPin
          lat={location.center.lat}
          lng={location.center.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)
export default Map