import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const footerStyler = theme => ({
    footer: {
        top:'auto',
        bottom: 0,
    },
    toolbar: {
        justifyContent: 'space-between',
    },
});

const mapStateToProps = state => ({
    ...state.nextPage
})

class Footer extends Component {
  render() {
      console.log(this.props);
      const {classes} = this.props;
      let temp;

      if(this.props.back !== '' || this.props.next !== '') {
        temp = <AppBar position="fixed" color="primary" className={classes.footer}>
                    <Toolbar className={classes.toolbar}>
                    <Button variant="contained" component={Link} to={'/'+this.props.back}>
                        Back
                    </Button>
                    <Button variant="contained" component={Link} to={'/'+this.props.next}>
                        Next
                    </Button>
                    </Toolbar>
                </AppBar>
        } else {
            temp = <div />
        }
    return (
        <div>{temp}</div>
    )
  }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(footerStyler)(connect(mapStateToProps)(Footer));
