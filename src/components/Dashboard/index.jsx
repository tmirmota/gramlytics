import React, { Component } from 'react';
import _ from 'lodash';

// Components
import Navigation from './Navigation';
import AccountSummary from './AccountSummary';
import Chart from './Chart';
import FeaturedImg from './FeaturedImg';

// Styles
const styles = {
  chart: {
    height: 200
  }
}

class Dashboard extends Component {
  render() {
    // Dismount Props
    const {
      userInfo,
      recentImgs,
      chartImgs,
      setFeaturedImg,
      featuredImg,
      loggedIn,
      logout
     } = this.props;

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

          <div style={styles.chart}>
            <Chart
              chartImgs={chartImgs}
              setFeaturedImg={setFeaturedImg} />
          </div>

          <FeaturedImg img={featuredImg} />

          <AccountSummary
            data={userInfo}
            rankedImgs={rankedImgs} />

        </div>
      );
    } else {
      return <i className="fa fa-spinner 3x"></i>;
    }
  }
}

export default Dashboard;
