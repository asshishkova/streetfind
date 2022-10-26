import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/arrow-top-left-thick'
import './map.css'

const Map = ({ showModal, markers, onMapClick }) => {

  const defaultMapCenter = {
    lat: 32.073129228535876,
    lng: 34.780327621097534
  }

  const [mapCenter, setMapCenter] = useState(defaultMapCenter);

  const zoomLevel = 15;

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

  // const [markers, setMarkers] = useState([]);

  // const onMapClick = (e) => {
  //   showModal();
  //   const newLatLng = {
  //     lat: e.lat,
  //     lng: e.lng,
  //     text: "my very new point"
  //   };
  //   setMarkers((current) => [
  //     ...current,
  //     newLatLng
  //   ]);
  //   setMapCenter(newLatLng); // update!!!!
  // };

  return (
    <div className="map">
      <h2>StreetFind</h2>
      <div className="google-map">
        <GoogleMapReact className="cursor-pointer"
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_MAP_KEY }}
          options={{ draggableCursor: 'default' }}
          defaultCenter={mapCenter}
          defaultZoom={zoomLevel}
          onClick={onMapClick}
        >
          <LocationPin
            lat={32.08686940916612}
            lng={34.78981181286832}
            text={"one point"}
          />
          <LocationPin
            lat={32.075565658849165}
            lng={34.776508193688244}
            text={"another point"}
          />
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
