import React, {useState} from 'react';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import useStyles from './StatisticsStyles';
// import commonUseStyles from '../common/styles/common';
import Navigation from '../Navigation/Navigation';

export default function StatisticsPage(props) {
  const styles = useStyles();
  // const commonStyles = commonUseStyles();
  let statistics = localStorage.statistics ?  JSON.parse(localStorage.statistics) : [];
  const [isSwowNavMenu, setIsSwowNavMenu] = useState(false);
  return (
    <div className={styles.statisticsContainer}>
      {isSwowNavMenu
        ? <div className={styles.navigationContainer}>
          <Button className={styles.toggleNavButton} onClick={() => { setIsSwowNavMenu(false) }}><img src='./images/close.png' alt='nav-menu' /></Button>
          <Navigation isSwowNavMenu={isSwowNavMenu}/>
        </div>
        : <Button className={styles.toggleNavButton} onClick={() => { setIsSwowNavMenu(true) }}><img src='./images/menu.png' alt='nav-menu' /></Button>}
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