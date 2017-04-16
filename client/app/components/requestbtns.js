const React = require('react');

export default class RequestBtns extends React.Component {
  render() {
    return (
      <div className="container centered">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
            <div className="text-center">
                <div className="btn-group-vertical" role="group">
                    <a href="calendar.html" type="button" className="btn btn-lg btn-raised btn-default">
                      <h1>Request a New Ride</h1>
                    </a>
                    <a href="viewRide.html" type="button" className="btn btn-lg btn-raised btn-default">
                      <h1>View Your Ride</h1>
                    </a>
                  </div>
                </div>
        </div>
        <div className="col-md-4">
        </div>
      </div>
    );
  }
}
