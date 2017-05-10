import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    const { profile_picture, full_name, username } = this.props.data;
    const { logout } = this.props;
    return (
      <div className="row pt-3">
        <div className="col">
          <div>
            <img src={profile_picture} alt={`${full_name}`} className="rounded-circle mr-2" width="60" />
            <span>
              <strong>@{username}</strong>
            </span>
          </div>
        </div>
        <div className="col text-right">
          <Link to='/' className="btn btn-primary" onClick={logout}>Log Out</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
