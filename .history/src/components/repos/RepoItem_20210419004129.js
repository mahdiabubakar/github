import React from 'react';
import PropTypes from 'prop-types'


const RepoItem = ({ repo }) => {
    return (
        <div className='card' style={repoItem}>
            <div>
                <a href={repo.html_url}>{repo.name}</a>
                { repo.language && <p><strong>Language: </strong>{repo.language}</p> }
            </div>
            <div>
                {repo.watchers > 0 ? <p><i className="far fa-stars"></i>{repo.watchers}</p> : <i className="far fa-stars"></i> }
        
            </div>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

const repoItem = {
    display: 'flex',
    justifyContent: 'space-between'
}

export default RepoItem; 