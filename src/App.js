import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

import Header from './components/header';
import RepoContainer from './components/repoContainer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {repoList: [], isError: false};
    this.getGithubData = this.getGithubData.bind(this);
    this.onUserName = this.onUserName.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Header onUserName={this.onUserName}/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <RepoContainer repoList={this.state.repoList}/>
            </div>
          </div>
        </div>
      </div>
    );

  }

  onUserName(userName) {
    this.getGithubData(userName);
  }

  getGithubData(userName) {
    let uri = `https://api.github.com/users/${userName}/repos`
    axios.get(uri)
    .then((response) => {
      this.setState({
        repoList: response.data
      });
      console.log(this.state.repoList);
    })
    .catch((error) => {
      this.setState({
        isError: true
      })
    });
  }
}

export default App;
