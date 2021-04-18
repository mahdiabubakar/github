import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


const UserItem = ({user: { login, html_url, avatar_url }}) => {
    
        return (
            <div className='card text-center'>
                <img 
                    src={avatar_url} 
                    alt="" 
                    className='round-img' 
                    style={{ width: '60px' }} 
                />       
                <h3>{ login }</h3>
                <div>
                    <Link to={`/user/${login}`} className="btn btn-sm btn-dark my-1">More</Link>
                </div>
            </div>
        )
}

UserItem.prototype = {
    user: PropTypes.object.isRequired,
}

export default UserItem;
