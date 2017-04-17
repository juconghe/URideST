const React = require('react');
class RideTable extends React.Component {
  render() {
    return (
      <div className="col-md-4">
          <div className="panel panel-default">
              <div className="panel-heading">Previous Ride</div>
              <div className="panel-body">
                  <ul className="list-group">
                      <li className="list-group-item">
                          <a href="#">Dapibus ac facilisis in</a>
                          <a className="pull-right" href="#">HAHAHAH</a>
                      </li>
                      <div className="list-group-separator"></div>
                      <li className="list-group-item">
                          <a href="#">Cras sit amet nibh libero</a>
                          <a className="pull-right" href="#">HAHAHAH</a>
                      </li>
                      <div className="list-group-separator"></div>
                      <li className="list-group-item">
                          <a href="#">Porta ac consectetur ac</a>
                          <a className="pull-right" href="#">HAHAHAH</a>
                      </li>
                      <div className="list-group-separator"></div>
                      <li className="list-group-item">
                          <a href="#">Vestibulum at eros</a>
                          <a className="pull-right" href="#">HAHAHAH</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}
module.exports = RideTable;
