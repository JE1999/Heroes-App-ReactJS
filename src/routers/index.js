import React, { useContext, useMemo } from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { AuthContext } from "../hooks/Context/Auth/AuthContext";
import { ModeThemeContext } from '../hooks/Context/ModeTheme/ModeThemeContext'

import urlTypes from "../types/urlTypes";

import DashboardRoutes from "./DashboardRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

import Login from "../pages/Login";

import ScrollToTop from "../utils/ScrollToTop";
import schemaMaterialUI from "../utils/schemaMaterialUI";

export default function AppRouters () {

    const { user } = useContext(AuthContext)
    const { stateModeDark } = useContext(ModeThemeContext)

    const theme = useMemo(() => createMuiTheme(schemaMaterialUI(stateModeDark)), [stateModeDark])

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <ScrollToTop />
                    <Switch>
                        <PublicRoutes 
                            isAuthenticated={user.logged} 
                            exact 
                            path={urlTypes.login.url}
                            component={Login} 
                        />

                        <PrivateRoutes 
                            isAuthenticated={user.logged}
                            path="/" 
                            component={DashboardRoutes} 
                        />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    )
}
