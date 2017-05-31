import React, { Component } from 'react';

// Components
import Stat from './Stat';

class AccountSummary extends Component {
  render() {
    const { followed_by, follows, media } = this.props.data.counts;
    return (
      <div>
        <h2>Account Summary</h2>
        <div className="row justify-content-md-center text-center">
          <div className="col">
            <Stat name='Total Posts' data={media} />
          </div>
          <div className="col">
            <Stat name='Following' data={follows} />
          </div>
          <div className="col">
            <Stat name='Followers' data={followed_by} />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSummary;
