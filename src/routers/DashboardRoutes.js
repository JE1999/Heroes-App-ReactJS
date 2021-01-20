import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import urlTypes from "../types/urlTypes";

import AppDrawer from '../components/UI/Drawer'

import DC from "../pages/DC";
import Hero from "../pages/Hero";
import Marvel from "../pages/Marvel";
import Search from "../pages/Search";

export default function DashboardRoutes () {
    return (
        <AppDrawer>
            <Switch>
                
                <Route exact path={urlTypes.marvel.url} component={Marvel} />
                <Route exact path={urlTypes.dc.url} component={DC} />
                <Route exact path={urlTypes.search.url} component={Search} />
                <Route exact path={`${urlTypes.hero.url}${urlTypes.hero.id}`} component={Hero} />

                <Redirect to={urlTypes.marvel.url} />

            </Switch>
        </AppDrawer>
    )
}
