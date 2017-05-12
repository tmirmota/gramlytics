import React, { Component } from 'react';
import _ from 'lodash';

// Components
import Navigation from './Navigation';
import AccountSummary from './AccountSummary';
import Likes from './Likes';

class Dashboard extends Component {
  render() {
    // Dismount Props
    const { userInfo, recentImgs, loggedIn, logout } = this.props;

    // Sort top liked images desc
    const sortedImgs = _.sortBy(recentImgs, [img => {
      return img.likes.count;
    }]);
    const rankedImgs = sortedImgs.reverse(); // Sorted top liked images desc

    if (loggedIn) {
      return (
        <div className="container">

          <header className="pt-3">
            <Navigation data={userInfo} logout={logout} />
          </header>

          <hr className="pb-5"/>

          <div>
            <Likes rankedImgs={rankedImgs} recentImgs={recentImgs} />
          </div>

          <div>
            <AccountSummary data={userInfo} />
          </div>

          <footer>

          </footer>
        </div>
      );
    } else {
      return <i className="fa fa-spinner 3x"></i>;
    }
  }
}

export default Dashboard;
