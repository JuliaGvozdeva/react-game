import styles from "../GameFieldStyle";
import React, { useState } from "react";
// import { exchangeFileds, checkOverGame } from '../GameFunctions/changeGameFields';

export default function GameChips(props) {

  const gameStyles = styles();

  const gameItems = props.gameItems;

  const changeGameFields = (e) => {
    let emptyField = document.getElementById('empty');
    exchangeFileds(emptyField, e.target);
    // checkOverGame(gameItems.length);
  }

  function exchangeFileds(emptyField, clickElement) {
    emptyField.id = clickElement.id;
    emptyField.innerText = clickElement.innerText;
    clickElement.id = 'empty';
    clickElement.innerText = '';
  }

  function checkAvailableFieldForChange() {

  }

  return (
    <div className={gameStyles.gameFieldContainer}>
      {
        gameItems.map((item, idx) => {
          return (
            item === gameItems.length
              ? <div id='empty' key={idx} className={gameStyles.gameItem} onClick={changeGameFields} draggable={true}></div>
              : <div id={item} key={idx} className={gameStyles.gameItem} onClick={changeGameFields} draggable={true}>{item}</div>
          )
        })
      }
    </div>
  )
}