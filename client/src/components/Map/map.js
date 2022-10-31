import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/arrow-top-left-thick';
import './map.css';

const Map = ({ mapCenter, markers, onMapClick, newLat, newLng }) => {

  const zoomLevel = 15;
  const LocationPin = ({ title, description }) => (
    <div className='pin'>
      <Icon icon={locationIcon} className='item-icon' />
      <p className='item-title-on-map'>{title}</p>
      <div className='item-short-info'>
        <img src='photo-placeholder.png' className='item-small-photo' alt='item'/>
        {description}
      </div>
    </div>
  )

  return (
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_MAP_KEY }}
          options={{ draggableCursor: 'default' }}
          center={mapCenter}
          defaultZoom={zoomLevel}
          onClick={onMapClick}
        >
          {markers.map((marker, i) => (
            <LocationPin
              lat={marker.lat}
              lng={marker.lng}
              title={marker.title}
              description={marker.description}
              key={i}
            />
          ))}
          {
            newLat &&
            <LocationPin
              lat={newLat}
              lng={newLng}
            />
          }
        </GoogleMapReact>
      </div>
  )
}

export default Map
