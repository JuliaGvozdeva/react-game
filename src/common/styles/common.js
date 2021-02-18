import { makeStyles } from '@material-ui/core';

export const stylesCommonObj = {
  containerPageCenter: {
    margin: '0 auto',
    width: '1200px',
    padding: '0px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const stylesCommon = makeStyles(stylesCommonObj);

export default stylesCommon;