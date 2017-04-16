import React from 'react';


export default class RequestPassengerBox extends React.component{
  render(){
    return(
      <div class="col-md-12">
        <div class="container-fluid">
          <div class="col-md-3 nopadding">
            <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="btn-group btn-group-justified" role="group">
                    <a href="#" type="button" class="btn btn-raised btn-default">
                      REQUESTs
                    </a>
                    <a href="#" type="button" class="btn btn-raised btn-default">
                      PASSENGERS
                    </a>
                  </div>
                </div>
                <div class="panel-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href="#">Dapibus ac facilisis in</a>
                            <a class="pull-right" href="#">HAHAHAH</a>
                        </li>
                        <br>
                        <li class="list-group-item">
                            <a href="#">Cras sit amet nibh libero</a>
                            <a class="pull-right" href="#">HAHAHAH</a>
                        </li>
                        <br>
                        <li class="list-group-item">
                            <a href="#">Porta ac consectetur ac</a>
                            <a class="pull-right" href="#">HAHAHAH</a>
                        </li>
                        <br>
                        <li class="list-group-item">
                            <a href="#">Vestibulum at eros</a>
                            <a class="pull-right" href="#">HAHAHAH</a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
    );
  }
}
