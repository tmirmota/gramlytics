import React, { Component } from 'react';

// Material UI
import Paper from 'material-ui/Paper';

// Components
import Stat from './Stat';
import MostLiked from '../MostLiked';

// Styling
const paperStyle = {
  padding: '1rem'
}

class AccountSummary extends Component {
  render() {
    const { followed_by, follows, media } = this.props.data.counts;
    const { rankedImgs } = this.props;
    return (
      <Paper style={paperStyle}>
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
            <div>
              <MostLiked rankedImgs={rankedImgs}/>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default AccountSummary;
