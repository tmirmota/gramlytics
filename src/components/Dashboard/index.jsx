import React, { Component } from 'react';

// Components
import Nav from './Nav';
import StatsList from './StatsList';

class Dashboard extends Component {
  render() {
    const { data, logout } = this.props;
    return (
      <div className="container-fluid">
        <Nav data={data} logout={logout} />
        <hr />
        <StatsList data={data} />
      </div>
    );
  }
}

export default Dashboard;
