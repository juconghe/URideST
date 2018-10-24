import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle'

const navbarStyle = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class Navbar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root} >
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton className={classes.menuButton}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            URideST
          </Typography>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(navbarStyle)(Navbar);
