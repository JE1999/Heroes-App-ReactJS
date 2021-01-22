import React from 'react'

import { NavLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { appDrawerStyles } from './Style';

const AppListItem = ({optionsMenu}) => {

    const classes = appDrawerStyles();

    return (
        <ListItem 
            button 
            component={NavLink} 
            to={optionsMenu.url} 
            activeClassName={classes.active}
        >
            <ListItemIcon>{optionsMenu.icon}</ListItemIcon>
            <ListItemText primary={optionsMenu.name} />
        </ListItem>
    )
}

export default AppListItem