import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { firebaseAuth } from './config/constants';
import $ from 'jquery';
import _ from 'lodash';
import './App.css';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Components
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(porps) => authed === true}
  );
}

export default class App extends Component {
  state = {
    userInfo: {},
    recentImgs: [],
    loggedIn: false,

    // Instagram account login info
    accessToken: '',
    userId: ''
  }

  componentWillMount() {
    // Check the params for access token
    const uri = window.location.hash;
    const isToken = uri.indexOf('access_token') > -1;
    if (isToken) {
      const accessToken = uri.replace('#access_token=', '');
      const userId = parseFloat(accessToken);

      this.setState({ accessToken, userId }, () => {
        this.requestInstaData();
      });
    }
  }

  requestInstaData() {
    const { userId, accessToken } = this.state;
    const baseDomain = 'https://api.instagram.com/v1/';

    // Get request urls
    const userUrl = `${baseDomain}users/${userId}/?access_token=${accessToken}`;
    const imgsUrl = `${baseDomain}users/${userId}/media/recent/?access_token=${accessToken}`;

    // // Request account information
    // $.ajax({
    //   type: "GET",
    //   url: userUrl,
    //   crossDomain: true,
    //   success: function(response) {
    //     this.setState({ userInfo: response.data, loggedIn: true })
    //   }.bind(this),
    //   dataType: "jsonp" //set to JSONP, is a callback
    // });
    //
    // // Request recent images
    // $.ajax({
    //   type: "GET",
    //   url: imgsUrl,
    //   crossDomain: true,
    //   success: function(response) {
    //     const recentImgs = _.reverse(response.data);
    //     this.setState({ recentImgs })
    //   }.bind(this),
    //   dataType: "jsonp" //set to JSONP, is a callback
    // });
  }

  logout = () => {
    this.setSate({
      loggedIn: false,
      accessToken: '',
      userId: ''
    });
  }

  render() {
    const { userInfo, recentImgs, loggedIn } = this.state;
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route path='/' render={() => (
              loggedIn ?
                <Redirect to={`/dashboard/${userInfo.username}`} />
                :
                <Home />
            )} />
            <Route path='/dashboard/:username' render={() => (
              loggedIn ?
                <Dashboard
                  userInfo={userInfo}
                  recentImgs={recentImgs}
                  loggedIn={loggedIn}
                  logout={this.logout} />
                :
                <Redirect to='/' />
            )} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
