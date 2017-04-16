import React from 'react';

export default class AvaliableTime extends React.component{
  render(){
    return(
      <div class="container">
        <div class="col-md-4">
        </div>
        <div class="col-md-4 centered">
            <div class="text-center">
                <div class="container-fluid" style="max-width:450px">
                    <div class="row">
                      <form method="post">
                          <div class="form-group ">
                            <div class="well">
                              Select an Available Time
                            </div>
                              <select class="select form-control" id="select" name="select">
                                <option value="Army ROTC">
                                  2:15pm-3:15pm
                                </option>
                                <option value="Library">
                                  3:15pm-4:15pm
                                </option>
                                <option value="Studio Arts Buidling">
                                  4:15pm-5:15pm
                                </option>
                                <option value="Arnold House">
                                  5:15pm-6:15pm
                                </option>
                              </select>
                          </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
        </div>
      </div>
    );
  }
}
