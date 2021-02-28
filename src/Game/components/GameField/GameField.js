import GameChips from './components/GameChips'
import styles from "./GameFieldStyle";
import { connect } from 'react-redux';
import React, {useState, useEffect} from "react";
import generateGameElements from './GameFunctions/generateGameElements';


function GameField({ sizeGame, areEffectsOn, isMusicOn, musicVolume, gamePrefield }) {
  const gameStyles = styles();
  const prefieldArr = [];
  const [board, setBoard] = useState(prefieldArr);

  for (let i = 1; i <= sizeGame**2; i++){
    prefieldArr.push(i);
  }
  
  useEffect(()=>{
    gamePrefield ? setBoard(prefieldArr) : setBoard(generateGameElements(sizeGame));
  }, []);

  const updateBoard = (newBoard) => {
    setBoard(newBoard);
  }

  return (
    <div className={gameStyles.gameContainer}>
      <GameChips sizeGame={sizeGame} gameItems={board} areEffectsOn={areEffectsOn} gamePrefield={gamePrefield} updateBoard={updateBoard.bind(this)}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  areEffectsOn: state.settings[0].state,
  isMusicOn: state.settings[1].state,
  musicVolume: state.settings[2].state,
  sizeGame: state.settings[3].state
});

export default connect(mapStateToProps)(GameField);