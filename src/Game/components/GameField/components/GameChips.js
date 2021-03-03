import styles from '../GameFieldStyle';
import React from 'react';
import Cell from './components/GameCell/GameCell';
import { connect } from 'react-redux';

function GameChips({gameItems, sizeGame,  areEffectsOn, musicVolume, updateBoard}) {
  const gameStyles = styles();
  const size = sizeGame;
  const endItem = sizeGame**2;
  const zeroIndex = gameItems.indexOf(endItem);
  const sizeContainer = 110 * size;

  const getCoordFromIndex = (idx, size) => {
    return {row: Math.floor(idx / size) + 1, column: (idx % size) + 1};
  }

  const getIndexFromCoord = (row, col, size) => {
    return (size * (row - 1)) + col - 1; 
  }

  const zeroCoordinate = getCoordFromIndex(zeroIndex, size);

  const changeGameFields = (cellItem) => {
    if (areEffectsOn) {
      let audio = new Audio('./sounds/click.wav');
      audio.play();
      audio.volume = musicVolume;
    }

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
    const board = gameItems.slice();
    const item = board.indexOf(cellItem);
    const empty = board.indexOf(endItem);
    const temp = board[item];
    board[item] = board[empty];
    board[empty] = temp;
    updateBoard(board);
  }
  return (
    <div className={gameStyles.gameFieldContainer} style={{width: sizeContainer, height: sizeContainer}}>
      {
        gameItems.map((item) => {
          return (
            <Cell key={item} value={item} clickHandler={changeGameFields.bind(this, item)} endItem={endItem}/>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  areEffectsOn: state.settings[0].state,
  musicVolume: state.settings[2].state,
  sizeGame: state.settings[3].state
});

export default connect(mapStateToProps)(GameChips);