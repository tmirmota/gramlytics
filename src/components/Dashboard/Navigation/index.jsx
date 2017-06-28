import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Material UI
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

// Styling
const styles = {
  iconButtonStyle: {
    width: 60,
    height: 60,
    padding: 0,
  },
  avatarStyle: {
    width: 60,
    height: 60,
  },
  logoutBtn: {
    textDecoration: 'none',
  },
}

class Navigation extends Component {
  state = {
    open: false,
  }

  handleTouchTap = event => {
    event.preventDefault()

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render() {
    // Destructure Props
    const { logout } = this.props
    // Destructure Props Data
    const { profile_picture } = this.props.data
    // Destructure State
    const { open, anchorEl } = this.state

    return (
      <nav className="row">
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
          </IconButton>

          <Popover
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
            onRequestClose={this.handleRequestClose}
          >
            <Link to="/" onClick={logout} style={styles.logoutBtn}>
              <Menu>
                <MenuItem primaryText="Logout" />
              </Menu>
            </Link>
          </Popover>

        </div>

      </nav>
    )
  }
}

export default Navigation
