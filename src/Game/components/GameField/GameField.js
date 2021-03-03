import GameChips from './components/GameChips'
import style from "./GameFieldStyle";
import gamesStyles from '../../GameStyles';
import { connect } from 'react-redux';
import React, {useState, useEffect} from "react";
import generateGameElements from './GameFunctions/generateGameElements';
import GameOver from '../GameField/components/GameOver';
import { Button } from '@material-ui/core';
import Navigation from '../../../Navigation/Navigation';
// import Timer from '../Timer/Timer';

function GameField({ size, gamePrefield, lang }) {
  const gameStyles = style();
  const styles = gamesStyles();
  const prefieldArr = [];
  const [isOverShow, setIsOverShow] = useState(false);
  const [board, setBoard] = useState(prefieldArr);
  const [counter, setCounter] = useState(0);
  const [isShowNavMenu, setIsShowNavMenu] = useState(false);
  const [userName, setUserName] = useState(lang === 'en' ? '[Enter user name]' : '[Введите имя игрока]');
  const [sizeGame, setSizeGame] = useState(size);  
  const [backImg, setBackImg] = useState('./images/gameImages/image1.jpg');  
  let images = ['./images/gameImages/image1.jpg', './images/gameImages/image2.jpg', './images/gameImages/image3.jpg', './images/gameImages/image4.jpg',
  './images/gameImages/image5.jpg', './images/gameImages/image6.jpg', './images/gameImages/image7.jpg', './images/gameImages/image8.jpg', './images/gameImages/image9.jpg', './images/gameImages/image10.jpg' ];

  for (let i = 1; i <= sizeGame**2; i++){
    prefieldArr.push(i);
  }

  useEffect(()=> {
    if (!gamePrefield && board.join() !== prefieldArr.join()) 
    {
      localStorage.setItem('size', sizeGame);
      localStorage.setItem('score', JSON.stringify(counter));
      localStorage.setItem('board', JSON.stringify(board));
    }
  })
  
  useEffect(()=>{
    if (gamePrefield) {
      setBoard(prefieldArr);
    } 
    else {
      let oldBoard = localStorage.board? JSON.parse(localStorage.board) : null;

      if (oldBoard) {
        setBoard(oldBoard);
        setSizeGame(localStorage.size || size);
        setBackImg(localStorage.image || images[Math.floor(Math.random() * images.length)]);
      } else {
        setBoard(generateGameElements(sizeGame));
        setBackImg(images[Math.floor(Math.random() * images.length)]);
      }
    }

    setCounter(+localStorage.score || counter);
    getUserName();

  }, []);

  const updateBoard = (newBoard) => {
    setCounter(counter+1);
    setBoard(newBoard);
    localStorage.setItem('score', counter);
    localStorage.setItem('board', JSON.stringify(board));
    localStorage.setItem('image', backImg);

    if (newBoard.join() === prefieldArr.join()){
      setIsOverShow(true);
    }
  }

  const startNewGame = (isStart) => {
    if (isStart) {
      setBoard(generateGameElements(sizeGame));
      setCounter(0);
      setIsOverShow(false);
      setBackImg(images[Math.floor(Math.random() * images.length)]);
      localStorage.setItem('score', counter);
      localStorage.setItem('board', board);
      localStorage.setItem('image', backImg);
    }
  }

  const getUserName = () => {
    if (localStorage.getItem('name') === null || localStorage.getItem('name' === '')){
      setUserName(lang === 'en' ? '[Enter user name]' : '[Введите имя игрока]');
    } else {
        setUserName(localStorage.getItem('name'));
    }
  }

  const setUpUserName = (e) => {
    if (e.type === 'keypress') {
      if (e.which == 13 || e.keyCode == 13) {
        if (e.target.innerText.trim().length > 0 && e.target.innerText !== '') {
          localStorage.setItem('name', e.target.innerText);
          e.target.blur();
        } else {
          getUserName();
          e.target.blur();
        }
      }
    } else {
      if (e.target.innerText.trim().length > 0 && e.target.innerText !== '') {
        localStorage.setItem('name', e.target.innerText);
      } else {
        getUserName();
      }
    }
  }

  const clearUserNameField = (e) => {
    setUserName('');
    setUpUserName(e);
  }

  const isShownGameOver = (value) => {
    setIsOverShow(false);
  }

  const onSwowNavMenu = (value) => {
    setIsShowNavMenu(value);
  }

  return (
    <div className={gameStyles.gameCenterContainer}>
      <div className={styles.resultsContainer}>
        <div className={styles.timer}><span id='userName' contenteditable='true' onClick={clearUserNameField} onKeyPress={setUpUserName} onBlur={setUpUserName}>{userName}</span></div>
        {/* <div className={styles.timer}>
          <img src='../../images/hourglass.png' alt='game-time' />
          <Timer/>
        </div> */}
        <div className={styles.stepCounter}>
          <img src='../../images/counter.png' alt='step-count' />
          <span>{counter}</span> 
        </div>
      </div>

      { isOverShow ?  <GameOver isNewStart={startNewGame} isShownGameOver={isShownGameOver} isOpen={isOverShow} text={lang === 'en' ? `Congratulations! You solved the puzzle in ${counter} moves.` : `Вы выйграли! Количество шагов ${counter}`}/> : null}
      
      <div className={gameStyles.gameContainer}>
        <GameChips backImage={backImg} sizeGame={sizeGame} gameItems={board} gamePrefield={gamePrefield} updateBoard={updateBoard.bind(this)}/>
      </div>

      <div className={gameStyles.gameBtnContainer}>
        <Button className={gameStyles.gameBtn}>
          <img className={gameStyles.gameBtnImg} src='./images/pause.png' alt='pause' />
        </Button>
        <Button className={gameStyles.gameBtn} onClick={startNewGame}>
          <img className={gameStyles.gameBtnImg} src='./images/repeate.png' alt='repeate-game' />
        </Button>
        <Button className={gameStyles.gameBtn} onClick={()=> {setIsShowNavMenu(true)}}>
          <img className={gameStyles.gameBtnImg} src='./images/menu.png' alt='nav-menu' />
        </Button>
      </div>
      { isShowNavMenu ? <Navigation isShownNav={onSwowNavMenu} /> : null}
    </div>
  )
}

const mapStateToProps = (state) => ({
  size: state.settings[3].state,
  lang: state.lang
});

export default connect(mapStateToProps)(GameField);