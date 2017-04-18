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
                         <div className="row">
                           <span className="margin-left">{ride.pickupDate}</span>
                           <span className="pull-right margin-right">{ride.pickup} -> {ride.dropoff}</span>
                         </div>
                         <div className="row">
                           <span className="margin-left">{ride.pickupTime}</span>
                         </div>
                       </li>)}
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}
module.exports = RideTable;
