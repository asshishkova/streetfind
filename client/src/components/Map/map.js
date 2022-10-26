import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/arrow-top-left-thick'
import './map.css'

const Map = ({ mapCenter, markers, onMapClick, newLat, newLng }) => {

  const zoomLevel = 15;

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

  return (
    <div className="map">
      <h2>StreetFind</h2>
      <div className="google-map">
        <GoogleMapReact className="cursor-pointer"
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_MAP_KEY }}
          options={{ draggableCursor: 'default' }}
          center={mapCenter}
          defaultZoom={zoomLevel}
          onClick={onMapClick}
        >
          <LocationPin
            lat={32.08686940916612}
            lng={34.78981181286832}
            text={"one point"}
          />
          {
            newLat &&
            <LocationPin
              lat={newLat}
              lng={newLng}
            />
          }

          {markers.map((marker, i) => (
            <LocationPin
              lat={marker.lat}
              lng={marker.lng}
              text={marker.text}
              key={i}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map
