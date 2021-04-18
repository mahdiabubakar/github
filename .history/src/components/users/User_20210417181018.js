import React, { Component } from 'react'

class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    
    render() {

        const { 
            login,
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
        
        return (
            <div>
                User
            </div>
        )
    }
}

export default User
