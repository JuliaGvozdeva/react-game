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
  },

  settingsConatainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
    rowGap: '1em'
  },

  settingsItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '1em'
  },

  settingsImg: {
    width: '60px',
    height: '60px'
  },

  sliderControl: {
    width: '150px',
  },

  toggleContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '2em',
    marginTop: '2em',
    color: 'black'
  },

  toggleButton: {
    color: 'black!important',
    border: '1px solid rgb(0 0 0 / 50%);',
    backgroundColor: 'rgb(201 105 0 / 62%)'
  },

  navButton: {
    marginTop: '20px',
    width: '100%',
    color: 'black!important',
    border: '1px solid rgb(0 0 0 / 50%);',
    backgroundColor: 'rgb(201 105 0 / 62%)',

    '&:hover': {
      backgroundColor: 'rgb(201 105 0 / 22%)',
    }
  }
};

const styles = makeStyles(stylesGame);

export default styles;