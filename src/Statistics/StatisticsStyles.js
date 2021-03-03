import { makeStyles } from '@material-ui/core';

export const stylesStatistics = {
  statisticsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    paddingTop: '40px'
  },

  navigationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  navButton: {
    marginBottom: '20px',
    width: '50%',
    color: 'black!important',
    border: '1px solid rgb(0 0 0 / 50%);',
    backgroundColor: 'rgb(201 105 0 / 62%)',

    '&:hover': {
      backgroundColor: 'rgb(201 105 0 / 22%)',
    }
  },

  table: {
    minWidth: 450,
  },

  warning: {
    padding: '20px'
  }
};

const styles = makeStyles(stylesStatistics);

export default styles;