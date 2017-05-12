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

    // Change 'created_time' to day of the week
    const chartImgs = recentImgs.map(img => {
      const update = _.update(img, 'created_time', secs => {
        const date = new Date(secs * 1000);
        const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
        const day = days[date.getDay()];
        return day;
      });
      return update;
    });

    if (loggedIn) {
      return (
        <div className="container">

          <header className="pt-3">
            <Navigation data={userInfo} logout={logout} />
          </header>

          <hr className="pb-5"/>

          <div>
            <Likes
              rankedImgs={rankedImgs}
              chartImgs={chartImgs}
              recentImgs={recentImgs} />
          </div>

          <div>
            <AccountSummary data={userInfo} rankedImgs={rankedImgs} />
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
