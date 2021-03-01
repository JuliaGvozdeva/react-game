import React, {useState} from 'react';
import commonStyle from '../../../../common/styles/common'; 
import { Button } from '@material-ui/core';

export default function GameOver(props) {
  const stylesCommon = commonStyle();
  const [isShown, setIsShown] = useState(props.isOpen);

  const startNewGame = () => {
    setIsShown(false);
    props.isNewStart(true);
  }

  const goToStart = () => {
    setIsShown(false);
    window.location.href = '/';
  }

  console.log('isShown', isShown)
  if (isShown) {    
    return (
      <div className={stylesCommon.centerContainer}>
          <div className={stylesCommon.modalDiv}>
            {`${props.text} You time: 1, score: ${props.score}.`}
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