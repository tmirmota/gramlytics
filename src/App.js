import React, { Component } from 'react';
<<<<<<< HEAD
import { firebaseAuth } from './config/constants';
=======
>>>>>>> client-side-app
import $ from 'jquery';
import _ from 'lodash';
import './App.css';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Components
import Dashboard from './components/Dashboard';

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

      // Set accessToken / userId and then request data
      this.requestInstaData(accessToken, userId);

    }
    window.location.hash = '';
  }

  render() {
    const {
      userInfo,
      recentImgs,
      featuredImg,
      loggedIn
    } = this.state;

    return (
      loggedIn ? (
        <MuiThemeProvider>
            <Dashboard
              userInfo={userInfo}
              recentImgs={recentImgs}
              setFeaturedImg={this.setFeaturedImg}
              featuredImg={featuredImg}
              logout={this.logout} />
        </MuiThemeProvider>
      ) : (
        <div>
          <a href="/" className="btn btn-primary">Go Home</a>
        </div>
      )
    )
  }

  requestInstaData(accessToken, userId) {
    const baseDomain = 'https://api.instagram.com/v1/';

    // Get request urls
    const userUrl = `${baseDomain}users/${userId}/?access_token=${accessToken}`;
    const imgsUrl = `${baseDomain}users/${userId}/media/recent/?access_token=${accessToken}`;

    // Request account information
    $.ajax({
      type: "GET",
      url: userUrl,
      crossDomain: true,
      success: function(response) {
        this.setState({
          userInfo: response.data
        })
      }.bind(this),
      dataType: "jsonp"
    });

    // Request recent images
    $.ajax({
      type: "GET",
      url: imgsUrl,
      crossDomain: true,
      success: function(response) {
        const recentImgs = _.reverse(response.data);
        this.setState({
          recentImgs,
          featuredImg: recentImgs[0],
          loggedIn: true
        })
      }.bind(this),
      dataType: "jsonp"
    });
  }
  logout = () => {
    this.setState({
      loggedIn: false,
      accessToken: '',
      userId: ''
    });
  }
<<<<<<< HEAD

  render() {
    const { userInfo, recentImgs, loggedIn } = this.state;
    return (
      <MuiThemeProvider>
        <Dashboard
          userInfo={userInfo}
          recentImgs={recentImgs}
          loggedIn={loggedIn}
          logout={this.logout} />
      </MuiThemeProvider>
    );
=======
  setFeaturedImg = (featuredImg, index) => {
    this.setState({featuredImg});
>>>>>>> client-side-app
  }
}
