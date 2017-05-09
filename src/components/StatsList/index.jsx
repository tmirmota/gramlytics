import React, { Component } from 'react';

// Components
import Stat from './Stat';

class StatsList extends Component {
  render() {
    const { followed_by, follows, media } = this.props.data.counts;
    return (
      <div>
        <Stat name='Following' data={follows} />
        <Stat name='Followers' data={followed_by} />
        <Stat name='Posts' data={media} />
      </div>
    );
  }
}

export default StatsList;
