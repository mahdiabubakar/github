import React, { useReducer } from 'react';
import axios from 'axios';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import { SET_ALERT, REMOVE_ALERT } from '../types';


const AlertState = (props) => null;

    const [state, dispatch] = useReducer(AlertReducer, initialState)

   
    // Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });
    

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;