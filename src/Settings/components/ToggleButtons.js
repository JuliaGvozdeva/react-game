import React from 'react';
import settingsStyles from '../SettingsStyle';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { connect } from 'react-redux';
import { toggleLang, toggleImages } from '../../redux/actions';

const LANGUAGES = {
  en: 'en',
  ru: 'ru',
};

const CONTENT = {
  EN: {
    images: 'images',
    numbers: 'numbers'
  },
  RU:
  {
    images: 'Изображение',
    numbers: 'Числа'
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
      {buttonItems[item].toUpperCase()}
    </ToggleButton >
  ));

  return buttons;
}

function ToggleButtons({ lang, toggleLang, images, toggleImages }) {
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
        value={images}
        exclusive
        onChange={toggleImages}
        key='image'
        className={styles.toggleButton}
      >
        {createToggleBtn(lang === 'en' ? CONTENT.EN : CONTENT.RU)}
      </ToggleButtonGroup>
    </div>

  );
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  images: state.images,
});

const mapDispatchToProps = {
  toggleLang,
  toggleImages
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButtons);
