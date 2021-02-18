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

  gameFieldContainer: {
    width: '330px',
    height: '330px',
    background: '#24201b91',
    display: 'flex',
    flexDirection: 'rows',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 5px'
  },

  gameItem: {
    width: '100px',
    height: '100px',
    background: 'pink',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
};

const styles = makeStyles(stylesGameFieldObj);

export default styles;