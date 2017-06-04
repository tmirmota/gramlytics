import React, { Component } from 'react';

// Material UI
import Paper from 'material-ui/Paper';

// Styles
const styles = {
  paper: {
    width: 150,
    margin: 'auto'
  }
}

class MostLiked extends Component {
  renderTopImgs() {
    const { rankedImgs } = this.props;
    return rankedImgs.map((img, index) => {
      const isTopFiveImg = index < 5;
      if (isTopFiveImg) {
        return (
          <div className="col" key={index}>
            <Paper style={styles.paper} className="mb-3">
              <img src={img.images.thumbnail.url} alt={img.caption.text} />
            </Paper>
            <p><i className="fa fa-heart-o"></i> {img.likes.count}</p>
          </div>
        );
      };
    });
  }

  render() {
    return (
      <div>
        <p className="lead">Posts that generated the most likes</p>
        <div className="row text-center">
          {this.renderTopImgs()}
        </div>
      </div>
    );
  }
}

export default MostLiked;
