import React, { memo } from 'react'
import PropTypes from 'prop-types'

const AppForm = ({ children, handleSubmit, onSubmit }) => (
    <form 
        onSubmit={handleSubmit(onSubmit)} 
        autoComplete="off"
    >
        { children }
    </form>
)

AppForm.propTypes = {
    children: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default memo(AppForm)
