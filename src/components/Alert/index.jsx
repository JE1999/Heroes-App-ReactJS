import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Alert from '@material-ui/lab/Alert';

const AppAlert = ({type="error", alertInfo}) => {
    return (
        <Alert variant="outlined" severity={type}>
            {alertInfo}
        </Alert>
    )
}

AppAlert.propTypes = {
    type: PropTypes.string,
    alertInfo: PropTypes.string.isRequired
}

export default memo(AppAlert)