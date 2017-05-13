import React, { Component } from 'react';
import './home.css';
import * as firebase from 'firebase';

class Home extends Component {
  state = {
    speed: 10
  }
  onSignInButtonClick() {
    window.open('/redirect', 'firebaseAuth', 'height=315,width=400')
  };
  render() {
    const baseUrl = 'https://api.instagram.com/oauth/authorize/?';
    const clientId = 'da308c7a4fd74a8ca9456eef52fc9c0d';
    const redirectUrl = 'http://localhost:3000/';
    const url = `${baseUrl}client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token`;;
    return (
      <div className="container-fluid">
        <div className="row container-homepage">
          <div className="col align-self-center text-center">
            <a className="btn btn-primary p-2" href={url}>
              <i className="fa fa-instagram pr-2"></i>
              Instagram Login
            </a>
            <p>{this.state.speed}</p>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const db = firebase.database();
    const speedRef = db.ref().child('speed');
    console.log(speedRef);
    speedRef.on('value', snap => {
      console.log(3);
      this.setState({ speed: snap.val() });
    });
  }
}

export default Home;
