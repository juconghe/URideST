import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const footerStyler = theme => ({
    footer: {
        top:'auto',
        bottom: 0,
    },
    toolbar: {
        justifyContent: 'space-between',
    },
});

class Footer extends Component {
  render() {
      console.log(this.props);
      const {classes} = this.props;
    return (
        <AppBar position="fixed" color="primary" className={classes.footer}>
            <Toolbar className={classes.toolbar}>
            <Button variant="contained" component={Link} to={'/'+this.props.back}>
                Back
            </Button>
            <Button variant="contained" component={Link} to={'/'+this.props.next}>
                Next
            </Button>
            </Toolbar>
      </AppBar>
    )
  }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(footerStyler)(Footer);
