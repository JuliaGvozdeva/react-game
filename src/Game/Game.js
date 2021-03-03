import GameField from './components/GameField/GameField'
import gameStyles from './GameStyles';
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import music from '../assets/sounds/backgroundMusic.mp3';

function Game({gamePrefield, isMusicOn, musicVolume}) {
  const styles = gameStyles();

  useEffect(() => {
    let audio = new Audio(music);
      if (isMusicOn && !gamePrefield) {
        audio.play();
        audio.volume = musicVolume;
      } else {
        audio.pause();
      }
  
      return function cleanup() {
        audio.pause();
      }
  })

  return (
    <div className={styles.gameCenterContainer}>
      <GameField gamePrefield={gamePrefield} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isMusicOn: state.settings[1].state,
  musicVolume: state.settings[2].state,
});

export default connect(mapStateToProps)(Game);