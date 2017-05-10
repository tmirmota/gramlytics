import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import ProfilePic from './ProfilePic';

class Admin extends Component {
  render() {
    const { profile_picture, full_name } = this.props.data;
    const { logout } = this.props;
    return (
      <div className="row">
        <div className="col">
          <ProfilePic url={profile_picture} name={full_name} />
        </div>
        <div className="col">
          <Link to='/' className="btn btn-primary" onClick={logout}>Log Out</Link>
        </div>
      </div>
    );
  }
}

export default Admin;
