import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';

import Bar from './Bar'
import AppDrawer from './Drawer';

import AppContainer from '../../Container';

import { miniDrawerStyles } from './Style';
import { ModeThemeContext } from '../../../hooks/Context/ModeTheme/ModeThemeContext';

const MiniDrawer = ({children}) => {

  const classes = miniDrawerStyles();

  const { open, handleDrawer } = useContext(ModeThemeContext)

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Bar open={open} handleDrawer={handleDrawer} />
      
      <AppDrawer open={open} handleDrawer={handleDrawer} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
          <AppContainer>
            {children}
          </AppContainer>
      </main>
    </div>
  );
}

MiniDrawer.propTypes = {
  children: PropTypes.object.isRequired,
}

export default MiniDrawer;
