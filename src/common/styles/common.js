import { makeStyles } from '@material-ui/core';

export const stylesCommonObj = {
  containerPageCenter: {
    margin: '0 auto',
    maxWidth: '1200px',
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

  modalDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    height: '250px',
    background: 'url(./images/gameBackground.png)',
    backgroundSize: 'cover',
    zIndex: '12',
    position: 'absolute',
    top: '45%',
    borderRadius: '5px',
    padding: '20px',
    fontWeight: 'bold',
    fontSize: '22px',
    flexDirection: 'column',
    textAlign: 'center'
  },

  modalButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '40px',
    columnGap: '1em'
  },

  modalButton: {
    background: '#d9d9d970',

    '&:hover': {
      background: '#00000054',
    }
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

};

const stylesCommon = makeStyles(stylesCommonObj);

export default stylesCommon;