import NavStyles from './StylesNav';
import { Button } from '@material-ui/core';
import Game from '../Game/Game';
import Settings from '../Settings/Settings';
import StartPage from '../Settings/Settings';
import Statistics from '../Statistics/StatisticsPage';
import React from "react";
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function handleChange(e) {
  const modalWindow = document.getElementById('navModalContainer');
  modalWindow.classList.toggle('modalHidden');
}

function Navigation({ lang, theme }) {
  const styles = NavStyles();

  return (
    <div className={styles.navModalContainer} id='navModalContainer'>
      <nav className={styles.navMenu}>
        <Link to='/game' ><Button className={styles.navMenuItem} onClick={handleChange}>{lang === 'en' ? 'Game' : 'Игра'}</Button></Link>
        <Link to='/statistics' ><Button className={styles.navMenuItem} onClick={handleChange}>{lang === 'en' ? 'Statistics' : 'Статистика'}</Button></Link>
        <Link to='/settings' ><Button className={styles.navMenuItem} onClick={handleChange}>{lang === 'en' ? 'Settings' : 'Настройки'}</Button></Link>
      </nav>

      <div className={styles.overlay}></div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  theme: state.theme,
});

export default connect(mapStateToProps)(Navigation);