import React, { Component } from 'react';

// Components
import MostLiked from './MostLiked';
import Chart from './Chart';

class Likes extends Component {
  render() {
    const { rankedImgs, recentImgs } = this.props;
    console.log(recentImgs);
    return (
      <div>
        <div className="row">
          <div className="col">
            <Chart recentImgs={recentImgs} />
          </div>
          <div className="col">
            <MostLiked rankedImgs={rankedImgs} />
          </div>
        </div>

      </div>
    );
  }
}

export default Likes;
