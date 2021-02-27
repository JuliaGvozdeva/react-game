import { makeStyles } from '@material-ui/core';

export const stylesNav = {
  navModalContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalHidden: {
    display: 'none',
    backgroundColor: 'red'
  },

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(20 19 19 / 75%)',
    zIndex: 10
  },

  navMenu: {
    zIndex: 11,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  navMenuItem: {
    listStyleType: 'none',
    width: '250px',
    height: '50px',
    textAlign: 'center',
    boxSizing: 'border-box',
    background: 'center / contain no-repeat url(./images/gameNavBg.png)',

    '& span': {
      color: 'black',
      textDecoration: 'none',
      textTransform: 'none'
    }
  },
};

const styles = makeStyles(stylesNav);

export default styles;