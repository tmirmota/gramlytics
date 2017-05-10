import React, { Component } from 'react';

// Components
import Stat from './Stat';

class StatsList extends Component {
  render() {
    const { followed_by, follows, media } = this.props.data.counts;
    return (
      <div className="row mt-3">
        <div className="col">
          <Stat name='Following' data={follows} backgroundColor="rgb(26, 205, 223)" />
        </div>
        <div className="col">
          <Stat name='Followers' data={followed_by} backgroundColor="#43cea2" />
        </div>
        <div className="col">
          <Stat name='Posts' data={media} backgroundColor="#4ac4b2" />
        </div>
      </div>
    );
  }
}

export default StatsList;
