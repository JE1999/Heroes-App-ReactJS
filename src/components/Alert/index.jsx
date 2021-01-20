import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Alert from '@material-ui/lab/Alert';

const AppAlert = ({q}) => {
    return (
        <Alert variant="outlined" severity="warning">
            No se encontró <b>{q}</b>
        </Alert>
    )
}

AppAlert.propTypes = {
    q: PropTypes.string.isRequired
}

export default memo(AppAlert)