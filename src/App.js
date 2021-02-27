import { BrowserRouter as Router } from 'react-router-dom';
import commonStyles from './common/styles/common';
import Switcher from './common/Switcher/Switcher';

function App() {
  const styles = commonStyles();
  return (

    <Router>
      <div className={styles.containerPageCenter}>
        <Switcher />
      </div>
    </Router>
  );
}

export default App;
