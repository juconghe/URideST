import React from 'react';


export default class VanDay extends React.component {
  render(){
    return(
      <div class="col-md-2 nopadding">
        <div class="panel panel-default">
            <div class="panel-heading">
              <div class="btn-group btn-group-justified" role="group">
                <a href="#" type="button" class="btn btn-raised btn-default">
                  VAN
                </a>
                <a href="#" type="button" class="btn btn-raised btn-default">
                  DAY
                </a>
              </div>
            </div>
            <div class="panel-body">
                <ul class="list-group">
                    <li class="list-group-item">
                        <a href="#">Dapibus ac facilisis in</a>
                    </li>
                    <br>
                    <li class="list-group-item">
                        <a href="#">Cras sit amet nibh libero</a>
                    </li>
                    <br>
                    <li class="list-group-item">
                        <a href="#">Porta ac consectetur ac</a>
                    </li>
                    <br>
                    <li class="list-group-item">
                        <a href="#">Vestibulum at eros</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}
