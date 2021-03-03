import { makeStyles } from '@material-ui/core';

export const stylesGame = {
  gameCenterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '5%'
  },

  resultsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '1em'
  },

  timer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20px',

    '& img': {
      width: '50px',
      height: '50x',
      marginRight: '10px'
    }
  },

  stepCounter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
      width: '50px',
      height: '50px',
      marginRight: '10px'
    }
  },

};

const styles = makeStyles(stylesGame);

export default styles;