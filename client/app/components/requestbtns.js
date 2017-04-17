const React = require('react');
const Navbar = require('./navbar');
const Footer = require('./footer');
import {Link} from 'react-router-dom';
class RequestBtns extends React.Component {
  constructor(props) {
    super(props);
    this.handleNextPage = this.handleNextPage.bind(this);
  }

  handleNextPage() {
    const data = {
      previousPage:this.props.currentPage,
      currentPage:"requestDate"
    }
    this.props.next(data);
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
                        onClick={this.handleNextPage}>
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
        <Footer />
      </div>
    );
  }
}
module.exports = RequestBtns;
