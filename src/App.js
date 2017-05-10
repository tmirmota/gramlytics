import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import $ from 'jquery';
import './App.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Home from './components/Home';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    instaData: null,
    loggedIn: false,

    // Instagram account login info
    accessToken: '',
    userId: '',
    url: ''
  }

  componentWillMount() {
    // Check the params for access token
    const uri = window.location.hash;
    const isToken = uri.indexOf('access_token') > -1;
    if (isToken) {
      const accessToken = uri.replace('#access_token=', '');
      const userId = parseFloat(accessToken);
      const url = `https://api.instagram.com/v1/users/${userId}/?access_token=${accessToken}`;
      this.setState({ accessToken, userId, url }, () => {
        this.requestInstaData();
      });
    }
  }

  requestInstaData() {
    const { url } = this.state;
    // Request access to instagram data with token
    $.ajax({
      type: "GET",
      url: url,
      crossDomain: true,
      success: function(response) {
        this.setState({ instaData: response.data, loggedIn: true })
      }.bind(this),
      dataType: "jsonp" //set to JSONP, is a callback
    });
  }

  logout = () => {
    this.setSate({
      loggedIn: false,
      accessToken: '',
      userId: '',
      url: ''
    });
  }

  render() {
    const { instaData, loggedIn } = this.state;
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route path='/' render={() => (
              loggedIn ?
                <Redirect to={`/dashboard/${instaData.username}`} />
                :
                <Home />
            )} />
            <Route path='/dashboard/:username' render={() => (
              loggedIn ?
                <Dashboard data={instaData} logout={this.logout} />
                :
                <Redirect to='/' />
            )} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
