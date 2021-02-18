import { makeStyles } from '@material-ui/core';

export const stylesGame = {
  gameCenterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '5%'
  },

  gameBtnContainer: {
    display: 'flex',
    flexDirection: 'rows',
    justifyContent: 'space-between',
    alignItems: 'center'
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

  gameBtn: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      width: '90px',
      height: '90px'
    },
  },

  gameBtnImg: {
    width: '100%',
    height: '100%'
  }

};

const styles = makeStyles(stylesGame);

export default styles;