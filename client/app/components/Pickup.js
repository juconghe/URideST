import React from 'react';


export default class Pickup extends React.component {
  render() {
    return (
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
                                  Select a Pickup Location
                                </div>
                                <select class="select form-control" id="select" name="select">
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
                              <div class="form-group ">
                                  <input class="form-control input-lg" id="text" name="text" placeholder="Enter custom address here" type="text" />
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
