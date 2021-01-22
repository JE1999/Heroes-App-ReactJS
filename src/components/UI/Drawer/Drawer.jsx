import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import urlTypes from '../../../types/urlTypes';
import AppListItem from './ListItem'

import { appDrawerStyles } from './Style';

function AppDrawer ({open, handleDrawer}) {

    const classes = appDrawerStyles();

    const optionsMenu = [
        urlTypes.marvel,
        urlTypes.dc,
        urlTypes.search,
    ]

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>

            <Divider />
            
            <List>
                {optionsMenu.map((optionsMenu) => (
                    <AppListItem
                        key={optionsMenu.name}
                        optionsMenu={optionsMenu}
                    />
                ))}
            </List>
        </Drawer>
    )
}

AppDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawer: PropTypes.func.isRequired,
}

export default AppDrawer;
