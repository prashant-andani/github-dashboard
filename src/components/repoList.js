import React from 'react';
import PropTypes from 'prop-types';
const repoList = ({repoList}) => {
  const list = repoList.map((repo) => 
    <a href={repo.html_url} className="list-group-item" key={repo.id}>
      <div className="title">
      {repo.name}
      </div>
      <div>
        <span className="stats">
          <i className="fa fa-eye"></i> {repo.watchers_count}
        </span>
        <span className="stats">
          <i className="fa fa-star"></i> {repo.stargazers_count}
        </span>
        <span className="stats">
          <i className="fa fa-code-fork"></i> {repo.forks}
        </span>
        <span className="badge badge-secondary pull-right">{repo.language}</span>
      </div>
    </a>
  );
  return (
    <div>
      {list}
    </div>
    
  );
};
repoList.propTypes = {
  repoList: PropTypes.array   
}
export default repoList;
