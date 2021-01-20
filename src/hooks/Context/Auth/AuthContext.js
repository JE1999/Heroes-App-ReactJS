import { createContext, useReducer, useEffect } from 'react'

import authReducer from '../../../reducer/Auth/authReducer';

import localStorageTypes from '../../../types/localStorageTypes';

export const AuthContext = createContext();

const init = () => JSON.parse(localStorage.getItem(localStorageTypes.user)) || { logged: false }

const AuthProvider = ({ children }) => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        localStorage.setItem(localStorageTypes.user, JSON.stringify(user))
    }, [user])

    return(
        <AuthContext.Provider
            value={{
                user,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;