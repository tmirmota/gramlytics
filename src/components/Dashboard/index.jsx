import React, { Component } from 'react';

// Components
import Admin from './Admin';
import StatsList from './StatsList';

class Dashboard extends Component {
  render() {
    const { data, logout } = this.props;
    return (
      <div className="wrapper">
        <div className="container">
          <nav className="navbar navbar-light bg-faded">
            <Admin data={data} logout={logout}/>
          </nav>
          <div>
            <StatsList data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
