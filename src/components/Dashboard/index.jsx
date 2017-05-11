import React, { Component } from 'react';
import _ from 'lodash';

// Components
import Nav from './Nav';
import AccountSummary from './AccountSummary';
import Likes from './Likes';

class Dashboard extends Component {
  render() {
    const { userInfo, recentImgs, logout } = this.props;
    const rankedImgs = _.sortBy(recentImgs, [img => {
      return img.likes.count;
    }]);
    return (
      <div className="container-fluid">
        <Nav data={userInfo} logout={logout} />
        <hr />
        <AccountSummary data={userInfo} />
        <hr />
        <Likes rankedImgs={rankedImgs} recentImgs={recentImgs} />
      </div>
    );
  }
}

export default Dashboard;
