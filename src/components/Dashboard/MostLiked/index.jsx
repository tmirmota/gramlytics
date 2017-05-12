import React, { Component } from 'react';

class MostLiked extends Component {
  renderTopImgs() {
    const { rankedImgs } = this.props;
    return rankedImgs.map((img, index) => {
      const isTopFiveImg = index < 5;
      if (isTopFiveImg) {
        return (
          <div className="col" key={index}>
            <img src={img.images.thumbnail.url} alt={img.caption.text} className="mb-2" />
            <p><i className="fa fa-heart-o"></i> {img.likes.count}</p>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <p className="lead">Posts that generated the most likes</p>
        <div className="row">
          {this.renderTopImgs()}
        </div>
      </div>
    );
  }
}

export default MostLiked;
