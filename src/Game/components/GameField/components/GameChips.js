import styles from '../GameFieldStyle';
import React, { useState, useEffect } from 'react';
import Cell from './components/GameCell/GameCell';

export default function GameChips(props) {
  const gameStyles = styles();
  const size = props.sizeGame;
  const endItem = props.sizeGame**2;
  const gameItems = props.gameItems;
  const zeroIndex = props.gameItems.indexOf(endItem);
  const sizeContainer = 110 * size;

  // const [counter, setCounter] = useState(props.score);

  const getCoordFromIndex = (idx, size) => {
    return {row: Math.floor(idx / size) + 1, column: (idx % size) + 1};
  }

  const getIndexFromCoord = (row, col, size) => {
    return (size * (row - 1)) + col - 1; 
  }

  const zeroCoordinate = getCoordFromIndex(zeroIndex, size);

  const changeGameFields = (cellItem) => {
    const possibleTopIdx = zeroCoordinate.row > 0 ? getIndexFromCoord(zeroCoordinate.row - 1, zeroCoordinate.column, size) : null;
    const possiblRightIdx = zeroCoordinate.column < size ? getIndexFromCoord(zeroCoordinate.row, zeroCoordinate.column + 1, size) : null;
    const possiblBottomIdx = zeroCoordinate.row < size ? getIndexFromCoord(zeroCoordinate.row + 1, zeroCoordinate.column, size) : null;
    const possibleLeftIdx = zeroCoordinate.column > 0 ? getIndexFromCoord(zeroCoordinate.row, zeroCoordinate.column - 1, size) : null;
    const index = gameItems.indexOf(cellItem);

    if (index === possibleTopIdx || index === possiblRightIdx || 
      index === possiblBottomIdx || index === possibleLeftIdx)
    {
      exchangeFileds(cellItem);
    }
  }

  const exchangeFileds = (cellItem) => {
    props.onCountChange();
    const board = gameItems.slice();
    const item = board.indexOf(cellItem);
    const empty = board.indexOf(endItem);
    const temp = board[item];
    board[item] = board[empty];
    board[empty] = temp;
    props.updateBoard(board);
  }

  return (
    <div className={gameStyles.gameFieldContainer} style={{width: sizeContainer, height: sizeContainer}}>
      {
        gameItems.map((item, index) => {
          return (
            <Cell key={item} value={item} clickHandler={changeGameFields.bind(this, item)} endItem={endItem} />
          )
        })
      }
    </div>
  )
}