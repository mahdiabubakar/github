import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    
    static propTypes = {
        loading: PropTypes.bool,
        getUser: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }
    
    render() {

        const { 
            login,
            name,
            avaatr_url,
            location,
            bio,
            blog,
            html_url,
            followers,
            following,
            public_gist,
            public_repos,
            hireable
         } = this.props.user;

         const { loading } = this.props;
        
        return (
            <div>
              {name}
            </div>
        )
    }
}

export default User
