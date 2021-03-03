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

  toggleNavButton: {
    borderRadius: '50%',
    marginBottom: '10px',
    zIndex: '12'
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