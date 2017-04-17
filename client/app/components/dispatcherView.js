const React = require('react');

class DispatcherView extends React.Component {
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
                      <span className="glyphicon glyphicon-arrow-right"></span>
                      Next Week
                    </a></li>
                  </ul>
                </div>
            </div>
        </nav>
        <div className="col-md-12">
          <div className="container-fluid">
            <div className="col-md-3 nopadding">
              <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="btn-group btn-group-justified" role="group">
                      <a href="#" type="button" className="btn btn-raised btn-default">
                        REQUESTs
                      </a>
                      <a href="#" type="button" className="btn btn-raised btn-default">
                        PASSENGERS
                      </a>
                    </div>
                  </div>
                  <div className="panel-body">
                      <ul className="list-group">
                          <li className="list-group-item">
                              <a href="#">Dapibus ac facilisis in</a>
                              <a className="pull-right" href="#">HAHAHAH</a>
                          </li>
                          <br />
                          <li className="list-group-item">
                              <a href="#">Cras sit amet nibh libero</a>
                              <a className="pull-right" href="#">HAHAHAH</a>
                          </li>
                          <br />
                          <li className="list-group-item">
                              <a href="#">Porta ac consectetur ac</a>
                              <a className="pull-right" href="#">HAHAHAH</a>
                          </li>
                          <br />
                          <li className="list-group-item">
                              <a href="#">Vestibulum at eros</a>
                              <a className="pull-right" href="#">HAHAHAH</a>
                          </li>
                      </ul>
                  </div>
              </div>
            </div>
            <div className="col-md-2 nopadding">
              <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="btn-group btn-group-justified" role="group">
                      <a href="#" type="button" className="btn btn-raised btn-default">
                        VAN
                      </a>
                      <a href="#" type="button" className="btn btn-raised btn-default">
                        DAY
                      </a>
                    </div>
                  </div>
                  <div className="panel-body">
                      <ul className="list-group">
                          <li className="list-group-item">
                              <a href="#">Dapibus ac facilisis in</a>
                          </li>
                          <br />
                          <li className="list-group-item">
                              <a href="#">Cras sit amet nibh libero</a>
                          </li>
                          <br/>
                          <li className="list-group-item">
                              <a href="#">Porta ac consectetur ac</a>
                          </li>
                          <br />
                          <li className="list-group-item">
                              <a href="#">Vestibulum at eros</a>
                          </li>
                      </ul>
                  </div>
              </div>
            </div>

            <div className="col-md-7 nopadding">
              <div className="panel panel-default">
                <ul>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                  <li><span>This will be done in react</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DispatcherView;
