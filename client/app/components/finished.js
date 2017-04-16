import React from 'react';


export default class Finished extends React.component {
  render() {
    return (
      <div class="container">
        <div class="col-md-4">
        </div>
        <div class="col-md-4 centered">
            <div class="text-center">
              <div class="container-fluid" style="max-width:450px">
                <div class="row">
                    <div class="well">
                      <h1>Your ride has been requested.
                        It is currently pending. The dispatcher will review your request
                        as soon as possible
                      </h1>
                    </div>
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
