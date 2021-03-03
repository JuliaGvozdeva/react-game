import NavStyles from './StylesNav';
import { Button } from '@material-ui/core';
import React, {useState} from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

function handleChange(e) {
  const modalWindow = document.getElementById('navModalContainer');
  modalWindow.classList.toggle('modalHidden');
}

function Navigation({ lang, theme, isShown }) {
  const styles = NavStyles();

  const onShownNavMenu = (value) => {
    if (isShown) {
      isShown(value);
    }
  }

  return (
    <div className={styles.navModalContainer} id='navModalContainer'>
    {
      window.location.href.includes('game' || 'statistics' || 'settings') ? <Button className={styles.closeNavMenu} onClick={()=> {onShownNavMenu(false)}}><img src='./images/close.png' alt='nav-menu' /></Button> : null
    }
      <nav className={styles.navMenu}>
        <Link to='/game' ><Button className={styles.navMenuItem} onClick={handleChange}>{lang === 'en' ? 'New game' : 'Новая игра'}</Button></Link>
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