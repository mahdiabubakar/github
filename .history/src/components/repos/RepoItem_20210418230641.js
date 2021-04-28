import React from 'react';
import PropTypes from 'prop-types'


const RepoItem = ({ repo }) => {
    console.log(repo)
    return (
        <div className='card' style={repoItem}>
            <div>
                <a href={repo.html_url}>{repo.name}</a>
                <p><strong>Language: </strong> {repo.language ? <i>{repo.language}</i> : <i>Note Specify</i>}</p>
            </div>
            <div>
                {repo.watchers > 0 && <p><i className="far fa-stars"></i>{repo.watchers}</p>}
        
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