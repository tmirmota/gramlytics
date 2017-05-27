import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './App.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    userInfo: {},
    recentImgs: [],
    chartImgs: [],
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
      chartImgs,
      featuredImg,
      loggedIn
    } = this.state;

    // Change 'created_time' to day of the week
    const chartImgsIsEmpty = chartImgs.length === 0;
    if (chartImgsIsEmpty) {
      const chartImgs = recentImgs.map(img => {
        const update = _.update(img, 'created_time', secs => {
          const date = new Date(secs * 1000);
          const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
          const day = days[date.getDay()];
          return day;
        });
        return update;
      });
      this.setState({ chartImgs });
    }


    return (
      <MuiThemeProvider>
          <Dashboard
            userInfo={userInfo}
            recentImgs={recentImgs}
            chartImgs={chartImgs}
            setFeaturedImg={this.setFeaturedImg}
            featuredImg={featuredImg}
            loggedIn={loggedIn}
            logout={this.logout} />
      </MuiThemeProvider>
    );
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
          userInfo: response.data,
          loggedIn: true
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
          featuredImg: recentImgs[0]
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
  setFeaturedImg = (featuredImg, index) => {
    this.setState({featuredImg});
  }
}

export default App;
