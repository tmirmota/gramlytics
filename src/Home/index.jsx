import React, { Component } from 'react';
import './style.css';

<<<<<<< HEAD:src/components/Home/index.jsx
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
=======
const Home = () => {
  const baseUrl = 'https://api.instagram.com/oauth/authorize/?';
  const clientId = 'da308c7a4fd74a8ca9456eef52fc9c0d';
  const redirectUrl = 'http://localhost:3000/dashboard';
  const url = `${baseUrl}client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token`;;
  return (
    <div className="container-fluid">
      <div className="row container-homepage">
        <div className="col align-self-center text-center">
          <a className="btn btn-primary p-2" href={url}>
            <i className="fa fa-instagram pr-2"></i>
            Instagram Login
          </a>
>>>>>>> client-side-app:src/Home/index.jsx
        </div>
      </div>
    );
  }
}
