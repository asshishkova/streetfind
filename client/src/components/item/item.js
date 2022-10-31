import React, { useState } from 'react';
import './item.css';

const STILL_THERE = '"still there"';
const NOT_THERE = '"not there"';

export const Item = () => {
  const [stillThereAmount, setStillThereAmount] = useState(1);
  const [notThereAmount, setNotThereAmount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(STILL_THERE);
  const [sameInRow, setSameInRow] = useState(1);

  const OnStillThereClick = () => {
    setStillThereAmount(stillThereAmount + 1);
    const newSameInRow = (lastUpdate === STILL_THERE)? sameInRow + 1 : 1;
    setSameInRow(newSameInRow);
    setLastUpdate(STILL_THERE);
  }

  const OnNotThereClick = () => {
    setNotThereAmount(notThereAmount + 1);
    const newSameInRow = (lastUpdate === NOT_THERE)? sameInRow + 1 : 1;
    setSameInRow(newSameInRow);
    setLastUpdate(NOT_THERE);
  }

  return (
    <div className='item-info'>
      <h2 className='item-title'>Sofa</h2>
      <img src='photo-placeholder.png' className='item-photo' alt='item'/>
      <p className='item-description'>Some description of a sofa</p>
      <div className='reactions'>
        <div className='reaction'>
          <button onClick={OnStillThereClick} className='btn btn-success'>Still there</button>
          <p className='reaction-amount'>{stillThereAmount}</p>
        </div>
        <div className='reaction'>
          <button onClick={OnNotThereClick} className='btn btn-warning'>Not there</button>
          <p className='reaction-amount'>{notThereAmount}</p>
        </div>
      </div>
      <div className='reactions'>
        <p className='update-info'>Last reaction: {lastUpdate}</p>
        <p className='update-info'>Same reactions in a row: {sameInRow}</p>
      </div>
    </div>
  );
};
export default Item;
