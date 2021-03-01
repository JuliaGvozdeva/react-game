import React, {useState} from "react";
import Navigation from '../Navigation/Navigation';
import Game from '../Game/Game';
import Styles from '../common/styles/common';

export default function StartPage() {
  const styles = Styles();

  return (
    <div className={styles.centerContainer}>
      <Navigation />
      <Game gamePrefield={true} />
    </div>
  );
}
