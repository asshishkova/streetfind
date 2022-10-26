import React, { useState } from 'react';
import { Modal } from '../Modal/modal';
import Map from '../Map/map';

const Container = () => {

  const [isShown, setIsShown] = useState(false);
  const [lat, setLat] = useState(undefined);
  const [lng, setLng] = useState(undefined);

  const showModal = () => {
    setIsShown(true);
  };
  const closeModal = () => {
    setIsShown(false);
  };
  const onEscDown = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  const onSubmit = (event) => {
    event.preventDefault(event);
    closeModal();
    const newLatLng = {
      lat: lat,
      lng: lng,
      text: event.target.item.value
    };
    setMarkers((current) => [
      ...current,
      newLatLng
    ]);
    // setMapCenter(newLatLng); // update!!!!
  };

  const [markers, setMarkers] = useState([]);

  const onMapClick = (e) => {
    setLat(e.lat);
    setLng(e.lng);
    showModal();
  };

    return (
      <React.Fragment>
        <Map
          showModal={showModal}
          markers={markers}
          onMapClick={onMapClick}

        />
        {isShown ? (
          <Modal
            onSubmit={onSubmit}
            closeModal={closeModal}
            onEscDown={onEscDown}
          />
        ) : null}
      </React.Fragment>
    );
  }

export default Container;