import styles from '../GameFieldStyle';
import React, { useState } from 'react';
import Cell from './components/GameCell/GameCell';

export default function GameChips(props) {

  const gameStyles = styles();
  const endItem = props.sizeGame**2;
  const gameItems = props.gameItems;

  const changeGameFields = (cellItem) => {
    // check available cells
    exchangeFileds(cellItem);
  }

  const exchangeFileds = (cellItem) => {
    const board = gameItems.slice();
    const item = board.indexOf(cellItem);
    const empty = board.indexOf(endItem);
    const temp = board[item];
    board[item] = board[empty];
    board[empty] = temp;
    props.updateBoard(board);
  }

  return (
    <div className={gameStyles.gameFieldContainer}>
      {
        gameItems.map((item) => {
          return (
            <Cell key={item} value={item} clickHandler={changeGameFields.bind(this, item)} endItem={endItem} />
          )
        })
      }
    </div>
  )
}