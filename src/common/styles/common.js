import { makeStyles } from '@material-ui/core';

export const stylesCommonObj = {
  containerPageCenter: {
    margin: '0 auto',
    width: '1200px',
    padding: '0px 20px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  toggleNavButton: {
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: '12'
  },

};

const stylesCommon = makeStyles(stylesCommonObj);

export default stylesCommon;