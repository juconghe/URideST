const React = require('react');
const ListGoup = require('./listGroup');
const ReactDataGrid = require('react-data-grid');
const Example = require('./example');




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
    let items = this.state.items;
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
                    <ListGoup items={items}/>
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
                    <ListGoup items={items} />
                  </div>
              </div>
            </div>

            <div className="col-md-7 nopadding">
              <div className="panel panel-default">
                <Example />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DispatcherView;
