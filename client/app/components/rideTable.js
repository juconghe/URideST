const ReactDataGrid = require('react-data-grid');
const React = require('react');




class RideTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let title = this.props.title;
    let rideData = this.props.rideData;
    return (
      <div className="col-md-4">
          <div className="panel panel-default">
              <div className="panel-heading">{title}</div>
              <div className="panel-body">
                  <ul className="nav nav-pills nav-stacked">
                      {rideData.map((ride) =>
                        <li className="list-group-item" key={ride._id}>
                            <span href="#">{ride.pickupDate} - {ride.pickupTime}</span>
                            <span className="pull-right" href="#">{ride.pickup} -> {ride.dropoff}</span>
                        </li>)}
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}
module.exports = RideTable;
