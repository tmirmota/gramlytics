import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import ProfilePic from './ProfilePic';

class Admin extends Component {
  render() {
    const { profile_picture, full_name } = this.props.data;
    const { logout } = this.props;
    return (
      <div>
        <ProfilePic url={profile_picture} name={full_name} />
        <div className="text-center">
          <Link to='/' className="btn btn-primary" onClick={logout}>Log Out</Link>
        </div>
      </div>
    );
  }
}

export default Admin;
