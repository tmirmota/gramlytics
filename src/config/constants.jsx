import firebase from 'firebase';

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

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
