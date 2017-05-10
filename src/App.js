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
    loggedIn: false
  }
  componentWillMount() {
    const uri = window.location.hash;
    const isToken = uri.indexOf('access_token') > -1;
    if (isToken) {
      const accessToken = uri.replace('#access_token=', '');
      const userId = parseFloat(accessToken);
      const url = `https://api.instagram.com/v1/users/${userId}/?access_token=${accessToken}`;

      // Instagram API request
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
  }

  render() {
    const { instaData, loggedIn } = this.state;
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route path='/' render={() => (
              loggedIn ?
                <Redirect
                  to='/dashboard/:user_name' />
                :
                <Home />
            )} />
            <Route
              path='/dashboard/:user_name'
              component={() => <Dashboard data={instaData} logout={() => this.setState({ loggedIn: false })}/>} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
