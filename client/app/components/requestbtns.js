const React = require('react');
const Footer = require('./footer');
import {Link} from 'react-router-dom';
class RequestBtns extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestPage = this.handleRequestPage.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleRequestPage() {
    const data = {
      currentPage:"requestDate"
    }
    this.props.switch(data);
  }

  handleSwitch(newpage) {
    const data = {
      currentPage:newpage.currentPage
    }
    this.props.switch(data);
  }
  render() {
    return (
      <div>
        <div className="container centered">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
              <div className="text-center">
                  <div className="btn-group-vertical" role="group">
                      <a ref="#" type="button"
                        className="btn btn-lg btn-raised btn-default"
                        onClick={this.handleRequestPage}>
                        <h1>Request a New Ride</h1>
                      </a>
                      <Link to="/viewRide" type="button" className="btn btn-lg btn-raised btn-default">
                        <h1>View Your Ride</h1>
                      </Link>
                    </div>
                  </div>
          </div>
          <div className="col-md-4">
          </div>
        </div>
        <Footer currentPage={this.props.currentPage} switch={this.handleSwitch}/>
      </div>
    );
  }
}
module.exports = RequestBtns;
