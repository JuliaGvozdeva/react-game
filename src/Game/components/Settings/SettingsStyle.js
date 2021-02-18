import { makeStyles } from '@material-ui/core';

export const stylesGame = {
  gameCenterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '5%'
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