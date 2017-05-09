import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

// Components
import Admin from './components/Admin';
import StatsList from './components/StatsList';

// Instagram API
// const domain = 'https://api.instagram.com/v1/users/';
// const clientId = 	'da308c7a4fd74a8ca9456eef52fc9c0d';
// const redirectUri = 'http://localhost:3000/';
const userId = '300843785';
const accessToken = '300843785.da308c7.6186503d81584163b0dcf756a9417667';
const url = `https://api.instagram.com/v1/users/${userId}/?access_token=${accessToken}`;

class App extends Component {
  state = {
    instaData: null
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
        <div className="wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <Admin data={instaData} />
              </div>
              <div className="col">
                <StatsList data={instaData} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
