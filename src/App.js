import Game from './Game/Game';
import Settings from './Settings/Settings';
import commonStyles from './common/styles/common';

function App() {
  const styles = commonStyles();
  return (
    <div className={styles.containerPageCenter}>
      <Game />
      <Settings />
    </div>
  );
}

export default App;
