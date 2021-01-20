import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

const AppButton = (props) => {

    const { 
        variant='contained', 
        color='primary', 
        title='Click!', 
        startIcon=null,
        type="button",
        className="",
        handleClick=() => console.log('Click'),
        fullWidth=false
    } = props

    return (
        <Button 
            variant={variant} 
            color={color} 
            startIcon={startIcon}
            type={type}
            className={className}
            onClick={() => handleClick()}
            fullWidth={fullWidth}
        >
            {title}
        </Button>
    )
}

AppButton.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    startIcon: PropTypes.object,
    type: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.func,
    fullWidth: PropTypes.bool,
}

export default memo(AppButton)