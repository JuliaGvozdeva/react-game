import GameChips from './components/GameChips'
import styles from "./GameFieldStyle";
import { connect } from 'react-redux';

function GameField({ sizeGame, areEffectsOn, isMusicOn, musicVolume }, props) {
  const gameStyles = styles();
  return (
    <div className={gameStyles.gameContainer}>
      <GameChips gameSize={sizeGame} gamePrefield={props.gamePrefield} areEffectsOn={areEffectsOn} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  sizeGame: state.isSizeGame,
  areEffectsOn: state.areEffectsOn,
  isMusicOn: state.isMusicOn,
  musicVolume: state.musicVolume
});

export default connect(mapStateToProps)(GameField);