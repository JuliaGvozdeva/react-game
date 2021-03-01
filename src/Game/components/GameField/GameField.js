import GameChips from './components/GameChips'
import styles from "./GameFieldStyle";
import { connect } from 'react-redux';
import React, {useState, useEffect} from "react";
import generateGameElements from './GameFunctions/generateGameElements';
import GameOver from '../GameField/components/GameOver';
import { Button } from '@material-ui/core';
import Navigation from '../../../Navigation/Navigation';

function GameField({ sizeGame, areEffectsOn, isMusicOn, musicVolume, gamePrefield, onTimeChange, onCountChange }) {
  const gameStyles = styles();
  const prefieldArr = [];
  const [board, setBoard] = useState(prefieldArr);
  const [counter, setCounter] = useState(1);
  const [isSwowNav, setIsSwowNav] = useState(false);

  for (let i = 1; i <= sizeGame**2; i++){
    prefieldArr.push(i);
  }
  
  useEffect(()=>{
    gamePrefield ? setBoard(prefieldArr) : setBoard(generateGameElements(sizeGame));
  }, []);

  const updateBoard = (newBoard) => {
    setBoard(newBoard);
  }

  const handleChangeCount = () => {
    setCounter(counter  + 1);
    onCountChange(counter);
  }

  const startNewGame = (isStart) => {
    if (isStart) {
      setBoard(generateGameElements(sizeGame));
      setCounter(1);
      onCountChange(0);
    }
  }

  const isSwowNavMenu = (value) => {
    setIsSwowNav(value);
  }

  return (
    <div className={gameStyles.gameCenterContainer}>
      { board.join() === prefieldArr.join() && !gamePrefield ?  <GameOver score={counter} isNewStart={startNewGame} isOpen={true} text='You won! Choose further action.'/> : null}
      
      <div className={gameStyles.gameContainer}>
        <GameChips sizeGame={sizeGame} gameItems={board} areEffectsOn={areEffectsOn} gamePrefield={gamePrefield} updateBoard={updateBoard.bind(this)} onCountChange={handleChangeCount}/>
      </div>

      <div className={gameStyles.gameBtnContainer}>
        <Button className={gameStyles.gameBtn}>
          <img className={gameStyles.gameBtnImg} src='./images/pause.png' alt='pause' />
        </Button>
        <Button className={gameStyles.gameBtn} onClick={startNewGame}>
          <img className={gameStyles.gameBtnImg} src='./images/repeate.png' alt='repeate-game' />
        </Button>
        <Button className={gameStyles.gameBtn} onClick={()=> {isSwowNavMenu(true)}}>
          <img className={gameStyles.gameBtnImg} src='./images/menu.png' alt='nav-menu' />
        </Button>
      </div>
      { isSwowNav ? <Navigation isShown={isSwowNavMenu} /> : null}
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