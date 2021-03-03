import React, {useEffect, useState} from 'react';
import commonStyle from '../../../../common/styles/common'; 
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

function GameOver({isOpen, lang, text, isNewStart, isShownGameOver, isPrefield}) {
  const stylesCommon = commonStyle();
  const [isShown, setIsShown] = useState(isOpen);

  const startNewGame = () => {
    isShownGameOver(false);
    setIsShown(false);
    isNewStart(true);
  }

  const goToStart = () => {
    localStorage.board = '';
    localStorage.score = 0;
    localStorage.image = '';
    isShownGameOver(false);
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
    if (isShown && !isPrefield) {
      saveBestResults(); 
    }
  }, [])
  
  if (isShown) {
    return (
      <div className={stylesCommon.centerContainer}>
          <div className={stylesCommon.modalDiv}>
            {text}
            <div className={stylesCommon.modalButtonContainer}>
              <Button className={stylesCommon.modalButton} onClick={startNewGame}>{lang === 'en' ? 'New game' : 'Новая игра'}</Button>
              <Button className={stylesCommon.modalButton} onClick={goToStart}>{lang === 'en' ? 'Cancel' : 'Отмена'}</Button>
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

const mapStateToProps = (state) => ({
  lang: state.lang
});

export default connect(mapStateToProps)(GameOver);