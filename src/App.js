import React, { Component } from 'react';
import axios from 'axios';
import './App.css';




// Instagram API
// const domain = 'https://api.instagram.com/v1/users/';
// const clientId = 	'da308c7a4fd74a8ca9456eef52fc9c0d';
// const redirectUri = 'http://localhost:3000/';
const userId = '300843785';

const accessToken = '300843785.da308c7.6186503d81584163b0dcf756a9417667';
const url = `https://api.instagram.com/v1/users/${userId}/?access_token=${accessToken}`;

class App extends Component {
  componentWillMount() {
    axios.get(url, {
      headers: {"Access-Control-Allow-Origin": "*"},
    }).then(res => {
        console.log(res);
      });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="container">

        </div>
      </div>
    );
  }
}

export default App;
