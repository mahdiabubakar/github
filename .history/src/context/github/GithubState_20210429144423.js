import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { 
    SET_LOADING,
    SEARCH_USERS,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS

    // eslint-disable-next-line
 } from '../types';


const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;