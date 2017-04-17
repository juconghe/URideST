import React from 'react';
class VanDay extends React.component {
  render(){
    return(
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
                    <br/>
                    <li className="list-group-item">
                        <a href="#">Cras sit amet nibh libero</a>
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <a href="#">Porta ac consectetur ac</a>
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <a href="#">Vestibulum at eros</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}
module.exports = VanDay;
