import NavStyles from './StylesNav';
import { Button } from '@material-ui/core';
import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

function Navigation({ lang, theme, isShownNav }) {
  const styles = NavStyles();

  function handleChange() {
    isShownNav(false);
  }

  return (
    <div className={styles.navModalContainer}>
      {
        window.location.href.includes('game') || window.location.href.includes('statistics')  || window.location.href.includes('settings')  ? 
        <Button className={styles.closeNavMenu} onClick={handleChange}><img src='./images/close.png' alt='close-menu' /></Button> : null
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