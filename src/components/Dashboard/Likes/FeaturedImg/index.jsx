import React, { Component } from 'react';

class FeaturedImg extends Component {
  render() {
    const { img } = this.props;
    if (img) {
      const alt = img.caption ? img.caption.text : 'Featured image';
      return (
        <div>
          <img src={img.images.thumbnail.url} alt={alt} />
        </div>
      );
    } else {
      return <i className="fa fa-spinner"></i>;
    }
  }
}

export default FeaturedImg;
