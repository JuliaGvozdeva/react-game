import React, {useEffect, useState} from 'react';
import commonStyle from '../../../../common/styles/common'; 
import { Button } from '@material-ui/core';

export default function GameOver(props) {
  const stylesCommon = commonStyle();
  const [isShown, setIsShown] = useState(props.isOpen);

  const startNewGame = () => {
    props.isShownGameOver(false);
    setIsShown(false);
    props.isNewStart(true);
  }

  const goToStart = () => {
    localStorage.board = '';
    localStorage.score = 0;
    props.isShownGameOver(false);
    setIsShown(false);
    window.location.href = '/';
  }

  const compare = (a, b) => {
    const movesA = a.moves;
    const movesB = b.moves;
  
    let comparison = 0;
    if (movesA > movesB) {
      comparison = 1;
    } else if (movesA < movesB) {
      comparison = -1;
    }
    return comparison;
  }

  const saveBestResults = () => {
    let userName = localStorage.name;
    let scoreGame = +localStorage.score+1;
    let sizeGame = localStorage.size;
    let bestScore = {
      score: scoreGame,
      size: sizeGame, 
      name: userName
    };

    console.log(bestScore);

    let arr = [];
    if (localStorage.statistics) {
        arr = JSON.parse(localStorage.statistics);

        if (!arr.includes(bestScore) && arr.length < 11) {
            arr.push(bestScore);
        } else {
            if (arr.length === 30) {
                if (arr[arr.length-1].moves > bestScore.score) {
                    arr[arr.length-1] = bestScore;
                } 
            } else if (arr.length < 31) {
                arr.push(bestScore);
            }
        }
    } else {
      arr.push(bestScore);
    }

    localStorage.setItem('statistics', JSON.stringify(arr.sort(compare)));
  }

  useEffect(() => {
    if (isShown && !props.isPrefield) {
      saveBestResults(); 
    }
  }, [])

  console.log(isShown)
  
  if (isShown) {
    return (
      <div className={stylesCommon.centerContainer}>
          <div className={stylesCommon.modalDiv}>
            {props.text}
            <div className={stylesCommon.modalButtonContainer}>
              <Button className={stylesCommon.modalButton} onClick={startNewGame}>Repeat game</Button>
              <Button className={stylesCommon.modalButton} onClick={goToStart}>Cancel</Button>
            </div>
          </div>
        <div className={stylesCommon.overlay}></div>
      </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}