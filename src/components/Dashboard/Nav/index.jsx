import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material UI
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

// Styling
const styles = {
  iconButtonStyle: {
    width: 60,
    height: 60,
    padding: 0
  },
  avatarStyle: {
    width: 60,
    height: 60
  },
  logoutBtn: {
    textDecoration: 'none'
  }
}

class Nav extends Component {
  state = {
    open: false
  }

  handleTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }


  render() {
    // Dismount Props
    const { logout } = this.props;
    // Dismount Props Data
    const { profile_picture, full_name, username } = this.props.data;
    // Dismount State
    const { open, anchorEl } = this.state;

    return (
      <nav className="row pt-3">
        <div className="col">
          <span className="display-4">Gramlytics</span>
        </div>
        <div className="col text-right">
          <IconButton
            onTouchTap={this.handleTouchTap}
            style={styles.iconButtonStyle}
            iconStyle={styles.avatarStyle}
            >
            <Avatar src={profile_picture} />
            {/* <img
              src={profile_picture}
              alt={`${full_name}`}
              className="rounded-circle"
              width="60"
            /> */}
          </IconButton>
          <Popover
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
            >
              <Link to='/' onClick={logout} style={styles.logoutBtn}>
                <Menu>
                  <MenuItem primaryText="Logout" />
                </Menu>
              </Link>
          </Popover>
        </div>
      </nav>
    );
  }
}

export default Nav;
