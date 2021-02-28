import { BrowserRouter as Router } from 'react-router-dom';
import commonStyles from './common/styles/common';
import Switcher from './common/Switcher/Switcher';
import Navigation from './Navigation/Navigation';
import { Button } from '@material-ui/core';
import React, { useState } from "react";

function App() {
  const styles = commonStyles();
  const [isSwowNavMenu, setIsSwowNavMenu] = useState(false);
  // <Button onClick={() => { setIsSwowNavMenu(false) }}><img src='./images/close.png' alt='close-nav-menu' /></Button> 
  return (
    <Router>
      <div className={styles.containerPageCenter}>
        <Switcher />
        {isSwowNavMenu
          ? <div>
            <Button className={styles.toggleNavButton} onClick={() => { setIsSwowNavMenu(false) }}><img src='./images/close.png' alt='nav-menu' /></Button>
            <Navigation />
          </div>
          : <Button className={styles.toggleNavButton} onClick={() => { setIsSwowNavMenu(true) }}><img src='./images/menu.png' alt='nav-menu' /></Button>}
      </div>
    </Router>
  );
}

export default App;
