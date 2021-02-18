import { Button } from '@material-ui/core';
import GameField from './components/GameField/GameField'
import gameStyles from './GameStyles';

export default function Game(props) {
  const styles = gameStyles();
  return (
    <div className={styles.gameCenterContainer}>
      <div className={styles.resultsContainer}>
        <div className={styles.timer}>
          <img src='../../images/hourglass.png' alt='game-time' /> 0:00 s
          {/* <Timer /> */}
        </div>
        <div className={styles.stepCounter}>
          <img src='../../images/counter.png' alt='step-count' /> 100
          {/* <StepCounter /> */}
        </div>
      </div>
      <GameField />
      <div className={styles.gameBtnContainer}>
        <Button className={styles.gameBtn}>
          <img className={styles.gameBtnImg} src='../../images/play.png' alt='play' />
        </Button>
        <Button className={styles.gameBtn}>
          <img className={styles.gameBtnImg} src='../../images/repeate.png' alt='repeate-game' />
        </Button>
        <Button className={styles.gameBtn}>
          <img className={styles.gameBtnImg} src='../../images/question.png' alt='repeate-game' />
        </Button>
      </div>
    </div>
  )
}