import { makeStyles } from '@material-ui/core';

export const stylesGameFieldObj = {
  gameContainer: {
    background: 'url("../../../../images/gameBackground.png")',
    backgroundRepeate: 'no-repeate',
    backgroundSize: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 20px'
  },

  gameCenterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },

  gameFieldContainer: {
    minWidth: '330px',
    minHeight: '330px',
    background: '#24201b91',
    display: 'flex',
    flexDirection: 'rows',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '5px 5px'
  },

  gameItem: {
    minWidth: '95px',
    height: '95px',
    background: '#f4cfcff0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    border: '2px solid black',
    cursor: 'pointer',
    transition: '0.5s',

    '&:hover': {
      background: '#e9dbdb75',
    }
  },

  empty: {
    background: 'none',
    border: 'none',

    '&:hover': {
      background: 'none',
    }
  },

  gameBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '1em',
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

const styles = makeStyles(stylesGameFieldObj);

export default styles;