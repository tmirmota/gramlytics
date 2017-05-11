import React, { Component } from 'react';

// Recharts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

// Components
import MostLiked from './MostLiked';

class Likes extends Component {
  render() {
    const { rankedImgs, recentImgs } = this.props;
    console.log(recentImgs);
    return (
      <div>
        <div className="row">
          <div className="col">
            <LineChart width={800} height={400} data={recentImgs}>
              <Line type="monotone" dataKey="likes.count" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="created_time" />
              <YAxis />
              <Tooltip />
            </LineChart>
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
