import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBytTmwvHvBIJX6Ei8dPcyPXoSDpaVoWGQ",
  authDomain: "analyticsdashboardinsta.firebaseapp.com",
  databaseURL: "https://analyticsdashboardinsta.firebaseio.com",
  projectId: "analyticsdashboardinsta",
  storageBucket: "analyticsdashboardinsta.appspot.com",
  messagingSenderId: "333263424556"
};
firebase.initializeApp(config);

// Needed for Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
