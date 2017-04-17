const React = require('react');
class PickUp extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="col-md-4">
      </div>
      <div className="col-md-4 centered">
          <div className="text-center">
              <div className="container-fluid">
                  <div className="row">
                          <form method="post">
                              <div className="form-group ">
                                <div className="well">
                                  Select a Pickup Location
                                </div>
                                <select className="select form-control" id="select" name="select">
                                  <option value="Army ROTC">
                                    Army ROTC
                                  </option>
                                  <option value="Library">
                                    Library
                                  </option>
                                  <option value="Studio Arts Buidling">
                                    Studio Arts Buidling
                                  </option>
                                  <option value="Arnold House">
                                    Arnold House
                                  </option>
                                </select>
                              </div>
                              <div className="form-group ">
                                  <input className="form-control input-lg" id="text" name="text" placeholder="Enter custom address here" type="text" />
                              </div>
                          </form>
                  </div>
              </div>
          </div>
      </div>
      <div className="col-md-4">
      </div>
      </div>
    );
  }
}
module.exports = PickUp;
