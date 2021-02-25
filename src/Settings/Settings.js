import settingsStyles from './SettingsStyle';
import SettingsItems from './components/SettingsItems';
import ToggleButtons from './components/ToggleButtons';

export default function Game(props) {
  const styles = settingsStyles();
  return (
    <div className={styles.gameCenterContainer}>
      <SettingsItems />
      <ToggleButtons />
    </div>
  )
}