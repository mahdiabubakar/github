import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';


const Repos = ({ repos }) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}

Repo.propTypes = {
    repo: PropTypes.array.isRequired
}

export default Repos;