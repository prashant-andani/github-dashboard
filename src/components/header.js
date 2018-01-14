import React, {Component} from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: 'prashant-andani' }; 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Github Dashboard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" aria-label="Search"
            placeholder="Github username" onChange={this.handleChange}
            value={this.state.userName}/>
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.handleSubmit}>Load Dashboard</button>
          </form>
        </div>
      </nav>
    )
  }

  handleChange(e) {
    this.setState({
      userName: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    if(!this.state.userName.length) {
      return;
    }
    this.props.onUserName(this.state.userName);
  }
}
export default Header;
