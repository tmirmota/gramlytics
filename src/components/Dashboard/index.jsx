import React, { Component } from 'react';
import _ from 'lodash';

// Components
import Nav from './Nav';
import AccountSummary from './AccountSummary';
import Likes from './Likes';

class Dashboard extends Component {
  render() {
    const { userInfo, recentImgs, loggedIn, logout } = this.props;

    // Sort top images desc likes
    const sortedImgs = _.sortBy(recentImgs, [img => {
      return img.likes.count;
    }]);
    const rankedImgs = sortedImgs.reverse();

    if (!loggedIn) {
      return <i className="fa fa-spinner 3x"></i>;
    } else {
      return (
        <div className="container-fluid">
          <Nav data={userInfo} logout={logout} />
          <hr />
          <AccountSummary data={userInfo} />
          <div className="mt-5">
            <Likes rankedImgs={rankedImgs} recentImgs={recentImgs} />
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
