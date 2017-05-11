import React, { Component } from 'react';

// Components
import MostLiked from './MostLiked';

class Likes extends Component {
  render() {
    const { rankedImgs } = this.props;
    return (
      <div>
        <MostLiked rankedImgs={rankedImgs} />
      </div>
    );
  }
}

export default Likes;
