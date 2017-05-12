import React, { Component } from 'react';

class FeaturedImg extends Component {
  render() {
    const { img } = this.props;
    if (img) {
      const alt = img.caption ? img.caption.text : 'Featured image';
      return (
        <div>
          <h4>Selected Image</h4>
          <img src={img.images.thumbnail.url} alt={alt} />
          <p>Date posted: {img.created_time}</p>
          <p>Likes: {img.likes.count}</p>
        </div>
      );
    } else {
      return <i className="fa fa-spinner"></i>;
    }
  }
}

export default FeaturedImg;
