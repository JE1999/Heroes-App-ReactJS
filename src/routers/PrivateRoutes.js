import React from 'react'
import PropsTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import urlTypes from '../types/urlTypes'

export const PrivateRoutes = ({isAuthenticated, component: Component, ...rest}) => {
    return (
        <Route {...rest}
            component={props =>(
                isAuthenticated
                    ?   <Component {...props} />
                    :   <Redirect to={urlTypes.login.url} />
            )}
        />
    )
}


PrivateRoutes.propsTypes = {
    isAuthenticated: PropsTypes.bool.isRequired,
    component: PropsTypes.func.isRequired,
}