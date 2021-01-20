import React, { useContext } from 'react'
import AppButton from '../../components/Button'

import { AuthContext } from '../../hooks/Context/Auth/AuthContext'

import authTypes from '../../types/authTypes'
import urlTypes from '../../types/urlTypes'

export default function Login ({history}) {

    const {dispatch} = useContext(AuthContext)

    const handleClick = () =>{
        dispatch({
            type: authTypes.login,
            payload: {
                name: 'Fulanito'
            }
        })
    
        history.replace(urlTypes.marvel.url)
    }

    return (
        <div>
            <AppButton title="LOGIN" handleClick={handleClick} />
        </div>
    )
}
