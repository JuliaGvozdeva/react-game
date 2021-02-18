import { Button } from '@material-ui/core';
import settingsStyles from './SettingsStyles';

const SETTINGS_ITEMS = {
  en: {
    'areEffectsOn': 'Sound effects',
    'isMusicOn': 'Music',
    'musicVolume': 'Volume',
    'isSizeGame': ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'],
  },
  ru: {
    'areEffectsOn': 'Звуковые эффекты',
    'isMusicOn': 'Музыка',
    'musicVolume': 'Громкость',
    'isSizeGame': ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'],
  }
}

export default function Game(props) {
  const styles = settingsStyles();

  
}