import React, { Component } from 'react';
import './style.css';

export default class Home extends Component {
  onSignInButtonClick() {
    window.open('/redirect', 'firebaseAuth', 'height=315,width=400')
  };
  render() {

    const redirectUrl = 'http://localhost:3000/instagram-callback';

    return (
      <div className="container-fluid">
        <div className="row container-homepage">
          <div className="col align-self-center text-center">
            <button className="btn btn-primary p-2 text-white" onClick={this.onSignInButtonClick}>
              <i className="fa fa-instagram pr-2"></i>
              Instagram Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
