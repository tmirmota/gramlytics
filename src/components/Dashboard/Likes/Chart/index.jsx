import React, { Component } from 'react';
import _ from 'lodash';

// Components
// import CustomToolTip from './CustomToolTip';

// Recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

class Chart extends Component {
  render() {
    const { recentImgs } = this.props;
    const updateImgs = recentImgs.map(img => {
      const update = _.update(img, 'created_time', secs => {
        const date = new Date(secs * 1000);
        const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const day = days[date.getDay()];
        console.log(day);
        return day;
      })
      return update;
    })
    return (
      <BarChart width={800} height={400} data={updateImgs}>
        <Bar type="monotone" dataKey="likes.count" stroke="#8884d8" fill="#8884d8" />
        <XAxis dataKey="created_time" />
        <YAxis />
        <Tooltip />
      </BarChart>
    );
  }
}

export default Chart;
