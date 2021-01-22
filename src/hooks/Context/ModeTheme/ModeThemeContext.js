import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import localStorageTypes from '../../../types/localStorageTypes'

export const ModeThemeContext = createContext()

const ModeThemeProvider = ({children}) =>{

    const [stateModeDark, setStateModeDark] = useState('')
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setStateModeDark(localStorage.getItem(localStorageTypes.modeDark) || '')
    }, [setStateModeDark])

    const modeDark = () => {
        stateModeDark === '' ? localStorage.setItem(localStorageTypes.modeDark, 'true') : localStorage.setItem(localStorageTypes.modeDark, '')
        setStateModeDark(stateModeDark === '' ? 'true' : '')
    }

    const handleDrawer = () => {
        setOpen(!open);
    }

    return(
        <ModeThemeContext.Provider
            value={{
                stateModeDark,
                open,
                modeDark,
                handleDrawer
            }}
        >
            {children}
        </ModeThemeContext.Provider>
    )

}

ModeThemeProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default ModeThemeProvider
