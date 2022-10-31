import React, { useState } from 'react';
import { Modal } from '../modal/modal';
import Map from '../map/map';

const Container = () => {

  const [isShown, setIsShown] = useState(false);
  const [lat, setLat] = useState(undefined);
  const [lng, setLng] = useState(undefined);
  const [modalBody, setModalBody] = useState("form");

  const defaultMapCenter = {
    lat: 32.073129228535876,
    lng: 34.780327621097534
  }

  const [mapCenter, setMapCenter] = useState(defaultMapCenter);

  const showModal = (formOrItem) => {
    setModalBody(formOrItem);
    setIsShown(true);
  };
  const closeModal = () => {
    setIsShown(false);
    setLat(undefined);
    setLng(undefined);
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
      title: event.target.item.value,
      description: event.target.description.value
    };
    setMarkers((current) => [
      ...current,
      newLatLng
    ]);
    setMapCenter(newLatLng); // update!!!!
  };

  const [markers, setMarkers] = useState([]);

  const onMapClick = (e) => {
    if (e.event.target.className !== "item-title-on-map") {
      setLat(e.lat);
      setLng(e.lng);
      showModal("form");
    } else {
      showModal("item");
      console.log(e.event);
    }
  };

    return (
      <div>
        <Map
          markers={markers}
          onMapClick={onMapClick}
          mapCenter={mapCenter}
          newLat={lat}
          newLng={lng}
        />
        {isShown &&
          <Modal
            modalBody = {modalBody}
            onSubmit={onSubmit}
            closeModal={closeModal}
            onEscDown={onEscDown}
          />
        }
      </div>
    );
  }

export default Container;
