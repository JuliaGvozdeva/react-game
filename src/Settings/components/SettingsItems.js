import settingsStyles from '../SettingsStyle';
import { connect } from 'react-redux';
import { toggleSetting } from '../../redux/actions';
import { FormControlLabel, Checkbox, Select, MenuItem, Slider } from '@material-ui/core';

const SETTINGS_ITEMS = {
  EN: {
    'areEffectsOn': 'Sound effects',
    'isMusicOn': 'Music',
    'musicVolume': 'Volume',
    'isSizeGame': 'Game size field',
  },
  RU: {
    'areEffectsOn': 'Звуковые эффекты',
    'isMusicOn': 'Музыка',
    'musicVolume': 'Громкость',
    'isSizeGame': 'Размер игрового поля',
  }
}

function createSettingsItem(item, lang, toggleSetting, styles) {
  if (item.id === 'musicVolume') {
    return (
      <div key={item.id} className={styles.settingsItem}>
        <img src={`../../images/${item.id}.png`} alt={item.id} className={styles.settingsImg} />
        <FormControlLabel
          key={item.id}
          control={
            <Slider
              aria-label='musicVolume'
              aria-labelledby="continuous-slider"
              value={item.state}
              onChange={toggleSetting}
              step={0.1}
              min={0}
              max={1} />
          }
          className={styles.sliderControl}
          label={lang === 'en' ? SETTINGS_ITEMS.EN[item.id] : SETTINGS_ITEMS.RU[item.id]}
        />
      </div>
    )
  } else if (item.id === 'isSizeGame') {
    return (
      <div key={item.id} className={styles.settingsItem}>
        <img src={`../../images/${item.id}.png`} alt={item.id} className={styles.settingsImg} />
        <FormControlLabel
          key={item.id}
          control={
            <Select
              value={item.state}
              checked={item.state}
              onChange={toggleSetting}
              name={item.id}
              color='primary'
            >
              <MenuItem value="3">3x3</MenuItem>
              <MenuItem value="4">4x4</MenuItem>
              <MenuItem value="5">5x5</MenuItem>
              <MenuItem value="6">6x6</MenuItem>
              <MenuItem value="7">7x7</MenuItem>
              <MenuItem value="8">8x8</MenuItem>
            </Select>
          }
          label={lang === 'en' ? SETTINGS_ITEMS.EN[item.id] : SETTINGS_ITEMS.RU[item.id]}
        />
      </div>)
  } else {
    return (
      <div key={item.id} className={styles.settingsItem}>
        <img src={`../../images/${item.id}.png`} alt={item.id} className={styles.settingsImg} />
        <FormControlLabel
          key={item.id}
          control={
            <Checkbox
              checked={item.state}
              onChange={toggleSetting}
              name={item.id}
              color='primary'
            />
          }
          label={lang === 'en' ? SETTINGS_ITEMS.EN[item.id] : SETTINGS_ITEMS.RU[item.id]}
        />
      </div>
    )
  }
}

function SettingsItems({ settings, lang, toggleSetting }) {
  const styles = settingsStyles();
  return (
    <div className={styles.settingsConatainer}>
      {settings.map((item) => {
        return createSettingsItem(item, lang, toggleSetting, styles);
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  settings: state.settings,
  lang: state.lang
});

const mapDispatchToProps = {
  toggleSetting
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsItems);