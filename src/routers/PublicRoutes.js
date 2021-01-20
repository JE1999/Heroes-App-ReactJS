import React from 'react'
import PropsTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

export const PublicRoutes = ({isAuthenticated, component: Component, ...rest}) => {
    return (
        <Route {...rest}
            component={props =>(
                !isAuthenticated
                    ?   <Component {...props} />
                    :   <Redirect to="/" />
            )}
        />
    )
}


PublicRoutes.propsTypes = {
    isAuthenticated: PropsTypes.bool.isRequired,
    component: PropsTypes.func.isRequired,
}