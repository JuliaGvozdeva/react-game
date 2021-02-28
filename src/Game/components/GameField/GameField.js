import GameChips from './components/GameChips'
import styles from "./GameFieldStyle";
import { connect } from 'react-redux';
import React from "react";
import generateGameElements from './GameFunctions/generateGameElements';


function GameField({ sizeGame, areEffectsOn, isMusicOn, musicVolume, gamePrefield }) {
  const gameItems = generateGameElements(sizeGame);

  const gameStyles = styles();
  return (
    <div className={gameStyles.gameContainer}>
      <GameChips gameItems={gameItems} areEffectsOn={areEffectsOn} gamePrefield={gamePrefield} />
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