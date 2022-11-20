import React, { useState } from "react";
import { Modal } from "../modal/modal";
import Map from "../map/map";

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
  const [itemId, setItemId] = useState(0);

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
      description: event.target.description.value,
      id: itemId,
      stillThereAmount: 1,
      notThereAmount: 0,
      lastUpdate: "'still there'",
      sameInRow: 1
    };
    setMarkers((current) => [
      ...current,
      newLatLng
    ]);
    setMapCenter(newLatLng);
    setItemId(itemId + 1);
  };

  const [markers, setMarkers] = useState([]);
  const [currentItem, setCurrentItem] = useState(undefined);

  const onMapClick = (e) => {
    if (e.event.target.className !== "item-title-on-map") {
      setLat(e.lat);
      setLng(e.lng);
      showModal("form");
    } else {
      setCurrentItem(markers.find(item => item.id.toString() === e.event.target.parentNode.id));
      showModal("item");
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
            currentItem={currentItem}
          />
        }
      </div>
    );
  }

export default Container;
