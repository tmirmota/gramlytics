import React, { Component } from 'react';
import _ from 'lodash';

// Components
import CustomToolTip from './CustomToolTip';

// Recharts
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

// Styles
const style = {
  height: '300'
}

class Chart extends Component {
  render() {
    const { chartImgs, setFeaturedImg } = this.props;
    return (
      <ResponsiveContainer style={style}>
        <BarChart data={chartImgs}>
          <Bar
            type="monotone"
            dataKey="likes.count"
            onClick={setFeaturedImg}
            stroke="#8884d8"
            fill="#8884d8" />
          <XAxis dataKey="created_time" />
          <YAxis />
          <Tooltip content={<CustomToolTip />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default Chart;
