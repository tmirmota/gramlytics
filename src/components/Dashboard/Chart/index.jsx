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
  CartesianGrid,
  Tooltip
} from 'recharts';

class Chart extends Component {
  render() {
    const { chartImgs, setFeaturedImg } = this.props;
    return (
      <ResponsiveContainer>
        <BarChart data={chartImgs} margin={{top: 20}}>
          <Bar
            type="monotone"
            dataKey="likes.count"
            onClick={setFeaturedImg}
            stroke="#c2bff4"
            fill="#8884d8"
          />
          <CartesianGrid vertical={false} />
          <XAxis tickLine={false} axisLine={false} dataKey="created_time" />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip content={<CustomToolTip />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default Chart;
