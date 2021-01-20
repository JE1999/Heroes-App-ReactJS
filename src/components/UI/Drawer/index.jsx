import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';

import Bar from './Bar'
import AppDrawer from './Drawer';

import AppContainer from '../../Container';

import { miniDrawerStyles } from './Style';

const MiniDrawer = ({children}) => {

  const classes = miniDrawerStyles();
  
  const [open, setOpen] = useState(true);

  const handleDrawer = useCallback(() => {
    setOpen(!open);
  }, [open])

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

export default memo(MiniDrawer);
