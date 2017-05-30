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
  state = {
    chartImgs: []
  }
  render() {
    // Dismount Props
    const {
      userInfo,
      recentImgs,
      setFeaturedImg,
      featuredImg,
      logout
     } = this.props;

    // Sort top liked images desc
    const sortedImgs = _.sortBy(recentImgs, [img => {
      return img.likes.count;
    }]);
    const rankedImgs = sortedImgs.reverse(); // Sorted top liked images desc

    // Change 'created_time' to day of the week
    const chartImgsIsEmpty = this.state.chartImgs.length === 0;
    if (chartImgsIsEmpty) {
      const chartImgs = recentImgs.map(img => {
        const update = _.update(img, 'created_time', secs => {
          const date = new Date(secs * 1000);
          const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
          const day = days[date.getDay()];
          return day;
        });
        return update;
      });
      this.setState({ chartImgs });
    }

      return (
        <div className="container">

          <header className="pt-3">
            <Navigation data={userInfo} logout={logout} />
          </header>

          <hr className="pb-5"/>

          <div style={styles.chart}>
            <Chart
              chartImgs={this.state.chartImgs}
              setFeaturedImg={setFeaturedImg} />
          </div>

          <FeaturedImg img={featuredImg} />

          <AccountSummary
            data={userInfo}
            rankedImgs={rankedImgs} />

        </div>
      );
  }
}

export default Dashboard;
