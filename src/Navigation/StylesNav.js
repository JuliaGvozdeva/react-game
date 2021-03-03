import { makeStyles } from '@material-ui/core';

export const stylesNav = {
  navModalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    position: 'absolute',
    top: '45%'
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
  
  closeNavMenu: {
    zIndex: 12,
    position: 'fixed',
    top: 10,
    right: 10
  }
};

const styles = makeStyles(stylesNav);

export default styles;