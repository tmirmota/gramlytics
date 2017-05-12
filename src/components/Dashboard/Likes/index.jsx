import React, { Component } from 'react';
import './Likes.css';

// Components
import Chart from './Chart';
import FeaturedImg from './FeaturedImg';

class Likes extends Component {
  componentWillMount() {
    const { recentImgs } = this.props;
    this.setState({ featuredImg: recentImgs[0] })  ;
  }
  setFeaturedImg = (featuredImg, index) => {
    this.setState({featuredImg});
  }
  render() {
    const { rankedImgs, chartImgs } = this.props;
    const { featuredImg } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col height-chart">
            <Chart chartImgs={chartImgs} setFeaturedImg={this.setFeaturedImg} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FeaturedImg img={featuredImg} />
          </div>
        </div>
      </div>
    );
  }
}

export default Likes;
