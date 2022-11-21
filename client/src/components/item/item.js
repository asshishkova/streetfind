import React, { useState } from "react";
import "./item.css";

const STILL_THERE = "still there";
const NOT_THERE = "not there";

export const Item = ({item}) => {
  const {title, description, stillThereAmount, notThereAmount, lastUpdate, sameInRow} = item;

  const [stillThereAmountShown, setStillThereAmount] = useState(stillThereAmount);
  const [notThereAmountShown, setNotThereAmount] = useState(notThereAmount);
  const [lastUpdateShown, setLastUpdate] = useState(lastUpdate);
  const [sameInRowShown, setSameInRow] = useState(sameInRow);

  const OnStillThereClick = () => {
    setStillThereAmount(stillThereAmountShown + 1);
    const newSameInRow = (lastUpdateShown === STILL_THERE)? sameInRowShown + 1 : 1;
    setSameInRow(newSameInRow);
    setLastUpdate(STILL_THERE);
    updateItem(stillThereAmountShown + 1, item.notThereAmount, STILL_THERE, newSameInRow);
  }

  const OnNotThereClick = () => {
    setNotThereAmount(notThereAmountShown + 1);
    const newSameInRow = (lastUpdateShown === NOT_THERE)? sameInRowShown + 1 : 1;
    setSameInRow(newSameInRow);
    setLastUpdate(NOT_THERE);
    updateItem(item.stillThereAmount, notThereAmountShown + 1, NOT_THERE, newSameInRow);
  }

  const updateItem = (stillThereAmount, notThereAmount, lastUpdate, sameInRow) => {
    item.stillThereAmount = stillThereAmount;
    item.notThereAmount = notThereAmount;
    item.lastUpdate = lastUpdate;
    item.sameInRow = sameInRow;
  }

  return (
    <div className="item-info">
      <h2 className="item-title">{title}</h2>
      <img src="photo-placeholder.png" className="item-photo" alt="item"/>
      <p className="item-description">{description}</p>
      <div className="reactions">
        <div className="reaction">
          <button onClick={OnStillThereClick} className="btn btn-success">Still there</button>
          <p className="reaction-amount">{stillThereAmountShown}</p>
        </div>
        <div className="reaction">
          <button onClick={OnNotThereClick} className="btn btn-warning">Not there</button>
          <p className="reaction-amount">{notThereAmountShown}</p>
        </div>
      </div>
      <div className="reactions">
        <p className="update-info">Last reaction: {lastUpdateShown}</p>
        <p className="update-info">Same reactions in a row: {sameInRowShown}</p>
      </div>
    </div>
  );
};
export default Item;
