import Game from './Game/Game'
import commonStyles from './common/styles/common'

function App() {
  const styles = commonStyles();
  return (
    <div className={styles.containerPageCenter}>
      <Game />
    </div>
  );
}

export default App;
