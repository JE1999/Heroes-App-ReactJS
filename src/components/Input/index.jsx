import React, { memo } from 'react'
import PropTypes from 'prop-types'

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';

const AppInput = ({label, name, type="text", register, defaultValue, messageError}) => (
    <FormControl 
        error={messageError ? true : false}
        variant="outlined"
        fullWidth
    >
        <InputLabel htmlFor="component-outlined">{label}</InputLabel>
        <OutlinedInput 
            id="component-outlined"
            label={label}
            name={name}
            type={type}
            defaultValue={defaultValue}
            inputRef={register()}
        />
        <FormHelperText id="component-error-text">{messageError}</FormHelperText>
    </FormControl>
)

AppInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    register: PropTypes.func.isRequired,
    defaultValue: PropTypes.string,
    messageError: PropTypes.string,
}

export default memo(AppInput)
