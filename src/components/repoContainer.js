import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepoList from './repoList';

class RepoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      repoType: 'source', 
      sourceRepo: [],
      forkedRepo: [],
      currentRepo: [],
      repoList: this.props.repoList
    };

    this.onRepoTypeChange = this.onRepoTypeChange.bind(this);
    this.filterRepo = this.filterRepo.bind(this);
    this.setCurrentRepo = this.setCurrentRepo.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.repoList !== this.props.repoList){
      this.setState({repoList: nextProps.repoList});
      this.setCurrentRepo();
    }
  }

  render() {
    if(this.props.repoList.length === 0) {
      return null;
    }

    return (
      <div className="card">
        <div className="card-header">
          <div>
          My Repositories <span className="badge badge-dark">
          {this.props.repoList.length}</span>
          </div>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-sm btn-outline-dark">
              <input type="radio" name="options" value="source" id="option1" 
              autoComplete="off" onChange={this.onRepoTypeChange}
              checked={this.state.repoType === 'source'} /> Source
            </label>
            <label className="btn btn-sm btn-outline-dark">
              <input type="radio" name="options" value="forked" id="option2" 
              autoComplete="off" onChange={this.onRepoTypeChange}
              checked={this.state.repoType === 'forked'}/> Forked
            </label>
          </div>
        </div>
        
        <div className="list-group list-group-flush repoList">
          <RepoList repoList={this.state.currentRepo}/>
        </div>
      </div>
    );
  }

  setCurrentRepo() {
    let isFork = this.repoType === 'forked' || false;
    this.setState({
      currentRepo: this.filterRepo(isFork)
    })
  }

  onRepoTypeChange(e) {
    e.preventDefault();
    this.setState({
      repoType: e.target.value
    })
    this.setCurrentRepo();
  }

  filterRepo(isForked) {
    console.log(this.props.repoList);
    this.props.repoList.filter((repo) => {
      return repo.fork === isForked;
    })
  }
}

export default RepoContainer;

RepoContainer.propTypes = {
  repoList: PropTypes.array   
}
