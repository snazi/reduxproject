import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchBox} from './assets/components/search-box/search-box.component'
import { setNewUser } from './assets/components/redux/redux/user/user.actions'

import { connect } from 'react-redux'

class App extends Component {

  handleChange = (e) => {
    this.props.setNewUser(e.target.value)
}
  render() {
    return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {this.props.currentUser}
          <SearchBox 
            placeholder='pls enter user here!'
            handleChange={this.handleChange}
          />
        </header>
      </div>
    );
  }
  
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setNewUser: input => dispatch(setNewUser(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
