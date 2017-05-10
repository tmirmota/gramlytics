import React, { Component } from 'react';

// Components
import Admin from '../Admin';
import StatsList from '../StatsList';

class Dashboard extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row dashboard-container h-100">
            <div className="col-md-2 bg-faded pt-4">
              <Admin data={data} />
            </div>
            <div className="col-md-10 h-100">
              <StatsList data={data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
