import React, { Component } from 'react';
import './Likes.css';

// Components
import Chart from './Chart';
import FeaturedImg from './FeaturedImg';

class Likes extends Component {
  componentWillMount() {
    const { recentImgs } = this.props;
    this.setState({ featureImg: recentImgs[0] })  ;
  }
  setFeaturedImg = (featureImg, index) => {
    this.setState({featureImg});
  }
  render() {
    const { rankedImgs, recentImgs } = this.props;
    const { featureImg } = this.state;
    return (
      <div className="row">
        <div className="col height-chart">
          <Chart recentImgs={recentImgs} setFeaturedImg={this.setFeaturedImg} />
        </div>
      </div>
    );
  }
}

export default Likes;
