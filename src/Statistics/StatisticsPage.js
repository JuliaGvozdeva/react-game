import React, {useState} from 'react';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import useStyles from './StatisticsStyles';
import Navigation from '../Navigation/Navigation';
import { connect } from 'react-redux';

function StatisticsPage({lang}) {
  const styles = useStyles();
  const [isSwowNavMenu, setIsSwowNavMenu] = useState(false);
  const statistics = localStorage.statistics ?  JSON.parse(localStorage.statistics) : [];

  function handleChangeNavShown(e) {
    setIsSwowNavMenu(e);
  }

  return (
    <div className={styles.statisticsContainer}>
      <Button className={styles.navButton} onClick={() => { setIsSwowNavMenu(true) }}>{lang === 'en' ? 'Nav menu' : 'Меню навигации'}</Button>
      {isSwowNavMenu ? <Navigation isShownNav={handleChangeNavShown}/> : null}
      
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead style={{backgroundColor: '#b05a009e', fontWeight: 'bold'}}>
            <TableRow classes={styles.tableHead}>
              <TableCell>Player name</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Game field size</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { statistics.length !== 0 ? statistics.map((row) => (
              <TableRow key={row.name} style={{backgroundColor: 'rgb(206 162 115 / 43%)'}}>
                <TableCell component="th" scope="row">
                  {row.name || 'unknown'}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">{row.size}</TableCell>
              </TableRow>
            )) : <span className={styles.warning}>No items yet.</span>}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}


const mapStateToProps = (state) => ({
  lang: state.lang
});

export default connect(mapStateToProps)(StatisticsPage);