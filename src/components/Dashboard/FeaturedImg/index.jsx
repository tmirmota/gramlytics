import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

// Styling
const styles = {
  paper: {
    width: 150,
  },
}

class FeaturedImg extends Component {
  render() {
    const { img, title } = this.props.featured
    if (img) {
      const alt = img.caption ? img.caption.text : 'Featured image'
      return (
        <div className="row">
          <div className="col">
            <Paper style={styles.paper} className="float-right">
              <img src={img.images.thumbnail.url} alt={alt} />
            </Paper>
          </div>
          <div className="col">
            <h4>{title}</h4>
            <p>Day posted: {img.created_time}</p>
            <p>Likes: {img.likes.count}</p>
          </div>
        </div>
      )
    } else {
      return <i className="fa fa-spinner" />
    }
  }
}

export default FeaturedImg
