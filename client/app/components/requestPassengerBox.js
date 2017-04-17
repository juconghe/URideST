import React from 'react';
class RequestPassengerBox extends React.component{
  render(){
    return(
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
                        <br/>
                        <li className="list-group-item">
                            <a href="#">Cras sit amet nibh libero</a>
                            <a className="pull-right" href="#">HAHAHAH</a>
                        </li>
                        <br/>
                        <li className="list-group-item">
                            <a href="#">Porta ac consectetur ac</a>
                            <a className="pull-right" href="#">HAHAHAH</a>
                        </li>
                        <br/>
                        <li className="list-group-item">
                            <a href="#">Vestibulum at eros</a>
                            <a className="pull-right" href="#">HAHAHAH</a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = RequestPassengerBox;
