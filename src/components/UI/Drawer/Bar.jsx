import React, { memo, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import AppButton from '../../Button'
import { AppTypographyParagraph } from '../../Typography';

import { ModeThemeContext } from '../../../hooks/Context/ModeTheme/ModeThemeContext'
import { AuthContext } from '../../../hooks/Context/Auth/AuthContext';

import authTypes from '../../../types/authTypes';
import urlTypes from '../../../types/urlTypes';

import { barStyles } from './Style'

function Bar ({open, handleDrawer}) {

    const classes = barStyles();
    const history = useHistory()

    const { modeDark } = useContext(ModeThemeContext)
    const { user, dispatch } = useContext(AuthContext)

    const handleLogout = () =>{
        dispatch({
            type: authTypes.logout
        })
        
        history.replace(urlTypes.login.url)
    }

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawer}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    HeroesApp
                </Typography>

                <AppTypographyParagraph
                    color="initial"
                >
                    {user.name}
                </AppTypographyParagraph>

                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    className={classes.iconDark}
                    onClick={() => modeDark()}
                >
                    <Brightness4Icon />
                </IconButton>

                <AppButton
                    variant="outlined" 
                    color="inherit" 
                    title="Logout" 
                    handleClick={handleLogout} 
                />
            </Toolbar>
        </AppBar>
    )
}

Bar.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawer: PropTypes.func.isRequired,
}

export default memo(Bar)
