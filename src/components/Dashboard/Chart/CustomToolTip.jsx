import React, { Component } from 'react'
import './CustomToolTip.css'

class CustomToolTip extends Component {
  render() {
    const imgArr = this.props.payload[0]
    if (imgArr) {
      const img = imgArr.payload
      return (
        <div className="floating-thumbnail p-2 text-center rounded">
          <img
            src={img.images.thumbnail.url}
            alt="Featured thumbnail"
            width="75"
          />
          <div>
            <span>
              <i className="fa fa-heart text-danger" /> {img.likes.count}
            </span>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default CustomToolTip
