import React, {useState} from 'react';
import settingsStyles from './SettingsStyle';
import SettingsItems from './components/SettingsItems';
import ToggleButtons from './components/ToggleButtons';
import { Button } from '@material-ui/core';
import Navigation from '../Navigation/Navigation';
import { connect } from 'react-redux';

function Settings({ lang }) {
  const styles = settingsStyles();
  const [isSwowNavMenu, setIsSwowNavMenu] = useState(false);

  function handleChangeNavShown(e) {
    setIsSwowNavMenu(e);
  }

  return (
    <div className={styles.gameCenterContainer}>
      <SettingsItems />
      <ToggleButtons />
      <Button className={styles.navButton} onClick={() => { setIsSwowNavMenu(true) }}>{lang === 'en' ? 'Nav menu' : 'Меню навигации'}</Button>
      {isSwowNavMenu ? <Navigation isShownNav={handleChangeNavShown}/> : null}
    </div>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang
});

export default connect(mapStateToProps)(Settings);