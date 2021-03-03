import React from 'react';
import settingsStyles from '../SettingsStyle';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { connect } from 'react-redux';
import { toggleLang, toggleTheme } from '../../redux/actions';

const LANGUAGES = {
  en: 'en',
  ru: 'ru',
};

const THEME = {
  EN: {
    dark: 'dark',
    light: 'light'
  },
  RU:
  {
    dark: 'темная',
    light: 'светлая'
  }
};

function createToggleBtn(buttonItems) {
  const styles = settingsStyles();
  const buttons = Object.keys(buttonItems).map((item, idx) => (
    < ToggleButton
      value={item}
      key={`${item}${idx}`}
      classes={{root: styles.toggleButton}}
      color='primary'
    >
      {item.toUpperCase()}
    </ToggleButton >
  ));

  return buttons;
}

function ToggleButtons({ lang, toggleLang, theme, toggleTheme }) {
  const styles = settingsStyles();
  return (
    <div className={styles.toggleContainer}>
      <ToggleButtonGroup
        value={lang}
        exclusive
        onChange={toggleLang}
        key='lang'
        className={styles.toggleButton}
      >
        {createToggleBtn(LANGUAGES, styles)}
      </ToggleButtonGroup>
      <ToggleButtonGroup
        value={theme}
        exclusive
        onChange={toggleTheme}
        key='theme'
        className={styles.toggleButton}
      >
        {createToggleBtn(lang === 'en' ? THEME.EN : THEME.RU)}
      </ToggleButtonGroup>
    </div>

  );
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  theme: state.theme,
});

const mapDispatchToProps = {
  toggleLang,
  toggleTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButtons);
