import React, { Component } from 'react';
import './CustomToolTip.css';

class CustomToolTip extends Component {
  render() {
    const imgArr = this.props.payload[0];
    if (imgArr) {
      const img = imgArr.payload;
      return (
<<<<<<< HEAD:src/components/Dashboard/Likes/Chart/CustomToolTip.jsx
        <div className="floating-thumbnail p-2 text-center">
          <img src={img.images.thumbnail.url} alt="Featured thumbnail" width="50" className="rounded"/>
=======
        <div className="floating-thumbnail p-2 text-center rounded">
          <img src={img.images.thumbnail.url} alt="Featured thumbnail" width="75" />
>>>>>>> client-side-app:src/components/Dashboard/Chart/CustomToolTip.jsx
          <div>
            <span><i className="fa fa-heart text-danger"></i> {img.likes.count}</span>
          </div>
        </div>
      );
    } else {
        return null;
    }
  }
}

export default CustomToolTip;
