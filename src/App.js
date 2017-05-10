import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import $ from 'jquery';
import './App.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Home from './components/Home';
import Dashboard from './components/Dashboard';

// Instagram API
// const domain = 'https://api.instagram.com/v1/users/';
// const clientId = 	'da308c7a4fd74a8ca9456eef52fc9c0d';
// const redirectUri = 'http://localhost:3000/';
const userId = '300843785';
const accessToken = '300843785.da308c7.6186503d81584163b0dcf756a9417667';
const url = `https://api.instagram.com/v1/users/${userId}/?access_token=${accessToken}`;

class App extends Component {
  state = {
    instaData: null,

    // Instagram Account Information
    userId: ''
  }
  componentWillMount() {
    // Instagram API request
    $.ajax({
      type: "GET",
      url: url,
      crossDomain: true,
      success: function(response) {
        this.setState({ instaData: response.data})
          // $.each(response.data, function(index, obj) {
          //     console.log(obj.images.low_resolution.url);
          //
          //     $('#instagram_feed').append(
          //       "<li><a href='" + obj.link + "' target='_blank'><img src=" + obj.images.low_resolution.url + "/></a></li>"
          //     );
          // })
      }.bind(this),
      dataType: "jsonp" //set to JSONP, is a callback
    });
  }

  render() {
    const { instaData } = this.state;
    const isData = instaData !== null;
    if (isData) {
      return (
        <MuiThemeProvider>
          <Router>
            <Route exact path='/' component={Home} />
            <Route
              path='/dashboard/:userId'
              component={() => <Dashboard data={instaData} />} />
          </Router>
        </MuiThemeProvider>
      );
    } else {
      return null;
    }
  }
}

export default App;
