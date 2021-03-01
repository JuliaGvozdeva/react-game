import GameField from './components/GameField/GameField'
import gameStyles from './GameStyles';
import React, {useState, useEffect} from 'react';
import Timer from './components/Timer/Timer';

export default function Game(props) {
  const styles = gameStyles();
  const [count, setCount] = useState(0);

  const handleChangeCount = (count) => { 
    setCount(count);
  }

  return (
    <div className={styles.gameCenterContainer}>
      <div className={styles.resultsContainer}>
        <div className={styles.timer}>
          <img src='../../images/hourglass.png' alt='game-time' />
          <Timer/>
        </div>
        <div className={styles.stepCounter}>
          <img src='../../images/counter.png' alt='step-count' />
          <span id='score'>{count}</span> 
        </div>
      </div>
      <GameField gamePrefield={props.gamePrefield} onCountChange={handleChangeCount} />
    </div>
  )
}