const React = require('react');
const RideGrid = require('./rideGrid');
const VanDay = require('./vanDay');
const RequestPassengerBox = require('./requestPassengerBox');


class DispatcherView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[[0,"Dapibus ac facilisis","HAHAHAH"],
            [1,"Dapibus ac facilisis","HAHAHAH"],
            [2,"Dapibus ac facilisis","HAHAHAH"],
            [3,"Dapibus ac facilisis","HAHAHAH"],
            [4,"Dapibus ac facilisis","HAHAHAH"]]

    }
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="dispatcherView.html">
                        <img src="img/umass.png" height="30" width="90" />
                    </a>
                </div>
                <div className="navbar-collapse collapse navbar-responsive-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">
                      <span className="glyphicon glyphicon-arrow-left"></span>
                      Previous Week
                    </a></li>
                    <li><a href="#">
                      Next Week
                      <span className="glyphicon glyphicon-arrow-right"></span>
                    </a></li>
                  </ul>
                </div>
            </div>
        </nav>
        <div className="col-md-12">
          <div className="container-fluid">
            <RequestPassengerBox/>
            <div>
              <VanDay/>
            </div>
            <div className="col-md-7 nopadding">
              <div className="panel panel-default">
                <RideGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DispatcherView;
