import React, { Component } from 'react';
import _ from 'lodash';

// Components
import Nav from './Nav';
import AccountSummary from './AccountSummary';
import Likes from './Likes';

class Dashboard extends Component {
  render() {
    // Dismount
    const { userInfo, recentImgs, loggedIn, logout } = this.props;

    // Sort top liked images desc
    const sortedImgs = _.sortBy(recentImgs, [img => {
      return img.likes.count;
    }]);
    const rankedImgs = sortedImgs.reverse(); // Sorted top liked images desc

    if (loggedIn) {
      return (
        <div className="container-fluid">
          <header>
            <Nav data={userInfo} logout={logout} />
          </header>
          <hr />
          <AccountSummary data={userInfo} />
          <div className="mt-5">
            <Likes rankedImgs={rankedImgs} recentImgs={recentImgs} />
          </div>
        </div>
      );
    } else {
      return <i className="fa fa-spinner 3x"></i>;
    }
  }
}

export default Dashboard;
