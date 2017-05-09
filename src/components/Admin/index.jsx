import React, { Component } from 'react';

// Components
import ProfilePic from './ProfilePic';

class Admin extends Component {
  render() {
    const {profile_picture, full_name} = this.props.data;
    return (
      <div>
        <ProfilePic url={profile_picture} name={full_name} />
      </div>
    );
  }
}

export default Admin;
